import img0 from "./assets/images/projects/0/0.png";
import img2 from "./assets/images/projects/2/0.png";
import img3 from "./assets/images/projects/3/0.png";
import img4 from "./assets/images/projects/4/0.png";
import img5 from "./assets/images/projects/5/0.png";
import gif3 from "./assets/images/projects/3/gif.gif";
import gif4 from "./assets/images/projects/4/gif.gif";
import gif5 from "./assets/images/projects/5/gif.gif";

const skillsList = [
  { title: "MongoDB", icon: "SiMongodb" },
  { title: "Express JS", icon: "SiExpress" },
  { title: "React JS", icon: "SiReact" },
  { title: "Node JS", icon: "SiNodedotjs" },
  { title: "Python", icon: "SiPython" },
  { title: "Django", icon: "SiDjango" },
  { title: "PostgreSQL", icon: "SiPostgresql" },
  { title: "C#", icon: "SiCsharp" },
  { title: "ASP.NET", icon: "SiDotnet" },
  { title: "MS SQL Server", icon: "SiMicrosoftsqlserver" },
  { title: "Google Internal Tools", icon: "SiGoogle" },
  { title: "Google Internal SQL", icon: "TbBrandGoogleBigQuery" },
  { title: "JavaScript", icon: "SiJavascript" },
  { title: "jQuery", icon: "SiJquery" },
  { title: "HTML5", icon: "SiHtml5" },
  { title: "CSS3", icon: "SiCss3" },
  { title: "Java", icon: "DiJava" },
  { title: "Bootstrap", icon: "SiBootstrap" },
  { title: "Materialize", icon: "DiMaterializecss" },
  { title: "Material UI", icon: "SiMui" },
  { title: "Postman", icon: "SiPostman" },
  { title: "Amazon S3 Bucket", icon: "SiAmazons3" },
  { title: "JWT", icon: "SiJsonwebtokens" },
  { title: "Axios", icon: "SiAxios" },
  { title: "Socket.IO", icon: "SiSocketdotio" },
  { title: "Google Maps API", icon: "SiGooglemaps" },
];
const projectList = [
  {
    id: 0,
    title: "Prospecting Map",
    subtitle: "",
    description:
      "The Prospecting Map was built as a visual assistant to support field agents with prospecting related tasks. Use this tool to plan routes, find nearby dealers, and update dealer prospect status.",
    technologies: [
      { title: "C#", icon: "SiCsharp" },
      { title: "ASP.NET MVC", icon: "SiDotnet" },
      { title: "MS SQL Server", icon: "SiMicrosoftsqlserver" },
      { title: "Javascript", icon: "SiJavascript" },
      { title: "jQuery", icon: "SiJquery" },
      { title: "HTML", icon: "SiHtml5" },
      { title: "CSS", icon: "SiCss3" },
      { title: "Bootstrap", icon: "SiBootstrap" },
      { title: "Google Maps API", icon: "SiGooglemaps" },
      { title: "DataTables", icon: "" },
    ],
    liveSite:
      "https://drive.google.com/file/d/19vZk2uWCzqSr5OqWJq7LqaQ8_SaACvCo/view?usp=sharing",
    github: "",
    staticImage: img0,
    gifImage: "",
  },
  // {
  //   id: 1,
  //   title: "Google Media Onboarding Reporting Dashboard",
  //   subtitle: "",
  //   description: "",
  //   technologies: [
  //     "Google Internal SQL/ Report Builder",
  //     "Apps Script",
  //     "BigQuery",
  //     "Python",
  //   ],
  //   liveSite: "",
  //   github: "",
  //   image: "",
  // },
  {
    id: 2,
    title: "Matching Game",
    subtitle: "Children's Game to Enhance Pattern Recognition",
    description:
      "The Matching Game was thoughtfully crafted as an engaging educational drag-and-drop browser game for toddlers, offering them the opportunity to match letters, shapes, numbers, animals, and beloved cartoon characters within a charming 3x3 tile grid.",
    technologies: [
      { title: "JavaScript", icon: "SiJavascript" },
      { title: "HTML", icon: "SiHtml5" },
      { title: "CSS", icon: "SiCss3" },
    ],
    liveSite: "https://jabbacalvin.github.io/matching_game/",
    github: "https://github.com/jabbacalvin/matching_game",
    staticImage: img2,
    gifImage: "",
  },
  {
    id: 3,
    title: "Touch Grass",
    subtitle: "Valorant Lineups Sharing App",
    description:
      "Touch Grass is a versatile web app tailored for Valorant lineup curation, catering to gamers' needs by simplifying lineup exploration through filtering agent and map selection. The app allows users to create, modify, or remove their lineups and strategies to share with fellow players.",
    technologies: [
      { title: "NodeJS", icon: "SiNodedotjs" },
      { title: "Express.js", icon: "SiExpress" },
      { title: "MongoDB", icon: "SiMongodb" },
      { title: "JavaScript", icon: "SiJavascript" },
      { title: "HTML", icon: "SiHtml5" },
      { title: "CSS", icon: "SiCss3" },
      { title: "Bootstrap", icon: "SiBootstrap" },
      { title: "Canvas", icon: "" },
    ],
    liveSite: "https://touch-grass-valorant-cdfffdd5ddc5.herokuapp.com/",
    github: "https://github.com/jabbacalvin/valorant-lineups",
    staticImage: img3,
    gifImage: gif3,
  },
  {
    id: 4,
    title: "CreatorWallet",
    subtitle: "Content Creator Deals Management App",
    description:
      "CreatorWallet is an all-in-one solution designed to simplify deal management. It features an intuitive design and a user-friendly reporting dashboard for tracking deal progress, including status and financial gains or losses. Users can easily input deal details and generate comprehensive reports.",
    technologies: [
      { title: "Python", icon: "SiPython" },
      { title: "Django", icon: "SiDjango" },
      { title: "PostgreSQL", icon: "SiPostgresql" },
      { title: "JavaScript", icon: "SiJavascript" },
      { title: "jQuery", icon: "SiJquery" },
      { title: "HTML", icon: "SiHtml5" },
      { title: "CSS", icon: "SiCss3" },
      { title: "Materialize", icon: "DiMaterializecss" },
      { title: "Amazon S3 Buckets", icon: "SiAmazons3" },
      { title: "YouTube API", icon: "SiYoutube" },
      { title: "Twitch API", icon: "SiTwitch" },
      { title: "Stripe API", icon: "FaStripe" },
      { title: "Highcharts", icon: "" },
    ],
    liveSite: "https://creatorwallet2-f02c1911c973.herokuapp.com/",
    github: "https://github.com/kenneychan/creatorWallet",
    staticImage: img4,
    gifImage: gif4,
  },
  {
    id: 5,
    title: "Adventur Chats",
    subtitle: "Travel App with Chatting",
    description:
      "Adventur Chats is a travel social app that connects travelers, allowing them to share their journeys in the form of posts and comments. This app also includes a chat feature for making friends and seeking travel advice, fostering a vibrant community of explorers, connecting everyone from anywhere, transforming solo adventures into shared experiences.",
    technologies: [
      { title: "MongoDB", icon: "SiMongodb" },
      { title: "Express.js", icon: "SiExpress" },
      { title: "React", icon: "SiReact" },
      { title: "NodeJS", icon: "SiNodedotjs" },
      { title: "HTML", icon: "SiHtml5" },
      { title: "CSS", icon: "SiCss3" },
      { title: "Material UI", icon: "SiMui" },
      { title: "Axios", icon: "SiAxios" },
      { title: "Amazon S3 Buckets", icon: "SiAmazons3" },
      { title: "Socket.io", icon: "SiSocketdotio" },
      { title: "JWT", icon: "SiJsonwebtokens" },
      { title: "Google Places API", icon: "SiGooglemaps" },
      { title: "Multer", icon: "" },
      { title: "DiceBear API", icon: "" },
    ],
    liveSite: "https://adventur-chats-fef2b7b95dbc.herokuapp.com/",
    github: "https://github.com/jabbacalvin/adventur-chats",
    staticImage: img5,
    gifImage: gif5,
  },
];

const experienceList = [
  {
    id: 0,
    company: "",
    links: {
      website: "",
      facebook: "",
      instagram: "",
    },
  },
  {
    id: 1,
    company: "",
    links: {
      instagram: "",
    },
  },
];

export { skillsList, projectList, experienceList };
