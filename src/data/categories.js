import Image from "next/image";

export const categories = [
  {
    name: "Posters",
    slug: "posters",
    count: 10,
    accent: "#3b82f6", // Bright Blue
    items: [
      { id: 1, title: "Marketing Post", image: "/images/other0.jpeg" },
      { id: 2, title: "Idol Poster", image: "/images/king.png" },
      { id: 3, title: "Coming Soon Post", image: "/images/Coming Soon! .png" },
      { id: 4, title: "Event Poster", image: "/images/event.jpeg" },
      { id: 5, title: "Portfolio Post", image: "/images/other2.jpeg" },
      { id: 6, title: "Festival Post", image: "/images/holi.png" },
      { id: 7, title: "Club Intro", image: "/images/NATRAJ pos.png" },
      { id: 8, title: "Double Exposure", image: "/images/doubleexposure.png" },
      { id: 9, title: "Double Exposure2", image: "/images/other6.jpeg" },
      { id: 10, title: "Congratulation Post", image: "/images/other8.png" },
      
    ],
  },
  {
    name: "Carousels",
    slug: "carousels",
    count: 9,
    accent: "#eab308", // Yellow
    items: [
      { 
        id: 1, 
        title: "Carousel Project 1", 
        image: "/images/Artboard 1.png",
        isCarousel: true,
        carouselImages: [
          "/images/Artboard 1.png",
          "/images/Artboard 2.png",
          "/images/Artboard 3.png",
          "/images/Artboard 4.png",
        ]
      },
      { 
        id: 2, 
        title: "Carousel Project 2", 
        image: "/images/Art 1.png",
        isCarousel: true,
        carouselImages: [
          "/images/Art 1.png",
          "/images/Art 2.png",
          "/images/Art 3.png",
          "/images/Art 4.png",
          "/images/Art 5.png",
          "/images/Art 6.png",
        ]
      },
      { 
        id: 3, 
        title: "Carousel Project 3", 
        image: "/images/artd1.png",
        isCarousel: true,
        carouselImages: [
          "/images/artd1.png",
          "/images/artd2.png",
          "/images/artd3.png",
          "/images/artd4.png",
          "/images/artd5.png",
        
          "/images/artd7.png",
        ]
      },
      { 
        id: 4, 
        title: "Carousel Project 4", 
        image: "/images/ii1.png",
        isCarousel: true,
        carouselImages: [
          "/images/ii1.png",
          "/images/ii2.png",
          "/images/ii3.png",
          "/images/ii4.png",
          "/images/ii5.png",
          
        ]
      },
      { 
        id: 5, 
        title: "Carousel Project 5", 
        image: "/images/1.png",
        isCarousel: true,
        carouselImages: [
          "/images/1.png",
          "/images/2.png",
          "/images/3.png",
          "/images/4.png",
          "/images/5.png",
          "/images/6.png",
          "/images/7.png",
          "/images/8.png",
          "/images/9.png",
          "/images/10.png",
          "/images/11.png",
          "/images/12.png",
          "/images/13.png",
        ]
      },
      
      { 
        id: 6, 
        title: "Carousel Project 6", 
        image: "/images/ee0.png",
        isCarousel: true,
        carouselImages: [
          "/images/ee0.png",
          "/images/ee1.png",
          "/images/ee2.png",
          "/images/ee3.png",
          "/images/ee4.png",
          "/images/ee5.png",
        
        ]
      },
      { 
        id: 7, 
        title: "Carousel Project 7", 
        image: "/images/u1.png",
        isCarousel: true,
        carouselImages: [
          "/images/u1.png",
          "/images/u2.png",
          "/images/u3.png",
          "/images/u4.png",
          "/images/u5.png",
          "/images/u6.png",
        ]
      },
      { 
        id: 8, 
        title: "Carousel Project 8", 
        image: "/images/pp.png",
        isCarousel: true,
        carouselImages: [
          "/images/pp.png",
          "/images/jj1.png",
          "/images/ll2.png",
          "/images/kk3.png",
        ]
      },
      
      { 
        id: 9, 
        title: "Carousel Project 9", 
        image: "/images/111.png",
        isCarousel: true,
        carouselImages: [
          "/images/111.png",
          "/images/222.png",
          "/images/333.png",
          "/images/444.png",
          "/images/555.png",
          "/images/666.png",
          "/images/777.png",
        ]
      },
      
      
    ],
  },
  {
    name: "Logos",
    slug: "logos",
    count: 2,
    accent: "#22c55e", // Green
    items: [
      { id: 1, title: "Deeksharambh", image: "/images/dikshkfont.png" },
      { id: 2, title: "Natraj", image: "/images/NATRAJ.png" },
    ],
  },
  {
    name: "Certificates",
    slug: "certificates",
    count: 6,
    accent: "#a855f7", // Purple
    items: [
      { id: 1, title: "Certificate 1", image: "/images/certificate induction (3).png" },
      { id: 2, title: "Certificate 2", image: "/images/certificate vol.png" },
      { id: 3, title: "Certificate 3", image: "/images/certt.png" },
      { id: 4, title: "Certificate 4", image: "/images/winner lcd cert.png" },
      { id: 5, title: "Certificate 5", image: "/images/VOLUNTEERSlcd cert.png" },
      { id: 6, title: "Certificate 6", image: "/images/Participants lcd cert.png" },
    ],
  },
  {
    name: "Presentations",
    slug: "presentations",
    count: 2,
    accent: "#f97316", // Orange
    items: [
      { 
        id: 1, 
        title: "Pitch Deck 1", 
        image: "/images/p1.png",
        isCarousel: true,
        carouselImages: [
          "/images/p1.png",
          "/images/p2.png",
          "/images/p3.png",
          "/images/p9.png",
          "/images/p10.png",
          "/images/p11.png",
          "/images/p12.png",
          "/images/p13.png",
          "/images/p14.png",
          "/images/p14.png",
          "/images/p18.png",
          "/images/p19.png",
          "/images/p20.png",
          "/images/p21.png",
          "/images/p22.png",
          "/images/p23.png",
          "/images/p24.png",
          "/images/p25.png",
          "/images/p26.png",
          
        ]
      },
      { 
        id: 2, 
        title: "Pitch Deck 2", 
        image: "/images/a.png",
        isCarousel: true,
        carouselImages: [
          "/images/a.png",
          "/images/b.png",
          "/images/c.png",
          "/images/d.png",
          "/images/e.png",
          "/images/f.png",
          "/images/g.png",
          "/images/h.png",
          "/images/i.png",
          "/images/j.png",
          "/images/k.png",
          "/images/l.png",
          "/images/m.png",
          "/images/n.png",
          "/images/o.png",
          "/images/p.png",
          "/images/q.png",
          "/images/r.png",
        
          
        ]
      },
    ],
  },

];
