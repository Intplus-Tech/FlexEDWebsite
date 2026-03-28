import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <Container>
        <div className="flex justify-between">
          <h1>FlexED</h1>

          <input
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg text-black"
          />
        </div>
      </Container>
    </footer>
  );
}