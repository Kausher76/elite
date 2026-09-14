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
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTuJ9yrBqNSARwfYFC52fsRsgbHjbBMVH9xLqQGJKvOWtstIWBdsox3wwAhAUwl-5maDY37eBGAs031tyEqgQqEwYjUrdXc",
    available: true,
  },
  {
    id: 2,
    name: "Mobile Cranes",
    category: "Lifting Equipment",
    description:
      "Powerful mobile cranes suitable for heavy lifting and industrial projects.",
    image:
      "https://elebia.com/wp-content/uploads/2020/07/type-of-mobile-cranes.jpg",
    available: true,
  },
  {
    id: 3,
    name: "Wheel Loaders",
    category: "Earth Moving",
    description:
      "High-performance wheel loaders for material handling and construction.",
    image:
      "https://s7d2.scene7.com/is/image/Caterpillar/CM20250916-202ea-e8102?$webp-cc-s$",
    available: true,
  },
  {
    id: 4,
    name: "Forklifts",
    category: "Material Handling",
    description:
      "Industrial forklifts for warehouses, construction and logistics.",
    image:
      "https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/types-of-forklifts-hero.webp",
    available: true,
  },
];