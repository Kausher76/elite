import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85"
              alt="Heavy equipment construction site"
              className="h-[500px] w-full rounded-xl object-cover"
            />

            <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-yellow-400 p-7 text-black sm:block">
              <div className="text-4xl font-black">15+</div>
              <div className="mt-1 text-sm font-bold">
                Years of Experience
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
              About Elite
            </p>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              Your Reliable Heavy Equipment Partner
            </h2>

            <p className="mt-6 leading-7 text-gray-400">
              We provide dependable heavy equipment rental solutions for
              construction, infrastructure and industrial projects.
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              Our focus is simple: provide suitable equipment, reliable
              support and flexible rental solutions that help our customers
              complete projects efficiently.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Well-maintained equipment",
                "Flexible rental solutions",
                "Professional customer support",
                "Project-focused service",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-yellow-400"
                  />

                  <span className="text-sm text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;