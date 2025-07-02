export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-[#fefefe] mt-10 px-6 md:px-16 pb-16 font-inter"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/assets/women-gym.jpg"
            alt="Gym interior or members"
            className="rounded-xl shadow-md w-full max-w-md mx-auto"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#5c1a89]">
            About GymCo Female
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            GymCo Female is more than a fitness center — it's a safe, inspiring
            space where women in Sylhet can grow stronger, both physically and
            mentally. Whether you're a student, a mother, or just starting your
            fitness journey, our all-female environment is designed with your
            comfort and values in mind.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Our facility respects modesty, privacy, and personal goals.
            With professional female trainers, curated workout programs, and a
            supportive sisterhood — we make sure your fitness experience aligns
            with your lifestyle and beliefs.
          </p>
        </div>
      </div>
    </section>
  );
}
