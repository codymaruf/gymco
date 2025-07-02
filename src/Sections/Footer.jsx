import { Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#5c1a89] text-white font-inter py-8 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold tracking-wide text-center md:text-left w-full md:w-auto flex flex-col items-center gap-3">
          <img
            src="/assets/gymCo.jpg"
            alt="GymCo Logo"
            className="h-15 rounded-xl object-cover"
          />
          <spn>GymCo<span className="text-[#fe6c1d]">Female</span></spn>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4 text-sm font-semibold justify-center tablet:flex-row">
          <a href="#about" className="hover:text-[#fe6c1d] transition text-center">
            About
          </a>
          <a href="#services" className="hover:text-[#fe6c1d] transition text-center">
            Programs
          </a>
          <a href="#schedule" className="hover:text-[#fe6c1d] transition text-center">
            Schedule
          </a>
          <a href="#location" className="hover:text-[#fe6c1d] transition text-center">
            Location
          </a>
          <a href="#contact" className="hover:text-[#fe6c1d] transition text-center">
            Contact
          </a>
        </nav>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-end space-y-2 text-sm">
          <p>📞 +880 1975-572834</p>
          <p>✉️ gymcofemale@gmail.com</p>
          <p className="text-center md:text-right">Mirabazar, Mousumi 1, Sylhet, Bangladesh</p>
          <a
            href="https://www.facebook.com/GymCo2018/"
            target="_blank"
            rel="noreferrer"
            className="mt-3 p-2 rounded-full hover:bg-[#fe6c1d] hover:text-[#5c1a89] transition"
            aria-label="Facebook"
          >
            <Facebook size={28} />
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-[#fe6c1d] mt-6 select-none">
        &copy; {new Date().getFullYear()} GymCo Female. All rights reserved.
      </div>
    </footer>
  );
}
