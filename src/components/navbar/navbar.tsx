"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import SmartNavLink from "./smart-link";
import { SmartLink } from "@/types/navbar";
import EnrollButton from "../shared/enroll-button";
import Link from "next/link";

function Navbar() {
  const [links, setLinks] = useState<SmartLink[]>([
    { name: "Inicio", href: "home" },
    { name: "Oferta", href: "offer" },
    { name: "Preguntas Frecuentes", href: "faq" },
    { name: "Testimonios", href: "testimony" },
    { name: "Contacto", href: "contact" },
  ]);

  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="flex items-center top-0 z-50 shadow justify-between sticky w-full px-5 lg:px-14 py-2 bg-white">
      <div className="flex items-center">
        <Image
          alt="Logo"
          src="/shared/PraxisVectorized.png"
          width={100}
          height={100}
          className=""
        />

        <ul
          className={`hidden lg:flex gap-5 ml-5 ${isOpen ? "block" : "hidden"}`}
        >
          {links.map((link, index) => (
            <li key={link.name}>
              <SmartNavLink smartLink={link} />
            </li>
          ))}
          <Link href="/blog" className={`text-lg text-black uppercase `}>
            Blog
          </Link>
        </ul>
      </div>

      <div className="flex flex-row items-center gap-2">
        <div className="hidden lg:flex flex-col text-xs mt-2">
          <p>
            <b>Quito:</b> (+593) 098 773 4581
          </p>
          <p>
            <b>Guayaquil:</b> (+593) 096 252 0001
          </p>
        </div>
        <EnrollButton />
        <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
          >
            {!isOpen && (
              <path
                d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            )}
          </svg>
        </div>
      </div>

      {isOpen && (
        <>
          <div className="lg:hidden w-screen h-screen top-0 left-0 absolute z-40 bg-black bg-opacity-50 transition-all"></div>
          <div className="lg:hidden w-1/2 h-screen top-0 left-0 absolute z-50 bg-white transition-all">
            <div className="relative">
              {isOpen && (
                <div
                  className="lg:hidden absolute top-5 right-5"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}

              <div className="flex pl-10 pt-12 justify-start ">
                <Image
                  alt="Logo"
                  src="/shared/PraxisVectorized.png"
                  width={100}
                  height={100}
                  className=""
                />
              </div>

              <ul
                className={`flex flex-col gap-4 mt-4 text-left pl-10 ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                {links.map((link, index) => (
                  <li key={link.name}>
                    <SmartNavLink smartLink={link} />
                  </li>
                ))}
                <Link href="/blog" className={`text-lg text-black uppercase `}>
                  Blog
                </Link>
              </ul>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
