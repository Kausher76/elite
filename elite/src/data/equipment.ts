export interface Equipment {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  available: boolean;
}

export const equipment: Equipment[] = [
  {
    id: 1,
    name: "Excavators",
    category: "Earth Moving",
    description:
      "Reliable excavators for construction, excavation and heavy-duty projects.",
    image:
      "https://images.unsplash.com/photo-1580901368919-7738ef3e5e0a?auto=format&fit=crop&w=900&q=80",
    available: true,
  },
  {
    id: 2,
    name: "Mobile Cranes",
    category: "Lifting Equipment",
    description:
      "Powerful mobile cranes suitable for heavy lifting and industrial projects.",
    image:
      "https://images.unsplash.com/photo-1572982329540-0f3b3a4e3b3e?auto=format&fit=crop&w=900&q=80",
    available: true,
  },
  {
    id: 3,
    name: "Wheel Loaders",
    category: "Earth Moving",
    description:
      "High-performance wheel loaders for material handling and construction.",
    image:
      "https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&w=900&q=80",
    available: true,
  },
  {
    id: 4,
    name: "Forklifts",
    category: "Material Handling",
    description:
      "Industrial forklifts for warehouses, construction and logistics.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    available: true,
  },
];