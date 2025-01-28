import {
  architecturalIconImg,
  bcgImg,
  cadIconImg,
  contestIconImg,
  designIconImg,
  graphic1Img,
  graphic2Img,
  graphic3Img,
  ideaIconImg,
  industrialIconImg,
  jplImg,
  manufactureIconImg,
  nasaImg,
  productIconImg,
  slideImg1,
  slideImg10,
  slideImg11,
  slideImg2,
  slideImg3,
  slideImg4,
  slideImg5,
  slideImg6,
  slideImg7,
  slideImg8,
  slideImg9,
  targetImg,
  tiffanyImg,
  usArmyImg,
} from "@/utils";
import { z } from "zod";

export type TCarouselItem = {
  title: string;
  description: string;
  author: string;
  image: string;
};

export type TServices = {
  img: string;
  title: string;
  details?: string;
};

export type TContractor = {
  image: string;
  title: string;
  details?: string;
  btnTitle?: string;
};

export const navList = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "About",
    path: "/about",
  },
];

export const companyLogos = [
  nasaImg,
  usArmyImg,
  targetImg,
  tiffanyImg,
  jplImg,
  bcgImg,
];

export const carouselItems: TCarouselItem[] = [
  {
    title: "3D Modeling",
    description:
      "3D modeling services for 3D CAD design, tool parts, prototypes, & 3D printing.",
    author: "Alex Tomic",
    image: slideImg1,
  },
  {
    title: "Architectural Design",
    description:
      "Architectural design services for drafting, 3D animation, floor plans & BIM modeling.",
    author: "John Doe",
    image: slideImg2,
  },
  {
    title: "CAD Design",
    description:
      "CAD drafting, CAD design for parts, mechanical design & manufacturing.",
    author: "Jane Smith",
    image: slideImg3,
  },
  {
    title: "Product Design",
    description: "Innovative product design solutions for your business.",
    author: "Emma Stone",
    image: slideImg4,
  },
  {
    title: "Interior Design",
    description:
      "Elegant and functional interior designs for your home or office.",
    author: "Chris Johnson",
    image: slideImg5,
  },
  {
    title: "Graphic Design",
    description: "Creative graphic design for all your branding needs.",
    author: "Taylor Lee",
    image: slideImg6,
  },
  {
    title: "Industrial Design",
    description:
      "Comprehensive industrial designs for innovative and efficient manufacturing.",
    author: "Michael Adams",
    image: slideImg7,
  },
  {
    title: "Landscape Design",
    description:
      "Beautiful and sustainable landscape design solutions for outdoor spaces.",
    author: "Sophia Carter",
    image: slideImg8,
  },
  {
    title: "Fashion Design",
    description:
      "Modern and creative fashion design for unique clothing lines.",
    author: "Oliver Brown",
    image: slideImg9,
  },
  {
    title: "UI/UX Design",
    description:
      "User-centric UI/UX designs for seamless and engaging digital experiences.",
    author: "Ella Martinez",
    image: slideImg10,
  },
  {
    title: "Motion Graphics",
    description:
      "Eye-catching motion graphics for videos, animations, and presentations.",
    author: "Liam Wilson",
    image: slideImg11,
  },
];

export const services: TServices[] = [
  {
    img: cadIconImg,
    title: "CAD services",
    details: "3D CAD Design New Product Design CAD Drafting Services & more",
  },
  {
    img: designIconImg,
    title: "Design Contests",
    details: "3D CAD Design New Product Design CAD Drafting Services & more",
  },
  {
    img: contestIconImg,
    title: "3D CAD design",
    details: "3D CAD Design New Product Design CAD Drafting Services & more",
  },
  {
    img: industrialIconImg,
    title: "Industrial design services",
    details: "3D CAD Design New Product Design CAD Drafting Services & more",
  },
  {
    img: productIconImg,
    title: "Product design services",
    details: "3D CAD Design New Product Design CAD Drafting Services & more",
  },
  {
    img: architecturalIconImg,
    title: "Architectural design",
    details: "3D CAD Design New Product Design CAD Drafting Services & more",
  },
  {
    img: ideaIconImg,
    title: "Patent an idea",
    details: "3D CAD Design New Product Design CAD Drafting Services & more",
  },
  {
    img: manufactureIconImg,
    title: "Manufacturing & prototyping",
    details: "3D CAD Design New Product Design CAD Drafting Services & more",
  },
];

export const contractor: TContractor[] = [
  {
    image: graphic1Img,
    title: "Hire a designer",
    details:
      "Work confidentially with a vetted designer and receive a flat-rate on your project.",
    btnTitle: "Learn more",
  },
  {
    image: graphic2Img,
    title: "Design contests",
    details:
      "Launch contest where designers compete to create a perfect design for your project.",
    btnTitle: "Learn more",
  },
  {
    image: graphic3Img,
    title: "Hourly on-demand",
    details:
      "Need hourly design help? Get matched with a vetted designer on-demand.",
    btnTitle: "Learn more",
  },
];

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" }),
});

export type TContactFormValues = z.infer<typeof contactSchema>;
