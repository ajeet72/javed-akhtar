"use client";
import Image from "next/image";

export default function SkillsComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-fit text-center">
      <div className="mb-6">
        <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-medium">
          I'm currently looking to join a{" "}
          <span className="text-[#A88BFE]">cross-functional</span> team
        </h1>
        <p className="text-gray-300 text-sm md:text-base mt-2">
          that values improving people's lives through accessible design
        </p>
      </div>

      <div className="relative w-[300px] md:w-[500px] lg:w-[700px] aspect-square">
        <Image
          src="/skills.png"
          alt="Central Visual"
          fill
          className="object-contain"
          priority
          draggable="false"
          onDragStart={(e) => e.preventDefault()}
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>
    </div>
  );
}
