import React from "react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="fixed top-0 left-0 w-full z-50 bg-cover bg-center mb-5"
      style={{ backgroundImage: "url('/BG.png')" }}
    >
      <nav className="w-full px-1 py- flex items-center justify-between">
        <div className="flex items-center">
          <img src="/VFilms Logo (1).png" alt="Logo" className="h-12 w-auto" />
        </div>

        <div className="flex space-x-8 text-black font-medium text-lg">
          {isOpen ? (
            <button onClick={() => setIsOpen(false)}>
              <img alt="Navbar Decorative" src="/Navbar.png"></img>
            </button>
          ) : (
            <button onClick={() => setIsOpen(true)}>
              <img alt="Navbar Decorative" src="/Navbar1.png"></img>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
