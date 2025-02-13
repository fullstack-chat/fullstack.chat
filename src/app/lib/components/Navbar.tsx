"use client";

import React, { useState } from "react";
import Link from "next/link";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  SignIn,
  SignInButton,
  UserProfile,
  useUser,
  UserButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

function Navbar() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <nav className="flex justify-center items-center pb-8">
      <div className="flex items-center gap-4 text-sm">
        <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
        <Link href="/episodes" className="hover:text-gray-300 transition-colors">Episodes</Link>
        <Link href="/profiles" className="hover:text-gray-300 transition-colors">Member Profiles</Link>
        <SignedIn>
          <Link href="/me" className="hover:text-gray-300 transition-colors">My Profile</Link>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in" className="hover:text-gray-300 transition-colors">Sign In</Link>
        </SignedOut>
      </div>

      {/* <div className="container flex flex-col h-full justify-end gap-10 text-2xl md:flex-row md:h-auto md:gap-8 md:text-lg">
				{ isSignedIn ?
				<>
					<Link href="/profile">Profile</Link>
					<UserButton />
				</> :
					<SignInButton className='bg-gradient-to-b from-zinc-800 to-zinc-800 hover:from-zinc-700 hover:to-zinc-800 p-2 rounded transition-all' />
				}
			</div> */}

      {/* {!isMenuShown && (
				<button
					className="md:hidden text-white text-3xl"
					onClick={() => setIsMenuShown(true)}
				>
					<AiOutlineMenu />
				</button>
			)}

			{isMenuShown && (
				<button
					className="md:hidden text-white text-3xl z-50"
					onClick={() => setIsMenuShown(false)}
				>
					<AiOutlineClose />
				</button>
			)}

			<ul
				className={`${
					isMenuShown ? `absolute` : `hidden`
				} top-0 left-0 w-full h-screen text-right gap-10 md:flex md:top-[unset] md:left-[unset] md:w-auto md:h-auto md:gap-8 justify-end`}
			>
				<div className="container flex flex-col h-full justify-end gap-10 text-2xl md:flex-row md:h-auto md:gap-8 md:text-lg">
					<li>
						<Link to="/" onClick={() => setIsMenuShown(false)} >Home</Link>
					</li>
					<li>
						<a href="https://blog.fullstack.chat/" target="_blank" onClick={() => setIsMenuShown(false)}>
							Blog
						</a>
					</li>
					<li>
						<Link to="#about" onClick={() => setIsMenuShown(false)}>About</Link>
					</li>
					<li>
						<Link to="#rules" onClick={() => setIsMenuShown(false)}>Join Us</Link>
					</li>
				</div>
			</ul>

			<div className="w-[80px]">
				<button className="bg-[#00A8E8] rounded-xl px-4 py-2">
					Login
				</button>
			</div> */}
    </nav>
  );
}

export default Navbar;
