"use client";
import { registerUser } from "@/app/actions/signup";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Signup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    petName: "",
    petType: "",
    petGender: "",
    age: "",
    breed: "",
    ownerName: "",
    email: "",
    country: "",
    phone: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      petName,
      petType,
      petGender,
      breed,
      age,
      ownerName,
      email,
      country,
      phone,
      password,
      confirmPassword,
      termsAccepted,
    } = formData;

    if (
      !petName ||
      !petType ||
      !petGender ||
      !breed ||
      !ownerName ||
      !age ||
      !email ||
      !country ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      //   alert("Please fill in all required fields.");
      toast.error("Please fill in all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Password do not Match.");
      return;
    }

    if (!termsAccepted) {
      toast.error("Please accept the terms and conditions.");
      return;
    }

    // Call API to Create the User

    const result = await registerUser(formData);

    if (result?.success === false) {
      toast.error(result.message);
    } else {
      toast.success("User registered successfully!");
      setTimeout(() => {
        router.push("/auth/Login");
      }, 1000);
      // router.push("/auth/login");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center min-h-screen overflow-hidden bg-white">
        <div className="w-1/5 relative h-screen">
          <Image
            alt=""
            src="/images/Mainpng.png"
            width={584}
            height={800}
            className="h-full object-cover"
          />
        </div>
        <div className="w-4/5 ml-14 mt-10">
          <h1 className="text-5xl text-black font-bold">Create Account</h1>
          <div className="flex flex-row gap-16 mt-10">
            {/* Pet Details */}
            <div className="flex flex-col w-1/2">
              <h2 className="text-3xl text-black font-semibold mb-4">
                Pet Details *
              </h2>

              <div className="mb-5">
                <label className="block text-2xl  mb-1">Pets Name</label>
                <input
                  type="text"
                  name="petName"
                  value={formData.petName}
                  onChange={handleChange}
                  className="w-full max-w-md border border-gray-300 rounded-xl px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#DFB89F]"
                  placeholder="Enter your pet's name"
                />
              </div>

              <div className="mb-5">
                <label className="block text-2xl  mb-1">Pet Type</label>
                <select
                  name="petType"
                  value={formData.petType}
                  onChange={handleChange}
                  className="w-full max-w-md border border-gray-300 rounded-xl px-4 py-2 text-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#DFB89F]"
                >
                  <option value="" disabled>
                    Pet type
                  </option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                </select>
              </div>

              <div className="mb-5">
                <label className="block text-2xl  mb-1">Gender</label>
                <select
                  name="petGender"
                  value={formData.petGender}
                  onChange={handleChange}
                  className="w-full max-w-md border border-gray-300 rounded-xl px-4 py-2 text-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#DFB89F]"
                >
                  <option value="" disabled>
                    Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="mb-5">
                <label className="block text-2xl  mb-1">Breed</label>
                <input
                  type="text"
                  name="breed"
                  value={formData.breed}
                  onChange={handleChange}
                  className="w-full max-w-md border border-gray-300 rounded-xl px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#DFB89F]"
                  placeholder="Enter your pet's breed"
                />
              </div>
              <div className="mb-5">
                <label className="block text-2xl  mb-1">Age</label>
                <input
                  type="text"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full max-w-md border border-gray-300 rounded-xl px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#DFB89F]"
                  placeholder="Enter your pet's age"
                />
              </div>
            </div>

            {/* Pet Owner Details */}
            <div className="flex flex-col w-1/2">
              <h2 className="text-3xl text-black font-semibold mb-4">
                Pet Owner Details *
              </h2>

              <div className="flex flex-row gap-5">
                <div className="mb-5">
                  <label className="block text-2xl  mb-1">Name</label>
                  <input
                    type="text"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleChange}
                    className="w-full max-w-md border border-gray-300 rounded-xl px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#DFB89F]"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-5">
                  <label className="block text-2xl  mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full max-w-md border border-gray-300 rounded-xl px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#DFB89F]"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="flex flex-row gap-5">
                <div className="mb-5 w-full sm:w-1/2">
                  <label className="block text-2xl mb-1">Country</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full max-w-md border border-gray-300 rounded-xl px-4 py-2 text-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#DFB89F]"
                  >
                    <option value="" disabled>
                      Select Country
                    </option>
                    <option value="USA">USA</option>
                    <option value="Mexico">Mexico</option>
                  </select>
                </div>
                <div className="mb-5 w-full sm:w-1/2">
                  <label className="block text-2xl  mb-1">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full max-w-md border border-gray-300 rounded-xl px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#DFB89F]"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-2xl mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full max-w-md border border-gray-300 rounded-xl px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#DFB89F]"
                  placeholder="Enter password"
                />
              </div>
              <div className="mb-5">
                <label className="block text-2xl  mb-1">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full max-w-md border border-gray-300 rounded-xl px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#DFB89F]"
                  placeholder="Confirm password"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm mt-0 w-2/4 mr-6">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="w-4 h-4 text-[#DFB89F] focus:ring-[#DFB89F]"
              />
              I agree to the terms and condition
            </label>
          </div>
          <div className="flex justify-center">
            {" "}
            <button
              type="submit"
              className="w-2/4 bg-[#DFB89F] text-center  text-white py-2 font-semibold text-lg hover:bg-[#c99f7a] transition-all rounded-xl mt-5 shadow-2xs"
            >
              Create Account
            </button>
          </div>
          <div className="text-center text-2xl mt-6 text-black font-medium w-2/4 mx-auto">
            Already have an account?{" "}
            <Link
              href="/auth/Login"
              className="text-[#DFB89F] font-medium hover:underline cursor-pointer"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;
