"use client"

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Container from "../ui/Container";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    ).then(
      (result) => {
        console.log(result.text);
        setSuccess(true);
        form.current?.reset(); // ✅ Clears input fields
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <footer className="bg-[#0F0F12] text-white py-20">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Left */}
          <div>
            <h1 className="text-xl font-semibold">FlexED</h1>
            <p className="text-sm text-gray-400 mt-1">By Int+</p>

            <div className="flex gap-3 mt-4">
              <div className="p-2 border rounded-md"><FaInstagram size={16} /></div>
              <div className="p-2 border rounded-md"><FaTwitter size={16} /></div>
              <div className="p-2 border rounded-md"><FaLinkedinIn size={16} /></div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-[#1A1A1F] p-6 rounded-xl w-full md:w-[480px]">
            <p className="text-sm text-gray-300">
              Sign up for our newsletter and join the growing FlexEd community.
            </p>

            <form ref={form} onSubmit={sendEmail} className="flex gap-3 mt-4">
              <input
                type="text"
                name="name"
                placeholder="First name"
                className="bg-transparent border px-3 py-2 rounded-lg text-sm w-full"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-transparent border px-3 py-2 rounded-lg text-sm w-full"
                required
              />

              <button type="submit" className="bg-white text-black px-4 rounded-lg text-sm">
                Subscribe
              </button>
            </form>

            {success && <p className="text-green-400 mt-2">Thanks for subscribing!</p>}
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <div className="flex gap-6">
            <p>© 2026 Int+</p>
            <p>Terms of Service</p>
            <p>Privacy & Cookies policy</p>
          </div>

          <p className="mt-4 md:mt-0">hello@flexedsystems.com</p>
        </div>
      </Container>
    </footer>
  );
}