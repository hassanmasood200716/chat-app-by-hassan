"use client";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-around items-center">
        <div className="text-yellow-400 text-2xl font-bold">
          <Link href="/">PieChat</Link>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-white font-bold text-md hover:text-gray-300">
            HOME
          </Link>
          <Link href="/aboutus" className="text-white font-bold text-md hover:text-gray-300">
            ABOUT US
          </Link>
          <Link href="/forums" className="text-white font-bold text-md hover:text-gray-300">
            FORUMS
          </Link>
          <UserButton />
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl focus:outline-none"
          >
            &#x22EE; {/* Three Dot Button */}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Show or Hide Based on isMenuOpen */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-4 w-48 bg-blue-600 rounded-lg shadow-lg">
          <div>
            <Link
              href="/"
              className="block px-4 py-2 text-md font-bold text-white hover:bg-gray-700"
            >
              HOME
            </Link>
            <Link
              href="/aboutus"
              className="block px-4 py-2 text-md font-bold text-white hover:bg-gray-700"
            >
              ABOUT US
            </Link>
            <Link
              href="/forums"
              className="block px-4 py-2 text-md font-bold text-white hover:bg-gray-700"
            >
              FORUMS
            </Link>
            <div className="px-4 py-2">
              <UserButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
