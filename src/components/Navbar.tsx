import { Link } from "react-router-dom";
import { SpotlightNavbar } from "@/components/ui/spotlight-navbar";
import salamanderLogo from "../assets/salamanderlogo.jpeg";

const NavBar = () => {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-center px-6">
        <Link to="/" className="absolute left-6 flex items-center">
          <img
            src={salamanderLogo}
            alt="Salamander Tech Hub logo"
            className="h-10 w-auto object-contain"
          />
        </Link>
        <SpotlightNavbar />
      </div>
    </header>
  );
};

export default NavBar;
