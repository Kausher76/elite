import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import companyLogo from "../assets/companyLogo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white">

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">

        {/* Brand */}
        <a href="/" className="flex items-center gap-2">
  <img src={companyLogo} alt="Company Logo" className="h-10 w-auto" />
</a>

        {/* Navigation */}
        <div>
          <h3 className="font-bold">
            Quick Links
          </h3>

          <div className="mt-5 space-y-3 text-sm text-gray-500">
            <a href="#home" className="block hover:text-yellow-400">
              Home
            </a>

            <a href="#equipment" className="block hover:text-yellow-400">
              Equipment
            </a>

            <a href="#services" className="block hover:text-yellow-400">
              Services
            </a>

            <a href="#about" className="block hover:text-yellow-400">
              About
            </a>

            <a href="#contact" className="block hover:text-yellow-400">
              Contact
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold">
            Services
          </h3>

          <div className="mt-5 space-y-3 text-sm text-gray-500">
            <p>Heavy Equipment Rental</p>
            <p>Equipment Transportation</p>
            <p>Equipment Support</p>
            <p>Flexible Rental Solutions</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold">
            Contact
          </h3>

          <div className="mt-5 space-y-4 text-sm text-gray-500">

            <div className="flex gap-3">
              <Phone
                size={18}
                className="shrink-0 text-yellow-400"
              />

              <span>
                +966 50 000 0000
              </span>
            </div>

            <div className="flex gap-3">
              <Mail
                size={18}
                className="shrink-0 text-yellow-400"
              />

              <span>
                info@example.com
              </span>
            </div>

            <div className="flex gap-3">
              <MapPin
                size={18}
                className="shrink-0 text-yellow-400"
              />

              <span>
                Saudi Arabia
              </span>
            </div>

          </div>
        </div>

      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <p>
            © {new Date().getFullYear()} Elite International Rental Est.
            All rights reserved.
          </p>

          <p>
            Heavy Equipment Rental
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;