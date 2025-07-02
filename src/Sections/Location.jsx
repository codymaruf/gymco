export default function Location() {
  return (
    <section id="location" className="py-16 px-6 md:px-16 bg-white font-inter">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#5c1a89]">
          Visit Our Gyms
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Location 1 */}
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-2xl font-semibold text-[#5c1a89]">
            GymCo 1: Females Fitness Solution
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            Mirabazar, Mousumi 1, Sylhet, Bangladesh
            <br />
            <a href="tel:+8801975572834" className="text-[#fe6c1d] hover:underline">
              +880 1975-572834
            </a>
            <br />
            <a href="mailto:gymcofemale@gmail.com" className="text-[#f21c8b] hover:underline">
              gymcofemale@gmail.com
            </a>
          </p>
          <div className="h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.348069856221!2d91.87750091545304!3d24.89498817911808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375055f2721886ed%3A0xafda8b73b307ac37!2sGymCo%20%28Females%20Fitness%20Solution%29!5e0!3m2!1sen!2sbd!4v1688259954980!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="GymCo 1 Location"
            ></iframe>
          </div>
        </div>

        {/* Location 2 */}
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-2xl font-semibold text-[#5c1a89]">
            GymCo 2: Female Fitness Solution
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            Chowdhury Shopping Center, Subidbazar, Sylhet, Bangladesh
            <br />
            <a href="tel:+8801975572834" className="text-[#fe6c1d] hover:underline">
              +880 1975-572834
            </a>
            <br />
            <a href="mailto:gymcofemale@gmail.com" className="text-[#f21c8b] hover:underline">
              gymcofemale@gmail.com
            </a>
          </p>
          <div className="h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.7098720903154!2d91.85583081545033!3d24.906827675202716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375055d1ccad535d%3A0x2d5f71bff39fe5d5!2sGymCo2%20%28Female%20Fitness%20Solution%29!5e0!3m2!1sen!2sbd!4v1688259993311!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="GymCo 2 Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
