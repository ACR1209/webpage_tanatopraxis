import { Testimony } from "@/types/testimony";
import React from "react";

function TestimonyItem({
  testimony,
  className,
  flipped
}: {
  testimony: Testimony;
  className?: string;
  flipped?: boolean;
}) {
  return (
    <div className={`flex flex-col ${flipped ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
      <video
        className="lg:w-1/2 w-full h-[500px] lg:mt-5 relative z-10 bg-gray-200"
        width={1000}
        height={320}
        controls
      >
        <source src={testimony.videoSrc} type="video/mp4" />
      </video>
      <div className="flex items-end justify-start">
        <div className={`px-10 py-5 ${className} text-white`}>
          <h1 className="text-3xl lg:text-5xl font-bold w-full text-left">
            {testimony.name}
          </h1>
          <p className="text-xl lg:text-2xl w-full text-left">{testimony.title}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonyItem;
