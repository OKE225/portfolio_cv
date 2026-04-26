import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative left-0 bottom-0 bg-slate-900 text-gray-400 w-screen py-4">
      <div className="max-w-5xl max-xl:max-w-4xl max-lg:w-[90%] m-auto">
        <div className="grid grid-cols-3 max-lg:grid-cols-2">
          <div>
            <p>Patryk Jastrzębowski</p>
            <p>Frontend Developer</p>
          </div>

          <div>
            <h4>Śledź mnie</h4>
            <ul>
              <li className="underline">
                <Link href="https://github.com/OKE225">GitHub</Link>
              </li>
              <li className="underline">
                <Link href="https://www.linkedin.com/in/patryk-jastrz%C4%99bowski">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Kontakt</h4>
            <p>patryk.jastrzebowski.dev@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-5 pt-2 text-center font-bold">
          © 2026 Patryk Jastrzębowski. Wszelkie prawa zastrzeżone
        </div>
      </div>
    </footer>
  );
};

export default Footer;
