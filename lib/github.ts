const USERNAME = process.env.GITHUB_USERNAME ?? "OKE225";
const TOKEN = process.env.GITHUB_TOKEN;

const WEEKS = 40;
const REVALIDATE_SECONDS = 60 * 60;

export type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export type GithubStats = {
  publicRepos: number;
  commits: number;
  totalStars: number;
  totalContributions: number;
  longestStreak: number;
  topLanguage: string;
  weeks: ContributionDay[][];
};

const LEVELS = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
} as const;

const QUERY = /* GraphQL */ `
  query ($login: String!) {
    user(login: $login) {
      repositories(
        first: 100
        ownerAffiliations: OWNER
        privacy: PUBLIC
        isFork: false
        orderBy: { field: PUSHED_AT, direction: DESC }
      ) {
        totalCount
        nodes {
          stargazerCount
          primaryLanguage {
            name
          }
        }
      }
      contributionsCollection {
        totalCommitContributions
        contributionCalendar {
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

type GraphQLResponse = {
  data?: {
    user: {
      repositories: {
        totalCount: number;
        nodes: {
          stargazerCount: number;
          primaryLanguage: { name: string } | null;
        }[];
      };
      contributionsCollection: {
        totalCommitContributions: number;
        contributionCalendar: {
          weeks: {
            contributionDays: {
              date: string;
              contributionCount: number;
              contributionLevel: keyof typeof LEVELS;
            }[];
          }[];
        };
      };
    } | null;
  };
  errors?: { message: string }[];
};

export async function getGithubStats(): Promise<GithubStats | null> {
  if (!TOKEN) {
    console.error("Brak GITHUB_TOKEN w zmiennych środowiskowych.");
    return null;
  }

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: QUERY, variables: { login: USERNAME } }),
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) throw new Error(`GitHub API: ${res.status}`);

    const json = (await res.json()) as GraphQLResponse;
    if (json.errors?.length) throw new Error(json.errors[0].message);

    const user = json.data?.user;
    if (!user) throw new Error(`Nie znaleziono użytkownika ${USERNAME}`);

    const allWeeks =
      user.contributionsCollection.contributionCalendar.weeks.map((w) =>
        w.contributionDays.map<ContributionDay>((d) => ({
          date: d.date,
          count: d.contributionCount,
          level: LEVELS[d.contributionLevel],
        })),
      );

    const weeks = allWeeks.slice(-WEEKS);
    const totalContributions = weeks
      .flat()
      .reduce((sum, d) => sum + d.count, 0);

    let longestStreak = 0;
    let current = 0;

    for (const day of allWeeks.flat()) {
      current = day.count > 0 ? current + 1 : 0;
      longestStreak = Math.max(longestStreak, current);
    }

    const langCount = new Map<string, number>();

    for (const repo of user.repositories.nodes) {
      const name = repo.primaryLanguage?.name;
      if (name) langCount.set(name, (langCount.get(name) ?? 0) + 1);
    }

    const topLanguage =
      [...langCount.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? "—";

    const totalStars = user.repositories.nodes.reduce(
      (sum, repo) => sum + repo.stargazerCount,
      0,
    );

    return {
      publicRepos: user.repositories.totalCount,
      commits: user.contributionsCollection.totalCommitContributions,
      totalStars,
      totalContributions,
      longestStreak,
      topLanguage,
      weeks,
    };
  } catch (error) {
    console.error("Nie udało się pobrać danych z GitHuba:", error);
    return null;
  }
}
