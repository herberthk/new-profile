interface Projects {
  name: string;
  desc: string;
  url: string;
  imageUrl: string;
  id: string;
}

export const projects: Projects[] = [
  {
    id: "1",
    name: "Finance manager",
    desc: "This software aims to minimize the complexity of book keeping by providing automated generation of financial statements like business journals, ledgers, Trial balance, statement of financial position (income statement), Income statement, cashbooks, balance sheet,and payroll reports basing on data of the company provided through our easy to use user interface",
    imageUrl: "/images/fm.jpg",
    url: "https://financemanager.netbritz.com/",
  },
  {
    id: "2",
    name: "Netbritz",
    desc: "Netbritz is the new social media and social networking internet service that provides modern, efficient and easy way to share with the world. Share photos, text, videos, emoji Gifs with your loved ones. Create photo albums to organise your photos. Follow your Preferred topics with hashtag and alot more. ",
    imageUrl: "/images/nb.jpg",
    url: "https://netbritz.com/",
  },
  {
    id: "3",
    name: "Wakanda Great View Holidays",
    desc: "Wakanda Great View Holidays is an indigenously owned Ugandan tour company that looks forward to making your stay in Uganda and the East African region a memorable one. We do tailor made safaris to ensure that we capture the best experiences while on your Trip. We offer tour and travel consultations to enable you plan appropriately whenever you wish to come to the Pearl of Africa. We are professionals in the Tourism Industry and strive to achieve quality service for the satisfaction of our Clients.",
    imageUrl: "/images/waka.jpg",
    url: "https://wakandaviewholidays.com/",
  },
  {
    id: "4",
    name: "Ruptor",
    desc: "Ruptor is the google search clone that searches from wikipedia the term being searched for. Its written in vanilla javascript and SASS",
    imageUrl: "/images/rup.png",
    url: "https://kind-booth-be3587.netlify.app/",
  },
  {
    id: "5",
    name: "Calculator",
    desc: "This is the calculator that can perform nearly all basic calculations developed with the modern and advanced user interface. The technology stack includes Reactjs, sass, styled components, jest, React-testing-library, cypress and github actions for CI/CD pipeline.",
    imageUrl: "/images/calc.png",
    url: "https://calc-bce28.firebaseapp.com",
  },
  {
    id: "6",
    name: "Live chat",
    desc: "Live chat is the real time chat web application that supports private chat rooms developed using websockets. The technology stack used includes Reactjs, Redux, styled components, Typescript, socket.io, cypress, jest, React-testing-library on frontend, Nodejs, Typescript, jest for unit and integration testing, socket.io on the server side. Github actions for CI/CD pipeline.",
    imageUrl: "/images/chat.png",
    url: "https://live-chat-b4ffd.firebaseapp.com",
  },
];
