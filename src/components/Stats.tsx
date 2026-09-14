const stats = [
  {
    value: "200+",
    label: "Equipment Units",
  },
  {
    value: "15+",
    label: "Years Experience",
  },
  {
    value: "24/7",
    label: "Customer Support",
  },
  {
    value: "100%",
    label: "Project Focus",
  },
];

const Stats = () => {
  return (
    <section className="border-y border-gray-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">

        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`px-6 py-10 text-center ${
              index !== stats.length - 1
                ? "border-r border-gray-200"
                : ""
            }`}
          >
            <div className="text-4xl font-black">
              {stat.value}
            </div>

            <div className="mt-2 text-sm text-gray-500">
              {stat.label}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Stats;