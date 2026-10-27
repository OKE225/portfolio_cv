import Link from "next/link";

export default function NotFound() {
  return (
    <div className="absolute z-150 overflow-hidden w-full h-full flex items-center flex-col justify-center font-black text-rose-500">
      <h1 className="text-9xl">404</h1>
      <h2 className="text-7xl">Not Found</h2>
      <Link href="/" className="mt-10 text-xl underline">
        powrót
      </Link>
    </div>
  );
}
