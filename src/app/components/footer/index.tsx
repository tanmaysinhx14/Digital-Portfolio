import Link from "next/link";
import { footerData } from "@/data/portfolio";

const Footer = () => {
  return (
    <footer className="footer-shell">
        <div className="container portfolio-container">
          <div className="footer-inner">
            <Link href="/" className="footer-brand text-decoration-none">Tanmay<span>Digital Portfolio</span></Link>
            <p className="mb-0 footer-meta">{footerData.note}</p>
            <div className="footer-links">
              <Link href="/blogs">Field notes</Link>
              <Link href="#top">Back to top <span aria-hidden="true">↑</span></Link>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
