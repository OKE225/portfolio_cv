export interface Technology {
  name: string;
  icon: string;
  color: string;
}

export interface Project {
  title: string;
  image: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
}
