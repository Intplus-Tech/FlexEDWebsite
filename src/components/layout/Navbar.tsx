import Container from "../ui/Container";
import { LifeBuoy } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="py-6">
      <Container>
        <div className="flex items-center">

          {/* Main Navbar Box */}
          <div className="mx-auto w-full max-w-3xl flex items-center justify-between border border-[#E8E8E8] rounded-xl p-2 px-4">
             <div className="flex items-center gap-2">
                <div >
                <Image
                               src="/images/logos/flexed-image.png"
                               width={500}
                               height={400}
                               alt="Hero"
                               className="rounded-xl w-full h-auto"
                             />
                          </div>
                           <h1 className="font-bold text-[16px] text-[#823FD6]">FlexED</h1>
             </div>
           

            <div className="hidden md:flex gap-6 items-center ">
              <a href="#" className="text-sm font-medium text-[#606060]">
                Features
              </a>
              <a href="#" className="text-sm font-medium text-[#606060]">
                Contact
              </a>
            </div>

            <button className="bg-purple-600 text-white w-[132px] px-4 py-2 rounded-lg text-[14px] font-medium">
              Create Account
            </button>

          </div>

          {/* Support */}
          <div className="ml-6 hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 cursor-pointer hover:text-black transition">
            <LifeBuoy size={18} />
            <span className="text-[#606060]">Support</span>
          </div>

        </div>
      </Container>
    </div>
  );
}