"use client";
import Link from "next/link";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    const res = await signIn("credentials", {
      redirect: false, // set to true if you want to auto-redirect on success
      email,
      password,
    });
    if (res?.error) {
      // show error toast
      toast.error(res?.error);
    } else {
      toast.success("Logged in successfully!");
      // You can manually redirect if needed
      router.push("/Home");
    }
  };
  return (
    <div className="flex justify-center">
      <div className="w-1/3">
        <Image
          alt=""
          src="/images/Mainpng.png"
          width={584}
          height={800}
        ></Image>
      </div>
      <div className="w-2/3 flex flex-col ml-14 justify-start mt-10">
        <h1 className="text-5xl text-black font-bold ">Log in</h1>
        <div className="mt-5">
          <label className="block text-2xl font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-2/4 border border-gray-300 rounded-xl px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#DFB89F]"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="mt-5">
          <label className="block text-2xl font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-2/4 border border-gray-300 rounded-xl px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#DFB89F]"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-between text-sm mt-2 w-2/4">
          {/* Remember Me */}
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-4 h-4 text-[#DFB89F] focus:ring-[#DFB89F]"
            />
            Remember me
          </label>

          {/* Forgot Password */}
          <Link
            className="text-[#DFB89F] hover:underline font-medium"
            href="/auth/ForgotPassword"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-2/4 bg-[#DFB89F] text-white py-2  font-semibold text-lg hover:bg-[#c99f7a] transition-all rounded-xl mt-10 shadow-2xs cursor-pointer"
          onClick={handleSubmit}
        >
          Login
        </button>
        <div className="text-center text-2xl mt-6 text-black font-medium w-2/4">
          Don’t have an account?{" "}
          <Link
            href="/auth/Signup"
            className="text-[#DFB89F] font-medium hover:underline"
          >
            Create one
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
