
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-yellow-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 px-5 py-16 md:flex-row lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-black/60">
            Have a Project?
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Need Heavy Equipment?
          </h2>

          <p className="mt-3 max-w-xl text-sm text-black/70">
            Tell us what equipment you need and our team will help you find
            the right solution.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 rounded-md border-2 border-black px-7 py-4 font-bold text-black transition hover:bg-black hover:!text-white"
          >
            Request a Quote
            <ArrowRight size={18} />
          </a>



          <a
            href="tel:+966500000000"
            className="flex items-center justify-center gap-2 rounded-md border-2 border-black px-7 py-4 font-bold text-black transition hover:bg-black hover:!text-white"
          >
            <Phone size={18} />
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

