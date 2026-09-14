import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import companyLogo from "../assets/companyLogo.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/90 text-white backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
  <div className="bg-white rounded-md p-1">
    <img
      src={companyLogo}
      alt="Company Logo"
      className="h-10 w-auto"
    />
  </div>
</a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <a
            href="#home"
            className="text-sm font-medium transition hover:text-yellow-400"
          >
            Home
          </a>

          <a
            href="#equipment"
            className="text-sm font-medium transition hover:text-yellow-400"
          >
            Equipment
          </a>

          <a
            href="#services"
            className="text-sm font-medium transition hover:text-yellow-400"
          >
            Services
          </a>

          <a
            href="#about"
            className="text-sm font-medium transition hover:text-yellow-400"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm font-medium transition hover:text-yellow-400"
          >
            Contact
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 rounded-md bg-yellow-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-yellow-300"
          >
            <Phone size={16} />
            Get a Quote
          </a>
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-md p-2 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {open && (
        <div className="border-t border-white/10 bg-black px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            {[
              ["Home", "#home"],
              ["Equipment", "#equipment"],
              ["Services", "#services"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className="text-base font-medium hover:text-yellow-400"
              >
                {label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-md bg-yellow-400 px-5 py-3 text-center font-bold text-black"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;