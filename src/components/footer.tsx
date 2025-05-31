"use client";

import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 10,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  return (
    <div className="text-white py-10 md:py-14">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between px-20">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="cursor-pointer hover:scale-105 transition">
              <img
                src="/logo.png"
                alt="logo"
                className="h-6 min-w-[3.5rem] min-h-[1.5rem] object-contain shrink-0 grow-0"
              />
            </div>
            <h1 className="text-xl font-semibold">Ajeet Sharma</h1>
          </div>
          <p className="max-w-xs text-sm text-gray-300 mb-6">
Helping businesses turn ideas into fast, scalable, and user-focused digital products—built to perform and built to last.          </p>

          {/* Social Icons */}
          <div className="flex gap-2">
            {[
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/company/yourcompany",
              },
              { Icon: Twitter, href: "https://twitter.com/yourhandle" },
              { Icon: Instagram, href: "https://instagram.com/yourhandle" },
              { Icon: Facebook, href: "https://facebook.com/yourpage" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2C2C2C] p-2 rounded-md hover:bg-[#444] transition"
              >
                <Icon className="text-white w-4 h-4" strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Section with Links */}
        <div className="flex text-sm mt-10 md:mt-0">
          <div>
            <h2 className="font-semibold mb-3">Sections</h2>
            <ul className="space-y-2 text-gray-300">
              {["process", "services", "benefits", "projects", "contact"].map(
                (id) => (
                  <li
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="cursor-pointer hover:text-white transition"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}