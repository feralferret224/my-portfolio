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
  name: "Personas & Storyboarding",
  link: 'https://feralferret224.github.io/assign2-main/',
  blurb: "This was my first dive into storyboards and personas. I researched user behavior at my local boba shop to determine how users interacted with the ordering kiosk."
}

const proj3 = {
  name: "Iterative Design",
  link: 'https://feralferret224.github.io/assign2-main/',
  blurb: "I went through the design process to produce a high fidelity prototype for a product."
}

const proj4 = {
  name: "Development",
  link: 'https://feralferret224.github.io/assign2-main/',
  blurb: "I prototyped a functional marketplace in React"
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
