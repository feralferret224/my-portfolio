import logo from './logo.svg';
import './Home.css';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Work from './components/work/Work';
import Home from './Home';
import Redesign from './components/projects/redesign/Redesign';
import Personas from './components/projects/personas/Personas';
import Iterative from './components/projects/iterative/Iterative';

// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Development from './components/projects/development/Development';
// import Projects from "./components/projects";
// import Redesign from "./components/projects/";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

// import React from "react";
// import ReactDOM from "react-dom";
// import { withStyles } from "@material-ui/core/styles";
// import Avatar from "@material-ui/core/Avatar";
// import Card from "@material-ui/core/Card";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import Divider from "@material-ui/core/Divider";
// import Typography from "@material-ui/core/Typography";

const proj1 = {
  name: "Reactive Redesign",
  link: 'https://feralferret224.github.io/assign2-main/',
  blurb: "I chose to redesign this website because it's the website for the satire newspaper of my university, and I spend a fair amount of time on it."
}

const proj2 = {
  name: "Not Reactive Redesign",
  link: 'https://feralferret224.github.io/assign2-main/',
  blurb: "I chose to redesign this website because it's the website for the satire newspaper of my university, and I spend a fair amount of time on it."
}

const proj3 = {
  name: "Reactive Redesign",
  link: 'https://feralferret224.github.io/assign2-main/',
  blurb: "I chose to redesign this website because it's the website for the satire newspaper of my university, and I spend a fair amount of time on it."
}

const projsList = [proj1, proj2, proj3]

export default function App() {
  return (
    <div className="App">
      {/* <Header></Header>
      <Projects projs={projsList}></Projects>
      <Work></Work> */}
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/redesign" element={<Redesign />} />
            <Route path="/personas" element={<Personas />} />
            <Route path="/iterative" element={<Iterative />} />
            <Route path="/development" element={<Development />} />
            {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}