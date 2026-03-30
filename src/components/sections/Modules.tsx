import Container from "../ui/Container";
import { modules } from "@/data/modules";

export default function Modules() {
  return (
    <section className="py-20">
      <Container >
        <h2 className="text-4xl font-normal text-center">
          Modular Tools — Grow at Your Pace
        </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 ">
          {modules.map((module) => (
            <div
              key={module.title}
              className="flex gap-4 border rounded-xl p-4 font-semibold bg-[#DEDEDE] border-[#F8F8F8] "
            >
              <img
                src={module.image}
                className="w-20 h-20 rounded-lg"
              />

             <div className="space-y-4 flex flex-col justify-between h-full">
  <div className="space-y-2">
    <h3 className="font-semibold">{module.title}</h3>
    <p className="text-gray-600 text-sm">{module.description}</p>
  </div>
  <p className="font-semibold">{module.price}</p>
</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}