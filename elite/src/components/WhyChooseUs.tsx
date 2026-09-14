import {
  Award,
  ShieldCheck,
  Settings,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Quality First",
    description:
      "We focus on providing dependable equipment suitable for demanding work environments.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Focused",
    description:
      "Safety and reliability are important parts of our equipment and service approach.",
  },
  {
    icon: Settings,
    title: "Reliable Machines",
    description:
      "Our fleet is maintained to support consistent performance on project sites.",
  },
  {
    icon: Users,
    title: "Customer Support",
    description:
      "Our team works with customers to understand their equipment requirements.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-600">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            Built Around Your Success
          </h2>

          <p className="mt-5 text-gray-600">
            Reliable equipment and practical service for projects of every
            size.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="rounded-xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Icon size={34} className="text-yellow-500" />

                <h3 className="mt-6 text-xl font-bold">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;