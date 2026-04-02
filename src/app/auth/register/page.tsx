"use client";

import { Mail, Lock, User, Phone, GraduationCap, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
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
        className="fixed top-6 left-6 flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      {/* Card */}
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-100">
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Let's Get Started
        </h1>

        <p className="text-gray-500 mb-6">
          Already have an account?
          <Link 
            href="/auth/login" 
            className="text-purple-600 font-medium ml-1 hover:underline"
          >
            Log in
          </Link>
        </p>

        <h2 className="text-xl font-semibold mb-6">Sign up</h2>

        <form className="space-y-5">

          {/* School Name */}
          <div>
            <label className="text-sm font-medium">School Name</label>
            <div className="mt-2 relative">
              <GraduationCap className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="School name"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* School Address */}
          <div>
            <label className="text-sm font-medium">School Address</label>
            <div className="mt-2 relative">
              <GraduationCap className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="School address"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* School Type */}
          <div>
            <label className="text-sm font-medium">School Type</label>
            <select className="w-full mt-2 py-3 px-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-purple-500">
              <option>School Type</option>
              <option>Primary</option>
              <option>Secondary</option>
              <option>College</option>
            </select>
          </div>

          {/* Contact Person */}
          <div>
            <label className="text-sm font-medium">Primary Contact Person</label>
            <div className="mt-2 relative">
              <User className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Narayan Murthy"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <div className="mt-2 relative">
              <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="0801234567"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email address</label>
            <div className="mt-2 relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
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
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="password"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Button */}
          <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl font-medium mt-4 hover:opacity-90 transition">
            Register
          </button>

        </form>

      </div>
    </div>
  );
}