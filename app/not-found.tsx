import Link from "next/link";

export default function NotFound() {
  return (
    <div className="">
      <h1 className="">404</h1>
      <h2 className="">Not Found</h2>
      <Link href="/" className="underline">
        powrót
      </Link>
    </div>
  );
}
