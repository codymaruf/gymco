import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add form validation & submission logic (e.g., API call)
    alert("Thank you for contacting us! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-16 bg-white font-inter">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#5c1a89]">
            Get In Touch
          </h2>
          <p className="text-gray-600 leading-relaxed text-base">
            Have questions or want to join GymCo Female? Fill out the form and
            our team will reach out to you shortly.
          </p>
          <div className="text-gray-700 space-y-3">
            <p>
              <strong>Location:</strong> Mirabazar, Mousumi 1, Sylhet, Bangladesh
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+8801975572834" className="text-[#fe6c1d] hover:underline">
                +880 1975-572834
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:gymcofemale@gmail.com" className="text-[#f21c8b] hover:underline">
                gymcofemale@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5c1a89]"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5c1a89]"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-1 font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5c1a89]"
              placeholder="+880 1XXXXXXXXX"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5c1a89]"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#fe6c1d] text-white font-semibold rounded-full hover:bg-[#f21c8b] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
