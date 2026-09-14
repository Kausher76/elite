import { equipment } from "../data/equipment";
import EquipmentCard from "../components/EquipmentCard";

const EquipmentSection = () => {
  return (
    <section className="py-20" id = "equipment">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {equipment.map((item) => (
          <EquipmentCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default EquipmentSection;