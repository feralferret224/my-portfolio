import React from 'react';
import './Development.css';
import { NavLink } from "react-router-dom";
import site from './img/site.png';


function Development() {
    return (
        <div className='Development'>
            <div id="top_header" className='container-sm intro'>
                <ul class="nav justify-content-end justify-items-end">
                <li className='nav-item'>
                    <NavLink className="nav-link active" style={{textDecoration: 'none'}} to="/my-portfolio/#Projects">
                        projects
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className="nav-link active" style={{textDecoration: 'none'}} to="/my-portfolio/#Work">
                        work
                    </NavLink>            
                </li>
                <li className='nav-item'>
                    <NavLink className="nav-link active" style={{textDecoration: 'none'}} to="/my-portfolio/#About">
                        about
                    </NavLink>            
                </li>
                </ul>
            </div>
            <div className="container-sm text-left intro" >
                <div className="row justify-content-md-center">
                    <h1>Development</h1>
                </div>
                <h5 className="mt-2">Creating an interactive prototype in React</h5> 
                <ul class="nav justify-content-start justify-items-start mx-auto">
                <li class="nav-item">
                  <a class="nav-link active" href="#project-background">Project Background</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#prototype">React Prototype</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#reflection">Design Process</a>
                </li>
              </ul>
            </div>
            
            <div class="container-sm mt-5">
            <div className='background'>
                <h2 class="mt-5" id="goals">Goals</h2>
                <p>The goal of this project was to become more comfortable using React. I had prior react experience, so I focused on refining my techinques for organizing components and allocating props.</p>
            </div>
                <div id="project-background">
                    <h3 className="mt-5" id="goal-and-value-of-the-application">Value of the Application</h3>
                    <p>This is a simple application used to buy clothes from the retailer Fashion Haus. Users can sort, filter, and add/remove items from their cart. They can filter by style and color, and they can sort by rating and price.</p>
                </div>

                <div className="mt-5 intro" id="prototype">
                    <h2>React Prototype</h2>
                    <div className="mt-4">
                        <p>This is my complete protoype, which I built out using React and hosted via GitHub Pages.</p>
                        <h3>Preview</h3>
                        <img src={site} className="img-fluid" alt="site"/>
                         <nav class="navbar-expand-sm left mt-5" id="navbar">
                                <ul class="navbar-nav mx-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="https://feralferret224.github.io/development/">Visit the prototype</a>
                                </li>
                                </ul>
                        </nav>
                    </div>
                </div>

            <div className="mt-5" id="reflection">
                <h2>Design Process</h2>
                <h3 className='mt-5' id="usability-principles-considered">Usability Principles Considered</h3>
                <p>To account for memorability, I opted to use labels in lieu of symbols in many places. Additionally, I used a layout that is common on many marketplace websites, which feature the filters and sort options on the lefthand side of the page. With regard to error prevention, I disabled the remove button when it should be impossible to remove an item from the cart to prevent a negative balance.</p>
                <h3 id="organization-of-components">Organization of Components</h3>
                <p>The App component is the primary component. It contains the sort, filter, and cart functionality. The App component also contains the StoreGrid component, which organizes the item cards into a grid. Each item card is a StoreItem component. Additionally, the items in the cart are CartItem components.</p>
                <h3 id="how-data-is-passed-down-through-components">How Data is Passed Down Through Components</h3>
                <p>The App component contains the add and remove functions, as well as the item and cart data. The add and remove functions and the item and cart data are passed to the StoreGrid, which passes them to the StoreItems. The StoreItem uses the item data to populate the item card, and uses the functions and cart data to give the item card&#39;s add and remove buttons correct functionality based on the amount of the item in the cart. The App component also passes the cart information to the CartItem components, and the CartItem components use the data to populate correctly.</p>
                <h3 id="how-the-user-triggers-state-changes">How the User Triggers State Changes</h3>
                <p>The user triggers state changes using state variables, useEffect hooks, and the passing of props to components. The cart is controlled by a state variable, and when there is an item added to the cart, the CartItems are rerendered. Additionally, the card of the item that&#39;s be added to the cart is rerendered depending on the cart contents as well. The metric the user is sorting by is also a state variable, and when it's changed, it rerenders the order of the item cards.</p>
            </div>
            <div className='conclusion'>
                <h2 class="mt-5" id="goals">Lessons</h2>
                <p>I gained good React experience over the course of this project. I found that I had to hone my instincts regarding when a piece of the layout's structure should become a component, so I focused on both that and making sure that I could send properties back and forth between components in a logical manner.</p>
             </div>
        
        
        


        </div>  
            <nav class="navbar intro navbar-expand-sm center mt-5" id="navbar">
            <div class="container-fluid">
                <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                    <a class="nav-link active" href="#top_header">Back to Top</a>
                </li>
                </ul>
            </div>
        </nav>
    </div>

    );
}

export default Development;
