import Link from "next/link";

export default function NotFound() {
  return (
    <div className="absolute z-150 overflow-hidden w-full h-full flex items-center flex-col justify-center font-black text-rose-500">
      <h1 className="text-9xl intersect:motion-preset-blur-right intersect:motion-delay-500 intersect-once">
        404
      </h1>
      <h2 className="text-7xl intersect:motion-preset-blur-right intersect:motion-delay-1000 intersect-once">
        Not Found
      </h2>
      <Link
        href="/"
        className="mt-10 text-xl underline intersect:motion-preset-blur-right intersect:motion-delay-1500 intersect-once">
        powrót
      </Link>
    </div>
  );
}
