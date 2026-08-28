import Image from "next/image";

export const categories = [
  {
    name: "Posters",
    slug: "posters",
    count: 12,
    accent: "#3b82f6", // Bright Blue
    items: [
      { id: 1, title: "Poster Demo 1", image: "event.jpeg" },
      { id: 2, title: "Poster Demo 2", image: "Coming Soon!.png" },
      { id: 3, title: "Poster Demo 3", image: "https://placehold.co/800x1200/222222/f3f0e8?text=Poster+3" },
      { id: 4, title: "Poster Demo 4", image: "https://placehold.co/800x1200/333333/f3f0e8?text=Poster+4" },
    ],
  },
  {
    name: "Carousels",
    slug: "carousels",
    count: 8,
    accent: "#eab308", // Yellow
    items: [
      { id: 1, title: "Carousel Demo 1", image: "https://placehold.co/1080x1080/111111/f3f0e8?text=Carousel+1" },
      { id: 2, title: "Carousel Demo 2", image: "https://placehold.co/1080x1080/1a1a1a/f3f0e8?text=Carousel+2" },
      { id: 3, title: "Carousel Demo 3", image: "https://placehold.co/1080x1080/222222/f3f0e8?text=Carousel+3" },
    ],
  },
  {
    name: "Logos",
    slug: "logos",
    count: 24,
    accent: "#22c55e", // Green
    items: [
      { id: 1, title: "Logo Demo 1", image: "https://placehold.co/800x800/111111/f3f0e8?text=Logo+1" },
      { id: 2, title: "Logo Demo 2", image: "https://placehold.co/800x800/1a1a1a/f3f0e8?text=Logo+2" },
      { id: 3, title: "Logo Demo 3", image: "https://placehold.co/800x800/222222/f3f0e8?text=Logo+3" },
      { id: 4, title: "Logo Demo 4", image: "https://placehold.co/800x800/333333/f3f0e8?text=Logo+4" },
    ],
  },
  {
    name: "Certificates",
    slug: "certificates",
    count: 5,
    accent: "#a855f7", // Purple
    items: [
      { id: 1, title: "Cert Demo 1", image: "https://placehold.co/1200x850/111111/f3f0e8?text=Certificate+1" },
      { id: 2, title: "Cert Demo 2", image: "https://placehold.co/1200x850/1a1a1a/f3f0e8?text=Certificate+2" },
    ],
  },
  {
    name: "Presentations",
    slug: "presentations",
    count: 10,
    accent: "#f97316", // Orange
    items: [
      { id: 1, title: "Pres Demo 1", image: "https://placehold.co/1920x1080/111111/f3f0e8?text=Presentation+1" },
      { id: 2, title: "Pres Demo 2", image: "https://placehold.co/1920x1080/1a1a1a/f3f0e8?text=Presentation+2" },
      { id: 3, title: "Pres Demo 3", image: "https://placehold.co/1920x1080/222222/f3f0e8?text=Presentation+3" },
    ],
  },
  {
    name: "Miscellaneous",
    slug: "miscellaneous",
    count: 15,
    accent: "#ef4444", // Red
    items: [
      { id: 1, title: "Misc Demo 1", image: "https://placehold.co/1000x1000/111111/f3f0e8?text=Misc+1" },
      { id: 2, title: "Misc Demo 2", image: "https://placehold.co/1000x1000/1a1a1a/f3f0e8?text=Misc+2" },
      { id: 3, title: "Misc Demo 3", image: "https://placehold.co/1000x1000/222222/f3f0e8?text=Misc+3" },
    ],
  },
];
