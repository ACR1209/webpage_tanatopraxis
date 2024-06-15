"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import SmartNavLink from "./smart-link";
import { SmartLink } from "@/types/navbar";
import EnrollButton from "../shared/enroll-button";

function Navbar() {
  const [links, setLinks] = useState<SmartLink[]>([
    { name: "Inicio", href: "home" },
    { name: "Oferta", href: "offer" },
    { name: "Preguntas Frecuentes", href: "faq" },
    { name: "Testimonios", href: "testimony" },
    { name: "Contacto", href: "contact" },
  ]);

  useEffect(() => {
    const elements = links.map((link) => {
      return document.getElementById(link.href);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((element) => {
          if (element.isIntersecting) {
            setLinks((links) =>
              links.map((link) =>
                link.href === element.target.id
                  ? { ...link, isActive: true }
                  : { ...link, isActive: false }
              )
            );
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    elements.forEach((el) => {
      if (!!el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (!!el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <nav className="flex items-center top-0 z-50 shadow justify-between sticky w-full px-14 py-2 bg-white">
      <div className="flex items-center">
        <Image
          alt="Logo"
          src="/shared/PraxisVectorized.png"
          width={100}
          height={100}
        />
        <ul className="hidden lg:flex gap-5 ml-5">
          {links.map((link, index) => (
            <li key={link.name}>
              <SmartNavLink smartLink={link} />
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-row items-center gap-2">
        <div className="hidden lg:flex flex-col text-xs mt-2">
          <p><b>Quito:</b> (+593) 098 773 4581</p>
          <p><b>Guayaquil:</b> (+593) 096 252 0001</p>
        </div>
        <EnrollButton />
      </div>
    </nav>
  );
}

export default Navbar;
