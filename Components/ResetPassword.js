"use client";
import { Suspense } from "react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { resetPassword } from "@/app/actions/resetPassword";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

const ResetPassword = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      toast.error("Please fill in both fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    const response = await resetPassword(newPassword, userId);
    if (response?.success === false)
    {
      toast.error(response?.message)
    }
    toast.success(response?.message)
    // Redirect back to login
    setTimeout(() => {
      router.push("/auth/Login");
    }, 1000);
  };

  return (
    <div className="flex bg-white">
      <div className="w-1/3">
        <Image
          src="/images/Verify.png"
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
          <Image src="/images/back.png" alt="Back" height={60} width={60} className="w-6 h-6" />
          <span>Back to Login</span>
        </div>

        <h1 className="text-5xl text-black font-bold mt-5">Verify Code</h1>

        <span className="text-[#313131] font-medium text-2xl mt-5">
          Your previous password has been reset. Please set a new password for
          your account.
        </span>

        <div className="mt-5">
          <label className="block text-2xl font-medium mb-1">
            Create Password
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-2/4 border border-gray-300 rounded-xl px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#DFB89F]"
            placeholder="Enter Password"
          />
        </div>

        <div className="mt-5">
          <label className="block text-2xl font-medium mb-1">
            Re-Enter Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-2/4 border border-gray-300 rounded-xl px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#DFB89F]"
            placeholder="Confirm Password"
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-2/4 bg-[#DFB89F] text-white py-2 font-semibold text-lg hover:bg-[#c99f7a] transition-all rounded-xl mt-10 shadow-2xs cursor-pointer"
        >
          Set Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
