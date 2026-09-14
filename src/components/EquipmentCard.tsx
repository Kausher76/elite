import {
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import type { Equipment } from "../data/equipment";

interface EquipmentCardProps {
  item: Equipment;
}

const EquipmentCard = ({ item }: EquipmentCardProps) => {
  return (
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-2xl">

      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">

        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-gray-900">
          {item.category}
        </span>

        {/* Availability */}
        {item.available && (
          <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-green-600 px-3 py-1 text-xs font-bold text-white">
            <CheckCircle2 size={13} />
            Available
          </span>
        )}

        <h3 className="absolute bottom-4 left-5 text-2xl font-black text-white">
          {item.name}
        </h3>
      </div>

      {/* Content */}
      <div className="p-5">

        <p className="min-h-[72px] text-sm leading-6 text-gray-600">
          {item.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t pt-5">

          <a
            href="#contact"
            className="text-sm font-bold text-gray-900 transition hover:text-yellow-600"
          >
            Request Quote
          </a>

          <a
            href="#contact"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 transition group-hover:bg-yellow-400"
          >
            <ArrowUpRight size={18} />
          </a>

        </div>
      </div>
    </article>
  );
};

export default EquipmentCard;