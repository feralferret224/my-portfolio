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
            <NavLink style={{textDecoration: 'none'}} to="/redesign">
              <Item project={projs[0]}></Item>
            </NavLink>
          </div>
          <div className='col'>
            <NavLink style={{textDecoration: 'none'}} to="/personas">
              <Item project={projs[1]}></Item>
            </NavLink>
          </div>
          <div className='col'>
            <NavLink style={{textDecoration: 'none'}} to="/iterative">
              <Item project={projs[2]}></Item>
            </NavLink>
          </div>
          <div className='col'>
            <NavLink style={{textDecoration: 'none'}} to="/development">
              <Item project={projs[3]}></Item>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
