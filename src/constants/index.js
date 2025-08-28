const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 1, suffix: "+", label: "Advitiya" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/c1.png",
  },
  {
    imgPath: "/images/logos/c2.png",
  },
  {
    imgPath: "/images/logos/c3.png",
  },
  // {
  //   imgPath: "/images/logos/company-logo-4.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-5.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-6.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-7.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-8.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-9.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-10.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-11.png",
  // },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Passionate Learner",
    desc: "Always eager to explore new technologies and improve my skills every day.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Team Collaboration",
    desc: "I enjoy working with people, sharing ideas, and building great things together.",
  },
  {
    imgPath: "/images/time.png",
    title: "Consistency & Dedication",
    desc: "Committed to giving my best in every project, no matter how small or big.",
  },
];

const techStackImgs = [
  {
    name: "Frontend Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Java Developer",
    imgPath: "/images/logos/java.png",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Frontend Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Java Developer",
    modelPath: "/models/ImageToStl.com_java.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];
const expCards = [
  {
    review: "Abhay demonstrated strong technical skills and creativity while working on the Judicial Chat Bot project. He consistently delivered well-optimized and reliable features, ensuring smooth and intuitive user interactions.",
    imgPath: "/images/gavel-scales-justice-courtroom-setting.jpg",
    logoPath: "/images/cropped_circle_image (6).png",
    title: "Fullstack Developer & Project Lead",
    date: "March 2025 - April 2025",
    link: "https://judicialchatbot.onrender.com/intro",   // ✅ added link here
    responsibilities: [
      "Developed and maintained user-facing features for the Judicial Chat Bot platform.",
      "Collaborated closely with designers to create smooth and intuitive conversational experiences.",
      "Led the project from concept to deployment, owning the original idea and guiding the development team.",
    ],
  },
  {
    review: "Abhay played a key role in developing Envirocare's wastewater management platform. His problem-solving skills and technical expertise ensured the system was efficient and reliable.",
    imgPath: "/images/waterMain.png",
    logoPath: "/images/logos/c3.png",
    title: "Full Stack Developer & Project Lead",
    date: "May 2025 - June 2025",
    link: "https://watermanagement-123-mp.free.nf/",   // ✅ added link here
    responsibilities: [
      "Led the development of Envirocare's revenue-based wastewater management platform, ensuring scalability and efficiency.",
      "Collaborated with backend engineers to integrate APIs and manage data workflows seamlessly.",
      "Guided the project from concept to deployment, contributing to both technical solutions and strategic planning.",
    ],
  },
  {
    review: "Abhay founded and led his startup team, successfully managing projects from idea to delivery. He demonstrated strong technical expertise, problem-solving skills, and leadership, ensuring high-quality and efficient solutions for all client projects.",
    imgPath: "/images/freelancer.png",
    logoPath: "/images/logos/c1.png",
    title: "Founder & CEO (Technical)",
    date: "August 2025 - September 2025",
    link: "https://www.freelancer.in/u/abhayrajsinghman",   // ✅ added link here
    responsibilities: [
      "Developed and maintained user-facing features for Advitiya Team's web platform.",
      "Optimized web applications for performance, responsiveness, and seamless user experience.",
      "Collaborated with the product and design teams to implement features based on feedback.",
    ],
  }
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Samrat Sarkar",
    mentions: "sarkarsamrat16112004@gmail.com",
    review:
      "Working with Abhayraj was a great experience. He understood requirements quickly and delivers exactly what needed and what is in the back of the mind with creativity and precision.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Ansh Kumar",
    mentions: "@anshkumar",
    review:
      "Abhayraj has an amazing problem-solving mindset. He took care of every small detail in my project and made the whole process stress-free.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Digambar Mehta",
    mentions: "@digambarmehta",
    review:
      "I’m impressed with his dedication and consistency. Working with him was an excellent experience. His technical expertise and structured approach helped us bring clarity to our project. He not only delivered the expected outcomes but also suggested improvements that made the final result much better. What I appreciated most was his reliability and transparent communication — I always knew the progress and next steps. Abhayraj brings both skill and dedication, which makes him a strong professional to collaborate with. Great experience to work with him.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Rohit Gussian",
    mentions: "@rohitgussian",
    review:
      "Abhayraj is highly skilled and approachable. His build projects with full dedication and delivers beyond expectations.",
    imgPath: "/images/client5.png",
  },
  {
    name: "kishlay Kumar",
    mentions: "kkishlay502@gmail.com ",
    review:
      "It was a pleasure working with Abhayraj. His technical knowledge and creative mindset made my project stand out beautifully.",
    imgPath: "/images/client2.png",
  },

];
const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/abhayraj_singh_mandloi/",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    link: "https://www.facebook.com/abhay.mandloi.39/",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    link: "https://x.com/AbhayrajSinghM2", // formerly Twitter
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/abhayraj-singh-mandloi-7960a8278/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
