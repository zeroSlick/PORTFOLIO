import { Project } from '../types';
import wellify from "../assets/wellify.jpg";
import intelliroom from "../assets/intelliroom.png";
import prajanetra from "../assets/prajanetra.png";
import srjrconnect from "../assets/srjrconnect.png";
import chitchat from "../assets/chitchat.png";
export const projects: Project[] = [
  {
    name: "Wellify",
    description:
      "A smart, intuitive healthcare web application built to <strong> bridge </strong> the gap between <strong> patients </strong>  and <strong> doctors </strong>.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "TensorFlow",
      "JWT",
      "Daisy UI",
    ],
    url: null,
    github: "https://github.com/zeroSlick/Wellify",
    backimage: wellify.src,
  },
  {
    name: "Chit-Chat Web",
    description:
      "Built a fully functional <strong>real-time</strong> messaging platform using the <strong> MERN </strong> stack. Integrated user authentication and user profile management.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "Socket.io",
      "MongoDB",
      "Daisy UI",
    ],
    url: "https://chitchat-kds1.onrender.com/",
    github: "https://github.com/Its-Shinde4241/Chatting-Messaging--Website",
    backimage: chitchat.src,
  },
];