"use client";
import Link from "next/link";
import { useState } from "react";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/work", label: "Work" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <menu>
      <div className="absolute flex w-full cursor-pointer justify-between p-8">
        <p className="text-sm font-medium uppercase">Logo</p>
        <p className="text-sm font-medium uppercase" onClick={toggleMenu}>
          Menu
        </p>
      </div>

      {isMenuOpen ? (
        <>
          <overlay className="fixed right-0 top-0 z-10 h-full w-full bg-primary-800 p-8 text-accent-50">
            <div className="flex cursor-pointer justify-between">
              <Link className="text-sm font-medium uppercase" href="/">
                Logo
              </Link>
              <p className="text-sm font-medium uppercase" onClick={toggleMenu}>
                Close
              </p>
            </div>

            <div className="grid h-full grid-cols-5 justify-between">
              <div className="flex flex-col justify-end">
                <p
                  className="cursor-pointer text-7xl font-extralight"
                  onClick={toggleMenu}
                >
                  &#x2715;
                </p>
              </div>

              <div className="col-span-3 flex h-full flex-col justify-between">
                <ul className="text-7xl font-extralight">
                  {menuLinks.map((link) => (
                    <li key={link.label}>
                      <Link href={link.path}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-4 text-sm font-medium">
                  <div className="flex flex-col">
                    <Link href="#">X &#8599;</Link>
                    <Link href="#">Instagram &#8599;</Link>
                    <Link href="#">LinkedIn &#8599;</Link>
                    <Link href="#">Behance &#8599;</Link>
                    <Link href="#">Dribble &#8599;</Link>
                  </div>
                  <div>
                    <p>info@logo.com</p>
                    <p>04 0407 0700</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end justify-end">
                <p className="cursor-pointer text-sm font-medium uppercase">
                  Support Us
                </p>
              </div>
            </div>
          </overlay>
        </>
      ) : (
        <></>
      )}
    </menu>
  );
}

export default Menu;
