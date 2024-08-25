export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 lg:row-span-2 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 lg:row-span-1 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 lg:row-span-1 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Full-Stack Booking App",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Insta-Clone",
    des: "Instagram Clone using NEXTJS, Firebase",
    img: "/DiscordProject.svg",
    iconLists: ["/js.svg", "/djs.svg"],
    link: "https://github.com/roob88257/Insta-clone",
  },
  {
    id: 2,
    title: "Chatter",
    des: "Using WebRTC to connect users in chatroom so that they can chat with each other",
    img: "/ContactManager.svg",
    iconLists: ["/js.svg", "/nodejs.svg", "/expressjs.svg" , "/mongodb.svg"],
    link: "https://github.com/roob88257/chatttt-main",
  },
  {
    id: 3,
    title: "Foody Kitchen",
    des: "A web Application which facilitates users to search the food item by the ingredients involved,and after that you can find its recipe as well as the youtube link for that dish",
    img: "/sorting.svg",
    iconLists: ["/html-icon.svg","/w3_css-icon.svg", "/js.svg"],
    link: "https://github.com/roob88257/Foody-Kitchen",
  },
  {
    id: 4,
    title: "Weatherer",
    des: "A web application which facilitates users to check out the weather of any place.",
    img: "/LameTime.svg",
    iconLists: ["/html-icon.svg","/w3_css-icon.svg", "/js.svg"],
    link: "https://github.com/roob88257/WeatheRER",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Tushar during his internship at Barclays was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Tushar's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your team's capabilities and drive impactful outcomes, Tushar is the ideal partner.",
    name: "Nitish Mishra",
    title: "Vice President at Barclays",
    img: "/ramesh.svg",
  },
  {
    quote:
      "Working with Tushar during his internship at Barclays was a great experience. His discipline, quick response time, and commitment to excellence were impressive. Tushar's passion for development shone through in all his tasks. If you need someone to boost your project and bring fresh ideas, Tushar is the person to work with.",
    name: "Ankit Bansal",
    title: "Assistant Vice President at Barclays",
    img: "/pranay.svg",
  },
  {
    quote:
      "As the Public Relations Head for the sports fest of IIT (ISM ) Dhanbad , Tushar has shown exceptional managerial skills by organizing the Musical Night and hosting DJ Aerreo. I personally vouch for his skills and determination to do the assigned work with utmost sincerity and bring the best results.",
    name: "Prof ACS Rao",
    title: "Convenor , PARAKRAM'24",
    img: "/acs.svg",
  },
  {
    quote:
      "Working on our group project with Tushar in college was an absolute delight. His expertise in web development field , reliability, and dedication to producing outstanding results were evident throughout our collaboration. If you're looking to enhance your team dynamics and achieve remarkable outcomes, Tushar is the perfect teammate.",
    name: "Rounak Raj",
    title: "Software Developer at Barclays",
    img: "/shivam.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloud",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "hostinger",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Barclays - Technology Intern",
    desc: [" Utilized JavaScript and C# to work on hedge management project. Wrote APIs to implement effectiveness test feature and used React based Barclays UI component library for creating UI ." ],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  // {
  //   id: 2,
  //   title: "Mobile App Dev - JSM Tech",
  //   desc: ["Designed and developed mobile app for both iOS & Android platforms using React Native."],
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp2.svg",
  // },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/roob88257",
  },
  {
    id: 2,
    img: "/twit.svg",
    link:"https://x.com/RajTraj88257",
  },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/tushar-raj-33b64a1b0",
  },
];