"use client";

import Link from "next/link";

import Container from "../ui/Container";

export default function CTA() {
  return (
    <section className="py-35 bg-[#F8F8F8]">
      <Container>
        <h2 className="text-4xl mb-8 text-[42px]">
          Ready to Run Your School Smarter?
        </h2>

        <div className="grid md:grid-cols-2 border-[2px] rounded-2xl overflow-hidden border-[#DEDEDE] space-y-6 bg-[#FFFFFF]">
          
          {/* Left */}
          <div className="p-8 border-r h-full border-[#DEDEDE]">
            <h3 className="text-[32px] font-medium text-[#131313] ">
              Schedule a call
            </h3>

            <p className="text-gray-500 mt-2 text-lg">
              We are gladly helping School Administrators to get started.
            </p>

            <button
              onClick={() => window.open("https://wa.me/message/N3YXQJLPHHFRL1", "_blank")}
              className="mt-6 bg-purple-600 text-white px-5 py-2.5 rounded-lg text-sm hover:bg-purple-700 transition"
            >
              Schedule a Call
            </button>
          </div>

          {/* Right */}
          <div className="p-8">
            <h3 className="text-[32px] text-[#131313] font-medium">
              Try it out yourself
            </h3>

            <p className="text-gray-500 mt-2 text-lg">
              We have made it as easy as possible to Use{" "}
              <span className="text-purple-600 font-medium">
                FlexED
              </span>
            </p>
              <Link
              href="https://app.flexedsystem.com/auth/sign-up"
              >
            <button className="mt-6 bg-purple-600 text-white px-5 py-2.5 rounded-lg text-sm flex items-center gap-2 hover:bg-purple-700 transition">
              Get Started →
            </button>
            </Link>
          </div>

        </div>
      </Container>
    </section>
  );
}