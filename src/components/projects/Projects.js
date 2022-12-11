import Item from '../item/Item.js';
import './Projects.css';
import Redesign from './redesign/Redesign.js';


import { Outlet, NavLink } from "react-router-dom";

function Projects({projs}) {
  return (
    <div id="Projects">
      <div className="container-sm">
        <h1 className='d-flex justify-contents-start'>Projects</h1>
        <div className='row justify-content-between intro'>
          <div className='col'>
            <NavLink style={{textDecoration: 'none'}} to="/my-portfolio/redesign">
              <Item project={projs[0]}></Item>
            </NavLink>
          </div>
          <div className='col'>
            <NavLink style={{textDecoration: 'none'}} to="/my-portfolio/personas">
              <Item project={projs[1]}></Item>
            </NavLink>
          </div>
          <div className='col'>
            <NavLink style={{textDecoration: 'none'}} to="/my-portfolio/iterative">
              <Item project={projs[2]}></Item>
            </NavLink>
          </div>
          <div className='col'>
            <NavLink style={{textDecoration: 'none'}} to="/my-portfolio/development">
              <Item project={projs[3]}></Item>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
