import logo from './logo.svg';
import './Home.css';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Work from './components/work/Work';


import ReactDOM from "react-dom/client";
import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import Redesign from "./components/projects/redesign/Redesign";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
import NoPage from "./components/no-page/NoPage";
import About from './components/about/About';

import redesign from './components/projects/redesign/img/redesign.png';
import development from './components/projects/development/img/site.png';
import persona from './components/projects/redesign/img/storyboard.png';
import iterative from './components/projects/iterative/PNG-sketches/iterative.png';

const proj2 = {
  name: "Reactive Redesign",
  // projImg: {redesign},
  projImg: "https://i.ibb.co/jTqVXR1/redesign.png",
  blurb: "I chose to redesign this website because it's the website for the satire newspaper of my university, and I spend a fair amount of time on it. My design is tailored to be more reactive and readable than the original site.",
  tools: "Figma, HTML/CSS/JS"
}

const proj1 = {
  name: "Personas & Storyboarding",
  // projImg: {persona},
  projImg: "https://i.ibb.co/0fSV9BG/storyboard.png",
  blurb: "This was my first dive into storyboards and personas. I observed and analysed user behavior at my local boba shop. I then created user experience maps, and a storyboard.",
  tools: "Balsamiq, Figma"
}

const proj3 = {
  name: "Iterative Design",
  projImg: "https://i.ibb.co/LP5BrMf/iterative.png",
  blurb: "I followed the design process of empathize, define, ideate, protoype, and evaluate. My team created a prototype for a service that connects wholesale vendors with restauranteurs, and then had our prototype user-tested.",
  tools: "Figma, User Testing"
}

const proj4 = {
  name: "Development",
  projImg: "https://i.ibb.co/BVx80MR/site.png",
  blurb: "I prototyped a functional marketplace in React. The prototype includes two filters, as well as sort functionality. Additionally, I implemented a shopping cart. Data can be uploaded via JSON, simplifying adding and removing items from the store.",
  tools: "React, HTML/CSS"
}

const projsList = [proj1, proj2, proj3, proj4]

export default function Home() {
  return (
    <div className="Home">
      <Header></Header>
      <Projects projs={projsList}></Projects>
      <Work></Work>
      <About></About>
      {/* <Outlet /> */}
    </div>
  );
}
