"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/work", label: "Work" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

function Menu() {
  const container = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const tl = useRef(null);
  useEffect(() => {
    if (isMenuOpen) {
      // console.log("Setting up GSAP animations");
      gsap.set("#menu-link", { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to("#menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(
          "#menu-link",
          {
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.inOut",
            delay: -0.75,
          },
          "-=1.25",
        );
      console.log("GSAP timeline created", tl.current);
      tl.current.play();
    } else if (tl.current) {
      console.log("Reversing GSAP animation");
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  /*
  useGSAP(
    () => {
      gsap.set("#menu-link", { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to("#menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(
          "#menu-link",
          {
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.inOut",
            delay: -0.75,
          },
          "-=1.25",
        );
    },
    { scope: container },
  );

  useEffect(() => {
    if (tl.current) {
      if (isMenuOpen) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    }
  }, [isMenuOpen]);
*/

  return (
    <menu ref={container}>
      <div className="absolute flex w-full cursor-pointer justify-between p-8">
        <p className="text-sm font-medium uppercase">Logo</p>
        <p className="text-sm font-medium uppercase" onClick={toggleMenu}>
          Menu
        </p>
      </div>

      {isMenuOpen && (
        <div
          id="menu-overlay"
          className="fixed right-0 top-0 z-10 h-full w-full bg-primary-800 p-8 text-accent-50"
        >
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
                  <li
                    key={link.label}
                    id="menu-link"
                    className="[clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_0%_100%)]"
                  >
                    <Link href={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 text-sm font-medium">
                <div className="flex flex-col">
                  <a href="#">X &#8599;</a>
                  <a href="#">Instagram &#8599;</a>
                  <a href="#">LinkedIn &#8599;</a>
                  <a href="#">Behance &#8599;</a>
                  <a href="#">Dribble &#8599;</a>
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
        </div>
      )}
    </menu>
  );
}

export default Menu;
