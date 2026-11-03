import Link from "next/link";
import Container from "../UI/Container";

const Footer = () => {
  return (
    <footer className="pt-12 pb-8">
      <Container className="gap-8">
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8 max-sm:gap-4 text-[15px]">
          <div>
            <p className="font-pixelify text-xl text-white">
              Patryk Jastrzębowski
            </p>
            <p>Fullstack Developer</p>
          </div>

          <div>
            <p className="font-pixelify text-xl text-white">Śledź mnie</p>
            <Link href="https://github.com/OKE225" target="_blank">
              GitHub
            </Link>
          </div>

          <div>
            <p className="font-pixelify text-xl text-white">Kontakt</p>
            <p>patryk.jastrzebowski.dev@gmail.com</p>
          </div>
        </div>

        <div className="text-[13px] text-center pt-5 border-t border-t-[rgb(42,45,92)]">
          <p>© 2026 Patryk Jastrzębowski. Wszelkie prawa zastrzeżone</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
