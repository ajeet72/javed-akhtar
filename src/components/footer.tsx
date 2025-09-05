"use client";

import { Linkedin, Twitter, Instagram, Facebook, Github, Youtube } from "lucide-react";
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
    <div className="text-white py-10 md:py-14 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 px-6 md:px-20 text-center md:text-left">
        {/* Left Section */}
        <div>
          <div className="flex flex-col md:flex-row items-center gap-2 mb-4">
            <div className="cursor-pointer hover:scale-105 transition">
              <img
                src="/logo.png"
                alt="logo"
                className="h-6 min-w-[3.5rem] min-h-[1.5rem] object-contain"
              />
            </div>
            <h1 className="text-xl font-semibold">Md Javed Akhtar</h1>
          </div>
          <p className="max-w-xs text-sm text-gray-300 mb-6 mx-auto md:mx-0">
            Crafting engaging maps, cinematic animations, and clean edits using tools like After Effects, Premiere Pro, and Mapbox. Focused on storytelling, visuals, and designs built to inspire and last.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-2">
            {[
              { Icon: Youtube, href: "https://youtube.com/@CREATE__NEW4" },
              { Icon: Linkedin, href: "https://linkedin.com/in/mdjavedakhtar076", },
              { Icon: Instagram, href: "https://instagram.com/create__new4/" },
              // { Icon: Facebook, href: "https://facebook.com/yourpage" },
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
        <div>
          <h2 className="font-semibold mb-3">Sections</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            {["home", "services", "process", "benefits", "projects", "contact"].map(
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
  );
}
