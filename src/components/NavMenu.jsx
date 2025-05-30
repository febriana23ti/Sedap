import Logo from "./Logo";
import { useState, useEffect } from "react";

export default function NavMenu() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Ubah padding ketika scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Deteksi section aktif dengan IntersectionObserver
  useEffect(() => {
    const sections = ["home", "about", "topproduct", "member"];
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          { threshold: 0.5 }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out border-b ${
        scrolled ? "py-2 shadow-md" : "py-4"
      } bg-green-200 rounded-xl backdrop-blur-md border-gray-200`}
    >
      <div className="flex items-center justify-between mx-6">
        <Logo />
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About Sedap" },
            { id: "topproduct", label: "Top Product" },
            { id: "member", label: "Member" },
          ].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-green-700 font-semibold"
                    : "text-gray-800 hover:text-green-700"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/login"
              className="text-gray-800 hover:text-green-700 transition-colors duration-200"
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
