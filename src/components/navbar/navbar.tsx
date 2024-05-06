"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import SmartNavLink from "./smart-link";
import { SmartLink } from "@/types/navbar";

function Navbar() {
  const [links, setLinks] = useState<SmartLink[]>([
    { name: "Inicio", href: "home" },
    { name: "Oferta", href: "offer" },
    { name: "Preguntas Frecuentes", href: "faq" },
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
    <nav className="flex items-center top-0 z-50 shadow sticky w-full px-14 py-2 bg-white">
      <Image
        alt="Logo"
        src="/shared/PraxisVectorized.png"
        width={100}
        height={100}
      />
      <ul className="flex gap-5 ml-5">
        {links.map((link, index) => (
          <li key={link.name}>
            <SmartNavLink smartLink={link} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
