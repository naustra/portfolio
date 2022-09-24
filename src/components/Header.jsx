import React, { useState } from "react";
import { useEffect } from "react";
export function Header() {
  const [show, setShow] = useState(true);
  const controlNavBar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => window.removeEventListener("scroll", controlNavBar);
  }, []);

  return (
    <header className="fixed top-0 z-10 w-full bg-charcoal py-2 duration-300 ease-in">
      <nav className="mx-5 flex justify-between">
        <div>LOGO</div>
        <div>
          <ol className="flex flex-row">
            <li className="mx-2">About</li>
            <li className="mx-2">Experience</li>
            <li className="mx-2">Work</li>
            <li className="mx-2">Contact</li>
            <li className="mx-2">CV</li>
          </ol>
        </div>
      </nav>
    </header>
  );
}
