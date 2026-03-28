import Container from "../ui/Container";
import { features } from "@/data/features";

export default function Features() {
  return (
    <section className="relative py-30 bg-white overflow-hidden space-y-20">
      
      {/* Purple Gradient Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(168,85,247,0.15), transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <h2 className="text-center text-4xl font-normal">
          Core Features (Live Today — All Free)
        </h2>

        {/* Top 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white shadow-md flex flex-col gap-4"
            >
              {/* Icon Image */}
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-12 h-12 object-contain"
              />

              <h3 className="font-semibold text-lg">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom 2 Cards (Centered) */}
        <div className="flex justify-center mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl">
            {features.slice(3, 5).map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white shadow-md flex flex-col gap-4"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12 object-contain"
                />

                <h3 className="font-semibold text-lg">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}