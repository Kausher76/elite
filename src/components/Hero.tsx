
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden bg-black"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1580901368919-7738ef3e5e0a?auto=format&fit=crop&w=2200&q=90')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* Main content */}
      <div className="relative flex flex-1 items-center">
        <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-32 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              Heavy Equipment Rental in Saudi Arabia
            </div>

            <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-8xl">
              Powering
              <br />
              <span className="text-yellow-400">Your Projects</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
              Reliable heavy equipment rental solutions for construction,
              infrastructure and industrial projects across Saudi Arabia.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#equipment"
                className="flex items-center justify-center gap-2 rounded-md bg-yellow-400 px-7 py-4 font-bold text-black transition hover:bg-yellow-300"
              >
                Explore Equipment
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 rounded-md bg-yellow-400 px-7 py-4 font-bold text-black transition hover:bg-yellow-300"
              >
                <MessageCircle size={18} />
                Request a Quote
              </a>
            </div>

            {/* Benefits */}
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-yellow-400" size={17} />
                Quality Equipment
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-yellow-400" size={17} />
                Flexible Rental
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-yellow-400" size={17} />
                Professional Support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats */}
      <div className="relative border-t border-white/10 bg-black/40 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-3 px-5 lg:px-8">
          <div className="border-r border-white/10 py-5">
            <div className="text-2xl font-black text-white">15+</div>
            <div className="text-xs text-gray-400 sm:text-sm">
              Years Experience
            </div>
          </div>

          <div className="border-r border-white/10 px-5 py-5">
            <div className="text-2xl font-black text-white">200+</div>
            <div className="text-xs text-gray-400 sm:text-sm">
              Equipment
            </div>
          </div>

          <div className="px-5 py-5">
            <div className="text-2xl font-black text-white">24/7</div>
            <div className="text-xs text-gray-400 sm:text-sm">
              Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

