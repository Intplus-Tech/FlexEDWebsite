import Container from "../ui/Container";

export default function CTA() {
  return (
    <section className="py-24">
      <Container>
        <h2 className="text-4xl mb-8">
          Ready to Run Your School Smarter?
        </h2>

        <div className="grid md:grid-cols-2 border rounded-2xl overflow-hidden">
          
          {/* Left */}
          <div className="p-8 border-r">
            <h3 className="text-lg font-medium">
              Schedule a call
            </h3>

            <p className="text-gray-500 mt-2 text-sm">
              We are gladly helping School Administrators to get started.
            </p>

            <button className="mt-6 bg-purple-600 text-white px-5 py-2.5 rounded-lg text-sm">
              Schedule a Call
            </button>
          </div>

          {/* Right */}
          <div className="p-8">
            <h3 className="text-lg font-medium">
              Try it out yourself
            </h3>

            <p className="text-gray-500 mt-2 text-sm">
              We have made it as easy as possible to Use{" "}
              <span className="text-purple-600 font-medium">
                FlexED
              </span>
            </p>

            <button className="mt-6 bg-purple-600 text-white px-5 py-2.5 rounded-lg text-sm flex items-center gap-2">
              Get Started →
            </button>
          </div>

        </div>
      </Container>
    </section>
  );
}