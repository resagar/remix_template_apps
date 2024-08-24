import { LinkedinIcon } from "lucide-react";
import Twitter from "~/icons/twitter.png";
import Logo from "~/logo/logo.png";

export const Footer = () => (
  <footer className="footer px-8 py-4 bg-base-100">
    <aside className="items-center grid-flow-col">
      <img alt="logo" src={Logo} className="size-10" />
      <p>Copyright © 2024 - All right reserved</p>
    </aside>
    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a
        href="https://twitter.com/rsamuelgarcia"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="X (twitter)" src={Twitter} className="size-4" />
      </a>
      <a
        href="https://www.linkedin.com/in/renegarcia-software-backend/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinIcon className="size-4" />
      </a>
    </nav>
  </footer>
);
