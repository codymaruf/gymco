import { useEffect, useState } from "react";

export default function Nav() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShow(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } bg-white/80 backdrop-blur-md shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <img
          src="/assets/gymCo.jpg"
          alt="GymCo Logo"
          className="rounded-full h-12 w-12 object-cover border-2 border-[#fe6c1d]"
        />

        {/* Nav links desktop */}
        <ul className="hidden sm:flex gap-8 text-base font-semibold font-inter text-[#5c1a89]">
          {["About", "Services", "Schedule", "Locaion", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group"
              >
                {item}
                <span className="block h-[2px] w-0 bg-[#f21c8b] group-hover:w-full transition-all duration-300 mt-1"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Join Now button */}
        <a
          href="#contact"
          className="text-white font-semibold px-4 py-2 rounded-full bg-[#fe6c1d] hover:bg-[#f21c8b] transition duration-300 text-sm whitespace-nowrap"
        >
          Join Now
        </a>
      </div>
    </nav>
  );
}
