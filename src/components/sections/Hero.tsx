import Container from "../ui/Container";
import Image from "next/image";
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="py-16">
      <Container>
       <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          <div className="space-y-16">
            <div>
              <h1 className="text-6xl font-light leading-tight">
              Flow with <span className="text-purple-600">FlexED</span>
            </h1>

            <p className="mt-4  text-[#606060]">
              Modernize your institution with automated tuition tracking
              and real-time reconciliation.
            </p>

            <p className="mt-4  text-[#606060] font-bold">
             No setup costs, no monthly fees—just intelligent financial infrastructure for the forward-thinking school.
            </p>
            </div>
            
             <button className="mt-6 bg-black text-white px-6 py-3 rounded-full flex gap-2">
             <span>Onboard My School — ₦0 Setup</span>  <ArrowRight />
            </button>

           
           <div>
             <p>Partners</p>
            <div className="flex gap-3 mt-6 flex-wrap">
  
  <div className="border border-gray-300 rounded-full p-2">
    <img src="/images/logos/paystack.png" className="h-6 object-contain" />
  </div>

  <div className="border border-gray-300 rounded-full p-2">
    <img src="/images/logos/squad.png" className="h-6 object-contain" />
  </div>

  <div className="border border-gray-300 rounded-full p-2">
    <img src="/images/logos/aws.png" className="h-6 object-contain" />
  </div>

  <div className="border border-gray-300 rounded-full p-2">
    <img src="/images/logos/flutterwave.png" className="h-6 object-contain" />
  </div>

</div>
           </div>
           
          </div>
       <div>
            <Image
               src="/images/hero/hero-image.png"
               width={500}
               height={400}
               alt="Hero"
               className="rounded-xl w-full h-auto"
             />
          </div>

        </div>
      </Container>
    </section>
  );
}