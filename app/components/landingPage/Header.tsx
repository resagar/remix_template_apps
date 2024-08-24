import { Link } from "@remix-run/react";
import logo from "~/logo/logo.png";

export const Header = () => (
  <header className="w-full px-8 py-4">
    <nav className="flex flex-row items-center justify-between bg-base-100">
      <div>
        <Link
          to="/"
          className="flex flex-row justify-center items-center gap-1"
        >
          <img className="size-12" alt="logo" src={logo} />
          <h1 className="text-xl">Template</h1>
        </Link>
      </div>
      <div className="flex flex-row items-center gap-1">
        <Link to="/" className="btn">
          Login
        </Link>
      </div>
    </nav>
  </header>
);
