import { BioData, Services } from "../interface";

export const bioInfo: BioData = {
  name: "KAVUMA HERBERT",
  address: "Kampala Uganda",
  dob: "15-11-1991",
  linkedin:
    '<a target="_blank" href="https://www.linkedin.com/in/kavuma-herbert-559496111/">My linkedIn profile</a>',

  phone: "+256703752696 / +256779159642",
  website: '<a href="https://herbert.netbritz.com">herbert.netbritz.com</a>',
  github:
    '<a target="blank" href="https://github.com/herberthk">https://github.com/herberthk</a>',
};

export const description = `I'm a self-taught full-stack software engineer from the
Accounting profession with 5+ years of experience in developing web
applications both on client and server in a variety of domains and
tech stacks. My most vital skills are in Typescript, Node.js, and
React.js. Other skills include SQL, MongoDB, Graphql, Nextjs,
Firebase, RDS, S3, Lambda, Netlify, and PHP. I can also work with
cloud providers like AWS, Digital Ocean, and Linode. I can also
deploy and manage docker containers on Kubernetes clusters using
Kubernetes tools like ArgoCD and other CI/ CD pipelines. I have
significant experience working in startups and fast-moving teams
with a fixed deadline`;

// Services section
export const services: Services[] = [
  {
    id: "1",
    desc: ` I can design and develop beautiful responsive user interfaces
of both the web and mobile with cool CSS3 animations and
transitions, with or wihout CSS3 frameworks.`,
    icon: `fab fa-css3-alt fa-2x`,
    tile: ` UI/Web design`,
  },
  {
    id: "2",
    desc: `Am proficient with vanilla JavaScript and Core ES6, ES7, ES7 features. Reactjs with its full ecosystem including Redux and Apollo client and recent features including hooks.`,
    icon: `fab fa-js-square fa-2x`,
    tile: `JavaScript`,
  },
  {
    id: "3",
    desc: `I can develop any kind of web application using Express js or RESTIFY js or Apollo server with passport authentication, and micro-services with JWT authentication. Using MYSQL, PostgreSQL or MongoDb as my database servers`,
    icon: `fab fa-node fa-2x`,
    tile: `Nodejs`,
  },
  {
    id: "4",
    desc: `I can write optimized and secure Restiful API with PHP slim frame with JWT authentication, I can also write enterprise level optimized web application using Laravel framework with all its eco-system with MYSQL, PostgreSQL or MongoDb as my database servers.`,
    icon: `fab fa-php fa-2x`,
    tile: `PHP`,
  },
];

// Object.entries(bioInfo).map(([keys, values]) => {
//   console.log(keys);
//   console.log(values);
// });
