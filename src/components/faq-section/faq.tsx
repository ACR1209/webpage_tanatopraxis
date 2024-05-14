"use client";
import React, { useState } from "react";

function FrequentAskedQuestion({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        className="flex justify-between items-center cursor-pointer transition-all hover:bg-gray-300 px-5 py-2 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="text-xl font-bold select-none">{question}</h1>
        <div className={`w-6 h-6 transition-all ${isOpen ? "rotate-180" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      {isOpen && <div className="mt-3"><p className="text-lg select-none">{answer}</p></div> }
    </div>
  );
}

export default FrequentAskedQuestion;
