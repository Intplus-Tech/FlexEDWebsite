"use client";

import { useState, useEffect } from "react";
import Container from "../ui/Container";

const testimonials = [
  {
    id: 1,
    text: "Since we started using FlexED, fee collection has jumped from 65% to 94% in one term. Parents love the portal!",
    name: "Dr. Maxin Will–Adeakin",
    role: "Proprietor, Grace International School",
    image: "/images/testimonials/avatar1.png",
  },
  {
    id: 2,
    text: "FlexED helped us automate our operations and reduced manual work drastically.",
    name: "Sarah Johnson",
    role: "Principal, Bright Future School",
    image: "/images/testimonials/avatar2.png",
  },
  {
    id: 3,
    text: "Our administrative workflow is now smooth and efficient.",
    name: "Michael Adams",
    role: "Director, Green Valley Academy",
    image: "/images/testimonials/avatar3.png",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  // Auto-slide carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-[#F6F5FB]">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <p className="text-xs tracking-widest text-purple-600 uppercase font-medium">
              Testimonial
            </p>

            <h2 className="text-4xl mt-4 leading-tight">
              Users’ Success <br /> Stories
            </h2>

            <button className="mt-6 bg-purple-600 text-white px-5 py-2.5 rounded-lg text-sm hover:bg-purple-700 transition">
              Share your Success Story
            </button>
          </div>

          {/* Right Card */}
          <div className="flex justify-end">
            <div className="w-full max-w-sm md:max-w-md">
              <div
                className="bg-gradient-to-br space-y-6 from-purple-500 to-indigo-600 text-white p-8 rounded-xl shadow-lg transition-all duration-500"
              >
                <p className="text-sm leading-relaxed">
                  {testimonials[active].text}
                </p>

                <div className="flex items-center gap-3 mt-6">
                  <img
                    src={testimonials[active].image}
                    className="w-10 h-10 rounded-full"
                  />

                  <div>
                    <h4 className="text-sm font-semibold">
                      {testimonials[active].name}
                    </h4>
                    <p className="text-xs opacity-80">
                      {testimonials[active].role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Carousel Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      active === index ? "bg-purple-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}