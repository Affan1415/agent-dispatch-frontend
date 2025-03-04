import { useState } from "react";

const agents = [
  {
    name: "Nova",
    role: "AI Assistant.",
    description:
      "A reliable AI partner for business owners and professionals—managing calendars, scheduling meetings, planning trips, and answering everyday challenges with ease.",
    image: "images/1.png",
    glow: "bg-purple-500/50",
  },
  {
    name: "Lumi",
    role: "Sales Strategist.",
    description:
      "Lumi harnesses your business data to craft persuasive sales scripts, compelling cold emails, and impactful pitches—helping you close deals effortlessly.",
    image: "images/2.png",
    glow: "bg-blue-500/50",
  },
  {
    name: "Neon",
    role: "eCommerce Expert.",
    description:
      "Your go-to AI for online business success—helping with store setup, product launches, and optimizing eCommerce operations for smooth growth.",
    image: "images/4.png",
    glow: "bg-teal-500/50",
  },
];

const AgentCarousel = () => {
  const [index, setIndex] = useState(0);
  const totalSlides = agents.length;

  const nextSlide = () => setIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <section className="relative py-16">
      <h3 className="text-center text-3xl font-semibold text-white">
        Our Agents
      </h3>
      <div className="relative flex items-center justify-center mt-6">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 text-white text-3xl z-10"
        >
          ❮
        </button>

        {/* Carousel Container */}
        <div className="relative flex overflow-hidden w-[900px]">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{ transform: `translateX(-${index * 300}px)` }} // Adjust slide movement
          >
            {agents.map((agent, i) => (
              <div
                key={agent.name}
                className="relative w-[280px] bg-gray-900 p-6 rounded-xl shadow-lg"
              >
                <div
                  className={`absolute inset-0 ${agent.glow} blur-3xl`}
                ></div>
                <div className="relative text-center z-10">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="mx-auto h-32"
                  />
                  <h4 className="text-xl font-semibold text-white mt-4">
                    {agent.name}
                  </h4>
                  <p className="text-blue-400 font-medium">{agent.role}</p>
                  <p className="text-gray-400 mt-2">{agent.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 text-white text-3xl z-10"
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default AgentCarousel;
