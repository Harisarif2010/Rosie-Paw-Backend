"use client";
import { verifyOtp } from "@/app/actions/verifyOtp";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const [code, setCode] = useState("");
  const router = useRouter();
  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code) {
      toast.error("Please enter your code");
      return;
    }

    const response = await verifyOtp(code);
    if (response.success === false) {
      toast.error(response.message);
      return;
    }
    const userId = response.data;
    toast.success(response.message);
    router.push(`/auth/ResetPassword?userId=${userId}`);
  };

  return (
    <div className="flex bg-white">
      <div className="w-1/3">
        <Image
          src="/images/Code.png"
          width={584}
          height={872}
          alt="Forgot Password"
          className="h-full"
        />
      </div>
      <div className="w-2/3 flex flex-col ml-14 justify-start mt-10">
        <div
          onClick={() => router.push("/auth/Login")}
          className="flex items-center gap-2 mt-6 cursor-pointer hover:underline text-[#313131] font-medium"
        >
          <Image
            src="/images/back.png"
            alt="Back"
            height={60}
            width={60}
            className="w-6 h-6"
          />
          <span>Back to Login</span>
        </div>

        <h1 className="text-5xl text-black font-bold mt-5">Verify Code</h1>

        <span className="text-[#313131] font-medium text-2xl mt-5">
          An authentication code has been sent to your email.
        </span>
        <div className="mt-5">
          <label className="block text-2xl font-medium mb-1">Enter Code</label>
          <input
            type="text"
            name="text"
            value={code}
            onChange={handleChange}
            className="w-2/4 border border-gray-300 rounded-xl px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#DFB89F]"
            placeholder="Enter Code"
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
