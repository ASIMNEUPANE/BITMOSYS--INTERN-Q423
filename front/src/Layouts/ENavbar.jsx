

import React from "react";
import { Link } from "react-router-dom";

export default function ENavbar() {
  return (
    <nav className=" w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 shadow-lg rounded-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-semibold">
          Your Logo
        </Link>

        <div className="flex gap-4">
          <Link to="/" className="text-lg hover:text-gray-300 transition duration-300">
            Home
          </Link>

          <Link to="/cryptos" className="text-lg hover:text-gray-300 transition duration-300">
            Cryptos
          </Link>

          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  );
}
