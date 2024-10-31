"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import AnimatedButton from "./ModularButton";
import { usePathname } from "next/navigation";
type PathSection = "/" | "/About" | "/Services" | "/Contact";
type SectionName = "home" | "about" | "services" | "contact";

const Header = () => {
  const path = usePathname();
  const [activeSection, setActiveSection] = useState<SectionName>("home");

  const pathToSection: Record<PathSection, SectionName> = {
    "/": "home",
    "/About": "about",
    "/Services": "services",
    "/Contact": "contact",
  };

  useEffect(() => {
    if (path && path in pathToSection) {
      setActiveSection(pathToSection[path as PathSection]);
    } else {
      setActiveSection("home");
    }
  }, [path]);

  const translations: Record<SectionName, string> = {
    home: "translate-x-0",
    about: "translate-x-20",
    services: "translate-x-44",
    contact: "translate-x-72",
  };

  const getTranslateX = () => {
    return translations[activeSection];
  };
  return (
    <div className="font-supreme md:w-fit justify-center w-full border-2 border-t-0 border-l-0 border-solid border-neutral-800 bg-neutral-200 h-14 header fixed top-0 right-0 flex items-center space-x-10 z-50 text-neutral-800 pl-14 pr-10 lg:text-base ">
      <Link href="/">
        <AnimatedButton text="Home" />
      </Link>
      <Link href="/About">
        <AnimatedButton text="About" />
      </Link>
      <Link href="/Services">
        <AnimatedButton text="Services" />
      </Link>
      <Link href="/Contact">
        <AnimatedButton text="Contact" />
      </Link>
      <img
        className={`absolute -bottom-8 md:visible invisible left-8 transition-transform duration-300 ${getTranslateX()}`}
        src="/arrowup.svg"
        alt="Navigation indicator"
      />
    </div>
  );
};

export default Header;
