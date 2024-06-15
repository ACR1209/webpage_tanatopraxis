import React from "react";

function EnrollButton({ className }: { className?: string }) {
  return (
    <a
      href="#contact"
      className={`${className} bg-primary hover:bg-primaryLight text-white font-bold py-2 px-4 rounded`}
    >
      INSCRIBETE AHORA
    </a>
  );
}

export default EnrollButton;
