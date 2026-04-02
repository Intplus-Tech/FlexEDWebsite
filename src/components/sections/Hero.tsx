import Container from "../ui/Container";
import Image from "next/image";

import AwsLogo from "@/assets/svg/aws.svg";
import PaystackLogo from "@/assets/svg/paystack.svg";
import SquadLogo from "@/assets/svg/squad.svg";
import LastPartnerLogo from "@/assets/svg/lastpartner.svg";
import { ArrowRight } from 'lucide-react';
import Link from "next/link";

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
            
             {/* <button className="mt-6 bg-black text-white px-6 py-3 rounded-full flex gap-2">
             <span>Onboard My School — ₦0 Setup</span>  <ArrowRight />
            </button> */}
            <Link
  href="/auth/register"
  className="mt-6 bg-black text-white px-6 py-3 rounded-full flex gap-2 w-fit"
>
  <span>Onboard My School — ₦0 Setup</span>
  <ArrowRight />
</Link>

           
           <div>
             <p>Partners</p>
            <div className="flex items-center gap-2 mt-6 flex-wrap">
  
  <div className="rounded-xl">
    <AwsLogo className="h-10 w-auto" />
  </div>

  <div className="rounded-xl">
    <SquadLogo className="h-10 w-auto" />
  </div>

  <div className="rounded-xl">
    <PaystackLogo className="h-10 w-auto" />
  </div>

  <div className="rounded-xl">
    <LastPartnerLogo className="h-10 w-auto" />
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