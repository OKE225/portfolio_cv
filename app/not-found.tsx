import UnlockOnMount from "@/components/UnlockOnMount";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex relative flex-col items-center justify-center max-w-190 h-screen text-center gap-6 mx-auto z-100">
      <UnlockOnMount id="bug" />

      <span className="bg-[rgb(18,20,58)] text-[13px] text-white py-1.5 px-4 border border-[rgb(42,45,92)]">
        Błąd 404
      </span>
      <h1 className="font-pixelify font-bold text-[260px] text-rose-500 leading-[0.9]">
        404
      </h1>
      <h2 className="font-pixelify font-bold text-5xl text-white leading-[1.1] m-0">
        Strona nie istnieje
      </h2>
      <p className="text-[17px] max-w-140">
        Link jest nieprawidłowy albo strona została przeniesiona. Wróć do strony
        głównej
      </p>

      <div className="bg-[rgb(15,17,50)] flex flex-col gap-1 w-full max-w-130 text-left text-white text-sm py-5 px-6 border border-[rgb(42,45,92)] border-t-3 border-t-rose-500">
        <p>
          &gt; GET /
          <span className="blur-xs select-none pointer-events-none">
            niespodzianka
          </span>
        </p>
        <p className="text-rose-500">✖ 404 Not Found</p>
        <p>&gt; Sugestia: wróć do &lt;Home /&gt;</p>
      </div>

      <div className="flex">
        <Link
          href="/"
          className="bg-rose-500 text-[rgb(10,11,38)] font-bold min-h-11 py-3 px-7 border-2 border-rose-500 hover:scale-98 transition max-md:text-lg max-lg:w-full mx-1">
          Wróć na stronę główną
        </Link>
        <Link
          href="/#projects"
          className="text-rose-500 font-bold min-h-11 py-3 px-7 border-2 border-rose-500 hover:scale-98 transition max-md:text-lg max-lg:w-full mx-1">
          Zobacz moje projekty
        </Link>
      </div>
    </div>
  );
}
