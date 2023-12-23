import { Link } from "react-router-dom";
import logo from "./logo.png";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 shadow-lg rounded-sm">
      <p className="text-lg font-semibold">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-6 mx-auto" />
        </Link>
      </p>
      <p className="text-sm mt-2">&copy; 2023 Crypto</p>
    </footer>
  );
};

export default Footer;
