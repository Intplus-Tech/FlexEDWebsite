"use client";

import Container from "../ui/Container";
import { LifeBuoy, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="py-6 bg-white">
      <Container>
        <div className="flex items-center justify-between">

          {/* Main Navbar Box */}
          <div className="mx-auto w-full max-w-3xl flex items-center justify-between border border-[#E8E8E8] rounded-xl p-2 px-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image
                src="/images/logos/flexed-image.png"
                width={40}
                height={40}
                alt="FlexED Logo"
                className="rounded-xl w-10 h-10"
              />
              <h1 className="font-bold text-[16px] text-[#823FD6]">FlexED</h1>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-6 items-center">
              <a
                href="#Features"
                onClick={(e) => { e.preventDefault(); scrollTo("Features"); }}
                className="text-sm font-medium text-[#606060] hover:text-black transition"
              >
                Features
              </a>
              <a
                href="#CTA"
                onClick={(e) => { e.preventDefault(); scrollTo("CTA"); }}
                className="text-sm font-medium text-[#606060] hover:text-black transition"
              >
                Contact
              </a>
            </div>

            {/* Create Account Button */}
            <button className="bg-purple-600 text-white w-[132px] px-4 py-2 rounded-lg text-[14px] font-medium">
              Create Account
            </button>
          </div>

          {/* Sign up link (next to border container) */}
          <div className="hidden md:flex ml-4 items-center">
            <a
              href="#signup"
              className="text-sm font-medium text-[#606060] hover:text-black transition"
            >
              Sign up
            </a>
          </div>

          {/* Support */}
          <div className="ml-6 hidden md:flex items-center gap-2 text-sm font-medium text-[#606060] cursor-pointer hover:text-black transition">
            <LifeBuoy size={18} />
            <span>Support</span>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setOpen(!open)}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-4 flex flex-col gap-3 border-t border-[#E8E8E8] pt-4">
            <a
              href="#Features"
              onClick={(e) => { e.preventDefault(); scrollTo("Features"); setOpen(false); }}
              className="text-sm font-medium text-[#606060] hover:text-black transition"
            >
              Features
            </a>
            <a
              href="#CTA"
              onClick={(e) => { e.preventDefault(); scrollTo("CTA"); setOpen(false); }}
              className="text-sm font-medium text-[#606060] hover:text-black transition"
            >
              Contact
            </a>
            <a
              href="#signup"
              className="text-sm font-medium text-[#606060] hover:text-black transition"
            >
              Sign up
            </a>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-[14px] font-medium mt-2">
              Create Account
            </button>
            <div className="flex items-center gap-2 text-sm font-medium text-[#606060] cursor-pointer hover:text-black transition mt-2">
              <LifeBuoy size={18} />
              <span>Support</span>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}