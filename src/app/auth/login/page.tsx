"use client";

import { Mail, Lock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-10 overflow-hidden bg-white">

      {/* Blurry Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-purple-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-purple-300 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Back to Home Button */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition shadow-md"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      {/* Card */}
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-100">

        <h1 className="text-3xl font-bold mb-2">Hey, Hello</h1>

        <p className="text-gray-500 mb-6">
          Welcome back, Enter your login information
        </p>

        <Link
          href="/auth/register"
          className="text-purple-600 font-medium hover:underline"
        >
          Create Account
        </Link>

        <h2 className="text-xl font-semibold mt-6 mb-4">Login</h2>

        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email address</label>
            <div className="mt-2 relative">
              <Mail
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />
              <input
                type="email"
                placeholder="NarayanMurthy@gmail.com"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium">Password</label>
            <div className="mt-2 relative">
              <Lock
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />
              <input
                type="password"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Remember me */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-purple-600"
              />
              <span>Remember me</span>
            </div>

            <span className="text-purple-600 cursor-pointer hover:underline">
              Forgot password?
            </span>
          </div>

          {/* Button */}
          <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl font-medium hover:opacity-90 transition">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}