"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Container from "../ui/Container";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const ADMIN_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID!;
const AUTO_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_AUTO_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export default function Footer() {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const name = formData.get("name")?.toString() || "Subscriber";
    const email = formData.get("email")?.toString() || "";

    if (!email) {
      setError("Email is required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // 1. Notify admin about new subscriber
await emailjs.send(
  SERVICE_ID,
  ADMIN_TEMPLATE_ID,
  {
    name,
    email,        // ✅ admin template uses {{email}}
    time: new Date().toLocaleString("en-NG", { timeZone: "Africa/Lagos" }),
  },
  { publicKey: PUBLIC_KEY }
);

// 2. Send auto-reply to the subscriber
await emailjs.send(
  SERVICE_ID,
  AUTO_TEMPLATE_ID,
  {
    name,
    to_email: email,  // ✅ subscriber template uses {{to_email}}
  },
  { publicKey: PUBLIC_KEY }
);
     
      // 2. Send auto-reply to the subscriber
console.log("Sending auto-reply to:", email);

const autoResult = await emailjs.send(
  SERVICE_ID,
  AUTO_TEMPLATE_ID,
  {
    name,
    to_email: email,
  },
  { publicKey: PUBLIC_KEY }
);

console.log("Auto-reply result:", autoResult);

      setSuccess(true);
      form.current.reset();
    } catch (err: any) {
      console.error("EmailJS error:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
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
              <button
                type="submit"
                disabled={loading}
                className="bg-white text-black px-4 rounded-lg text-sm disabled:opacity-60"
              >
                {loading ? "..." : "Subscribe"}
              </button>
            </form>

            {success && <p className="text-green-400 mt-2">Thanks for subscribing!</p>}
            {error && <p className="text-red-400 mt-2">{error}</p>}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <div className="flex gap-6">
            <p>© 2026 Int+</p>
            <p>Terms of Service</p>
            <p>Privacy & Cookies policy</p>
          </div>
          <p className="mt-4 md:mt-0">contactus@flexedsystem.com</p>
        </div>
      </Container>
    </footer>
  );
}