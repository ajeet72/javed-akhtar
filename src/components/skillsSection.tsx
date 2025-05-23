"use client";
import Image from "next/image";
import CenterButton from "./centerButton";

export default function SkillsComponent({ id }: { id: string }) {
  return (
    <div id={id} className="flex flex-col items-center justify-center min-h-fit text-center">
      <CenterButton name="Skills" />
      <div>
        <h1 className="text-white text-3xl md:text-4xl font-bold">
          I'm currently looking to join a{" "}
          <span className="text-[#A88BFE]">cross-functional</span> team
        </h1>
        <p className="text-gray-400 text-base md:text-lg mt-4 max-w-2xl mx-auto">
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