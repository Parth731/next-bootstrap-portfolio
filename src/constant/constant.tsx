import {
  InvestasImg,
  PaymentGatewayImg,
  amazonImg,
  bootstrapImg,
  cssImg,
  expressImg,
  firebaseImg,
  githubImg,
  graphqlImg,
  htmlImg,
  javascriptImg,
  materialUIImg,
  mongodbImg,
  nextjsImg,
  nodejsImg,
  reactImg,
  reactjsImg,
  reduxImg,
  tailwindImg,
  typescriptImg,
} from "@/assets";
import { useTypewriter } from "react-simple-typewriter";

export const techs = [
  {
    src: htmlImg,
    title: "HTML",
    link: "https://html.com/document/",
    style: "hover:shadow-orange-500",
  },
  {
    src: cssImg,
    title: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    style: "hover:shadow-blue-500",
  },
  {
    src: javascriptImg,
    title: "Javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    style: "hover:shadow-yellow-500",
  },
  {
    src: bootstrapImg,
    title: "Bootstrap",
    link: "https://getbootstrap.com/docs/4.1/getting-started/introduction/",
    style: "hover:shadow-violet-800",
  },
  {
    src: reactjsImg,
    title: "ReactJS",
    link: "https://legacy.reactjs.org/docs/getting-started.html",
    style: "hover:shadow-cyan-500",
  },
  {
    src: reduxImg,
    title: "ReduxToolkit",
    link: "https://redux-toolkit.js.org/",
    style: "hover:shadow-violet-500",
  },
  {
    src: nextjsImg,
    title: "NextJS",
    link: "https://nextjs.org/",
    style: "hover:shadow-slate-500",
  },
  {
    src: tailwindImg,
    title: "Tailwind CSS",
    link: "https://tailwindcss.com/docs/installation",
    style: "hover:shadow-cyan-500",
  },
  {
    src: nodejsImg,
    title: "NodeJS",
    link: "https://nodejs.org/en/docs",
    style: "hover:shadow-green-500",
  },
  {
    src: expressImg,
    title: "Express",
    link: "https://expressjs.com/",
    style: "hover:shadow-slate-50",
  },
  {
    src: mongodbImg,
    title: "MongoDB",
    link: "https://www.w3schools.com/mongodb/",
    style: "hover:shadow-green-500",
  },
  {
    src: firebaseImg,
    title: "Firebase",
    link: "https://firebase.google.com/",
    style: "hover:shadow-yellow-500",
  },
  {
    src: typescriptImg,
    title: "Typescript",
    link: "https://www.typescriptlang.org/docs/",
    style: "hover:shadow-sky-500",
  },
  {
    src: githubImg,
    title: "Git&Github",
    link: "https://github.com/",
    style: "hover:shadow-slate-50",
  },
  {
    src: materialUIImg,
    title: "MaterialUI",
    link: "https://mui.com/",
    style: "hover:shadow-sky-500",
  },
  {
    src: graphqlImg,
    title: "graphQL",
    link: "https://graphql.org/",
    style: "hover:shadow-pink-500",
  },
];

// export const [text] = useTypewriter({
//   words: ["Professional Coder", "Full Stack Developer", "Frontend Developer"],
//   loop: true,
//   typeSpeed: 20,
//   deleteSpeed: 10,
//   delaySpeed: 2000,
// });

export const portfolioDetails = [
  {
    id: 1,
    title: "Amazon Clone Next",
    description:
      "The Amazon Clone, built with Next.js, React.js, and Tailwind CSS, mirrors the renowned e-commerce platform. It reproduces Amazon's UI, product catalog, and checkout process. Next.js enables fast, server-rendered pages, while Tailwind CSS ensures a sleek design. React.js powers dynamic content, providing an immersive shopping experience.",
    src: amazonImg,
    website_url: "https://amazonclones.vercel.app",
    sourcecode_link: "https://github.com/Parth731/amazon-next",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    id: 2,
    title: "Payment Gateway",
    description:
      "The Payment Gateway integrates Next.js for dynamic UI, Supabase for secure database transactions, and CSS for seamless styling. This powerful combination enables safe and efficient online payments, ensuring a user-friendly experience.",
    src: PaymentGatewayImg,
    website_url: "https://paymentgetway.vercel.app",
    sourcecode_link: "https://github.com/Parth731/payment-getway",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    id: 3,
    title: "Investa",
    description:
      "Investa project leverages React.js for dynamic UI, SCSS for enhanced styling, and RESTful API for seamless data management. It empowers users to explore investments through an intuitive interface.",
    src: InvestasImg,
    website_url: "https://investas.vercel.app",
    sourcecode_link: "https://github.com/Parth731/investa",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
  },
];
