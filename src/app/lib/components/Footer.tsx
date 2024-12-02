import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="py-4">
      <div className="flex flex-col items-center gap-4">
        <nav className="flex gap-4 text-gray-200">
          <Link href="/profiles">Community Profiles</Link>
          <Link href="/sign-in">Sign In</Link>
        </nav>
        <div className="text-gray-400">
          &copy;{new Date().getFullYear()} fullstack.chat
        </div>
      </div>
    </footer>
  );
}

export default Footer;
