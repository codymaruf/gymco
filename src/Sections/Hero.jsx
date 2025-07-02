export default function Hero() {
  return (
    <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 pt-24 md:py-40 bg-white font-inter">
      {/* Left Text */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#5c1a89] leading-tight">
          Empowering Women <br className="hidden sm:block" />
          Through Fitness
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
          Join Sylhet’s safe and supportive female-only gym. Build strength, confidence, and a healthy lifestyle — on your terms.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 rounded-full bg-[#fe6c1d] text-white font-semibold hover:bg-[#f21c8b] transition duration-300"
        >
          Join Now
        </a>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 mb-5 md:mb-0">
        <img
          src="/assets/bg2.jpg"
          alt="background"
          className="w-full max-w-md mx-auto rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
