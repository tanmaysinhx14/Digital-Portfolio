"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { navigationLinks } from "@/data/portfolio";

const DESKTOP_BREAKPOINT = 768;

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCondensed, setIsCondensed] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const nextIsCondensed = window.scrollY > 24;
      setIsCondensed(nextIsCondensed);
    };

    const handleResize = () => {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) {
        setIsMenuOpen(false);
      }
    };

    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const shouldShowOverlay = isMenuOpen && window.innerWidth < DESKTOP_BREAKPOINT;

    if (shouldShowOverlay) {
      const scrollbarOffset = Math.max(
        0,
        window.innerWidth - document.documentElement.clientWidth
      );

      document.body.style.setProperty("--scroll-lock-offset", `${scrollbarOffset}px`);
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
      document.body.style.removeProperty("--scroll-lock-offset");
    }

    return () => {
      document.body.classList.remove("mobile-menu-open");
      document.body.style.removeProperty("--scroll-lock-offset");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;

      if (!target) {
        return;
      }

      if (menuRef.current?.contains(target) || toggleRef.current?.contains(target)) {
        return;
      }

      setIsMenuOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown, { passive: true });
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getNavigationHref = (href: string) =>
    pathname === "/" ? href : `/${href}`;

  return (
    <header
      id="top"
      className={`site-header ${isCondensed ? "is-condensed" : ""} ${
        isMenuOpen ? "is-menu-open" : ""
      }`}>
      <div className="container portfolio-container">
        <div className="site-header-inner">
          <div className="site-brand-wrap">
            <Link
              href="/"
              className="site-brand text-decoration-none"
              onClick={closeMenu}>
              <span className="site-brand-name">Tanmay</span>
              <span className="site-brand-copy">Digital Portfolio</span>
            </Link>
          </div>

          <nav className="site-nav" aria-label="Primary">
            {navigationLinks.map((item) => (
              <Link
                key={item.href}
                href={getNavigationHref(item.href)}
                className="site-nav-link"
                onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="site-header-cta-wrap">
            <Link
              href="/blogs"
              className="site-header-cta text-decoration-none"
              onClick={closeMenu}>
              Blogs
            </Link>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="site-menu-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="site-mobile-menu"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((open) => !open)}>
            <span className="site-menu-bar" />
            <span className="site-menu-bar" />
            <span className="site-menu-bar" />
          </button>
        </div>

        <div id="site-mobile-menu" ref={menuRef} className="site-mobile-menu">
          <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-2">
            <span className="fw-bold fs-5 text-dark">Menu</span>
            <button
              type="button"
              className="btn-close"
              aria-label="Close menu"
              onClick={closeMenu}
            ></button>
          </div>

          <nav className="site-mobile-nav flex-grow-1 overflow-y-auto" aria-label="Mobile">
            {navigationLinks.map((item) => (
              <Link
                key={`mobile-${item.href}`}
                href={getNavigationHref(item.href)}
                className="site-mobile-nav-link"
                onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="border-top pt-3 mt-auto">
            <Link
              href="/blogs"
              className="site-header-cta site-mobile-cta text-decoration-none w-100 text-center"
              onClick={closeMenu}>
              Blogs
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
