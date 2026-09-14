import {
  Construction,
  Truck,
  Wrench,
  Clock3,
} from "lucide-react";

const services = [
  {
    icon: Construction,
    title: "Equipment Rental",
    description:
      "Reliable heavy machinery available for short-term and long-term rental requirements.",
  },
  {
    icon: Truck,
    title: "Equipment Transportation",
    description:
      "Professional transportation solutions to deliver equipment safely to your project site.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Equipment maintained and supported to keep your projects running smoothly.",
  },
  {
    icon: Clock3,
    title: "Flexible Rental Periods",
    description:
      "Flexible rental durations designed around your project schedule and requirements.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-600">
              What We Do
            </p>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              Equipment Solutions Built Around Your Project
            </h2>

            <p className="mt-6 leading-7 text-gray-600">
              From equipment selection to transportation and support, we
              provide practical solutions for demanding construction and
              industrial projects.
            </p>

            <a
              
  href="#contact"
  className="flex items-center justify-center gap-2 rounded-md border-2 border-black px-7 py-4 font-bold text-black transition hover:bg-black hover:!text-white"
>
  Discuss Your Requirement
</a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-xl border border-gray-200 p-7 transition hover:border-yellow-400 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 text-yellow-700">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;