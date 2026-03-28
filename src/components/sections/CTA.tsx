import Container from "../ui/Container";

export default function CTA() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border p-6 rounded-xl">
            <h3>Schedule a call</h3>
            <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg">
              Schedule
            </button>
          </div>
           <div className="border p-6 rounded-xl">
            <h3>Try it yourself</h3>
            <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}