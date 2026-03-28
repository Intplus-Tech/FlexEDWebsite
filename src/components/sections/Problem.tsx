import Container from "../ui/Container";

export default function Problem() {
  return (
    <section className="py-30 bg-gray-50 text-center">
      <Container>
        <p className="text-3xl text-gray-500">The Problem We Solve</p>

        <h2 className="text-5xl font-semibold mt-4 space-y-3 flex flex-col">
  <span>Running a School Shouldn't Feel</span>
  <span>Like Manual labour</span>
</h2>

        <div className="flex flex-row gap-4 mt-8 justify-center flex-wrap">
            <p className="bg-white border border-gray-300 rounded-full p-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              Tired of chasing parents for fees?
            </p>

            <p className="bg-white border border-gray-300 rounded-full p-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              Late receipts?
            </p>

            <p className="bg-white border border-gray-300 rounded-full p-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              Mismatched bank transfers?
            </p>
        </div>

        <div className="mt-8 bg-white shadow rounded-full py-14 px-8">
  <p className="text-4xl flex items-center space-x-2 justify-center">
    <span className="text-purple-600 font-semibold">FlexED</span>
    <span>Fixes All of That — Automatically.</span>
  </p>
</div>
      </Container>
    </section>
  );
}