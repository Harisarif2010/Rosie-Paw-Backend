"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const router = useRouter();
  return (
    <div className="bg-white w-full h-[60px] flex items-center justify-between px-3 py-1 shadow-xs mt-0">
      <div>
        <Image src="/images/Logo.png" width={100} height={100} alt="Logo" />
      </div>
      <div>
        <nav>
          <ul className="flex flex-row space-x-6 list-none font-bold text-xl cursor-pointer">
            <li>
              <Link href="/Home">Home</Link>
            </li>
            <li>Features</li>
            <li>About Us</li>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-row justify-between gap-4">
        {/* Login Button */}
        <div className="bg-[#DFB89F] text-white w-28 h-10 rounded-3xl flex items-center justify-center px-4 py-2 cursor-pointer hover:bg-[#c99f7a] transition-all">
          <Image
            src="/images/userwhite.png"
            width={14}
            height={14}
            alt="user"
          />
          <button
            type="button"
            onClick={() => router.push("/auth/Login")}
            className="ml-2 text-md font-medium"
          >
            Login
          </button>
        </div>

        {/* Signup Button */}
        <div className="w-28 h-10 border border-[#100F38] rounded-3xl flex items-center justify-center px-4 py-2 cursor-pointer hover:bg-[#f1f1f1] transition-all">
          <Image src="/images/user.png" width={14} height={14} alt="user" />
          <button
            type="button"
            onClick={() => router.push("/auth/Signup")}
            className="text-[#100F38] ml-2 text-md font-medium"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
