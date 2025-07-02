import {
  Dumbbell,
  ArrowUpCircle,
  HeartPulse,
} from "lucide-react"; // Lucide icon imports

export default function Programms() {
  const services = [
    {
      title: "Weight Loss Program",
      description:
        "Structured workouts and simple nutrition guidance designed to help you reduce fat, improve stamina, and build a healthy, toned body.",
      color: "#fe6c1d",
      icon: <HeartPulse size={32} className="text-[#fe6c1d]" />,
    },
    {
      title: "Weight Gain Program",
      description:
        "For those aiming to gain healthy weight, we offer targeted muscle-building workouts and personal tracking — all designed for your pace.",
      color: "#5c1a89",
      icon: <ArrowUpCircle size={32} className="text-[#5c1a89]" />,
    },
    {
      title: "Personal Female Trainer",
      description:
        "Certified female trainers help you train safely and confidently with personalized routines, motivation, and ongoing support.",
      color: "#f21c8b",
      icon: <Dumbbell size={32} className="text-[#f21c8b]" />,
    },
  ];

  return (
    <section id="services" className="py-16 px-6 md:px-16 bg-white font-inter">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#5c1a89]">
          Our Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-md p-8 hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: service.color }}
              >
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
