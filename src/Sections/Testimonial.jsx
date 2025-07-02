export default function Testimonial() {
  const reviews = [
    {
      name: "Ayesha Rahman",
      comment:
        "I feel safe and confident here. The female trainers understand exactly what I need. Best fitness space for women in Sylhet!",
      color: "#fe6c1d",
    },
    {
      name: "Nusrat Jahan",
      comment:
        "I’ve lost 6 kg in 2 months and gained so much energy. The environment is clean, private, and completely female-focused.",
      color: "#5c1a89",
    },
    {
      name: "Tahmina Islam",
      comment:
        "As a hijabi sister, I really appreciate the modest environment. I never imagined I’d enjoy fitness this much!",
      color: "#f21c8b",
    },
  ];

  return (
    <section id="testimonials" className="py-16 px-6 md:px-16 bg-[#fff] font-inter">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#5c1a89]">
          What Our Members Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 shadow-md rounded-xl p-6 text-left hover:shadow-lg transition duration-300"
            >
              <div className="text-sm text-gray-700 mb-4 italic">
                “{review.comment}”
              </div>
              <div
                className="text-sm font-semibold"
                style={{ color: review.color }}
              >
                – {review.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
