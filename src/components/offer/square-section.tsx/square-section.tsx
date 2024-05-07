import Image from "next/image";
import React from "react";

function SquareSection({
  imageUrl,
  children,
  isFlipped,
  className,
}: {
  children: React.ReactNode;
  imageUrl: string;
  isFlipped?: boolean;
  className?: string;
}) {
  return (
    <div className="w-full flex lg:flex-row h-full flex-col py-16">
      <div
        className={`w-full lg:w-1/2 relative overflow-hidden ${
          isFlipped ? "lg:pr-48" : "lg:pl-48"
        } `}
      >
        <Image
          alt="Imagen"
          src={imageUrl}
          width={480}
          height={480}
          className={` w-full h-full z-30 relative shadow-lg`}
        />
        {isFlipped ? (
          <div className={`w-full h-1/2 hidden lg:block absolute bottom-0 z-10 -right-10 ${className}`}></div>
        ): (
          <div className={`w-full h-1/2 hidden lg:block absolute bottom-0 z-10 -left-10 ${className}`}></div>
        )}
      </div>
      <div
        className={`w-full  flex flex-col  lg:w-1/2 ${
          isFlipped
            ? "lg:order-first justify-start lg:pl-48 lg:pr-5 lg:text-right px-5 py-3 lg:py-0"
            : "lg:order-last justify-end lg:pr-48 lg:pl-5 py-3 px-5 lg:py-0"
        } `}
      >
        {children}
      </div>
    </div>
  );
}

export default SquareSection;
