import self from "../img/linkedin profile.jpg";
import mock1 from "../img/i-mockup.png";
import mock2 from "../img/emosum-mockuo.png";
import mock3 from "../img/notes-mockup.png";
import mock4 from "../img/env-mockup.png";
import mock5 from "../img/mock5.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Thanush",
  lastName: "Kumar",
  initials: "R D", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack WEB AND APP Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in the INDIA",
    },
    {
      emoji: "💼",
      text: "Aspiring Software Developer",
    },
    {
      emoji: "📧",
      text: "thanushkumarrd@gmail.com",
    },
  ],
  exposedTo: ["nodejs", "python", "adobe illustrator"],

  socials: [
    // {
    //   link: "https://facebook.com",
    //   icon: "fa fa-leetcode",
    //   label: "facebook",
    // },
    // {
    //   link: "https://instagram.com",
    //   icon: "fa fa-instagram",
    //   label: "instagram",
    // },
    {
      link: "https://github.com/Thanush19",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/thanushkumarrd/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    // {
    //   link: "https://twitter.com",
    //   icon: "fa fa-twitter",
    //   label: "twitter",
    // },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Thanush. I'm aspiring Fullstack  Developer From India. I am studying Electronics  at Chennai institute of technology, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day.",
  skills: {
    proficientWith: [
      "html",
      "css",
      "tailwind",
      "javascript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Spring",
      "Spring Boot",
      "Django",
      "Golang",
      "Mongo DB",
      "MySql",
      "PostgreSql",
      "Docker",
      "Kubernetes",
      "Amazon Web Services",
      "git",
      "github",

      "figma",
    ],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "theater",
      emoji: "🎭",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "Listening to songs",
      emoji: "🌶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "INAIPPU",
      live: "https://my-sde.vercel.app", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/Thanush19/inaippu", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "EMOSUM",
      live: "https://github.com/Thanush19/srm-cyber-hackathon",
      source: "https://github.com/Thanush19/srm-cyber-hackathon",
      image: mock2,
    },
    {
      title: "T-NOTES",
      live: "https://note-api-psi.vercel.app/",
      source: "https://github.com/Thanush19/note-taking-exp",
      image: mock3,
    },
    {
      title: "T-ENV",
      live: "https://t-env.vercel.app/",
      source: "https://github.com/Thanush19/co2-calc",
      image: mock4,
    },
    // {
    //   title: "Project 5",
    //   live: "https://paytonpierce.dev",
    //   source: "https://github.com/paytonjewell",
    //   image: mock5,
    // },
  ],
};
