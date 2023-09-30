import React from 'react';
import "../../../App.css";
import "./leftwebs.css";

interface website {
  name: string;
  url: string;
  image: string;
}

const websiteData: website[] = [
  {
    name: "FindTrend",
    url: "https://findtrend.pages.dev/",
    image: require("../../../images/findtrend.PNG"),
  },
  {
    name: "Product Preview Card",
    url: "https://product-preview-card-eu4.pages.dev/",
    image: require("../../../images/product.PNG"),
  },
  {
    name: "Single Page Web",
    url: "https://single-page-web.pages.dev/",
    image: require("../../../images/single-page.PNG"),
  },
  {
    name: "Boldo",
    url: "https://boldo.pages.dev/",
    image: require("../../../images/boldo.PNG"),
  },
  {
    name: "Chat App",
    url: "https://chat-web-czt.pages.dev/",
    image: require("../../../images/chat-app.PNG"),
  },
  {
    name: "Colloseum Gym",
    url: "http://colloseumgymtbilisi.ge/",
    image: require("../../../images/colloseum.PNG"),
  },
  {
    name: "Grill Company",
    url: "https://company-name.pages.dev/",
    image: require("../../../images/grill.PNG"),
  },
  {
    name: "Pig Game",
    url: "https://pig-game-9vs.pages.dev/",
    image: require("../../../images/Pig-game.PNG"),
  },
  {
    name: "Fitness App",
    url: "https://fitness-react-typescript-tailwind.pages.dev/",
    image: require("../../../images/fitness-react-typscript-tailwind.PNG"),
  },
];

const BottomWebs:React.FC = () => {
  return (
    <div className="webs row">
      {websiteData.map((website, index) => (
        <a key={index} href={website.url} target="_blank" >
          <img src={website.image} alt={website.name} />
        </a>
      ))}
    </div>
  );
};

export default BottomWebs;
