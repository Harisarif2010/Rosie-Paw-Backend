"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { forgotPassword } from "@/app/actions/forgotPassword";
import Image from "next/image";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    const response = await forgotPassword({ email });
    if (response.success === false) {
      toast.error(response.message);
      return;
    }
    if (response.success === true) {
      toast.success(response.message);
      setTimeout(() => {
        router.push("/auth/Verify");
      }, 3000);
    }
  };

  return (
    <div className="flex bg-white">
      <div className="w-1/3">
        <Image
          src="/images/forgot.png"
          width={584}
          height={872}
          alt="Forgot Password"
          className="h-full"
        />
      </div>
      <div className="w-2/3 flex flex-col ml-14 justify-start mt-10">
        <div className="flex items-center gap-2 mt-6 cursor-pointer hover:underline text-[#313131] font-medium">
          <Image
            src="/images/back.png"
            alt="Back"
            width={60}
            height={60}
            className="w-6 h-6"
          />
          <span>Back to Login</span>
        </div>

        <h1 className="text-5xl text-black font-bold mt-5">Forgot Password</h1>

        <span className="text-[#313131] font-medium text-2xl mt-5">
          Don’t worry, happens to all of us. Enter your email below to recover
          your password
        </span>
        <div className="mt-5">
          <label className="block text-2xl font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="w-2/4 border border-gray-300 rounded-xl px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#DFB89F]"
            placeholder="Enter your email"
          />
        </div>

        <button
          type="submit"
          className="w-2/4 bg-[#DFB89F] text-white py-2 font-semibold text-lg hover:bg-[#c99f7a] transition-all rounded-xl mt-10 shadow-2xs cursor-pointer"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Page;
