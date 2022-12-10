import React from 'react';
import './Development.css';
import { NavLink } from "react-router-dom";

function Development() {
    return (
        <div className='Development'>
            <div className='container-sm intro'>
                <ul class="nav justify-content-end justify-items-end">
                <li>
                    <NavLink style={{textDecoration: 'none'}} to="/#Projects">
                        <a class="nav-link active" href="">projects</a>
                    </NavLink>
                </li>
                <li >
                    <NavLink style={{textDecoration: 'none'}} to="/#Work">
                        <a class="nav-link active" href="">work</a>
                    </NavLink>            
                </li>
                <li >
                    <NavLink style={{textDecoration: 'none'}} to="/#About">
                        <a class="nav-link active" href="">about</a>
                    </NavLink>            
                </li>
                </ul>
            </div>
            <div className="container-sm text-left intro" id="top_header">
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
                  <a class="nav-link active" href="#reflection">Reflection</a>
                </li>
              </ul>
            </div>
            
            <div class="container-sm mt-5">
                <div id="project-background">
                    <h3>Project Background</h3>
                    <p> The purpose of this project is to get experience prototyping a website from the ground up for a start-up, keeping in mind the start-up's goals and motivations. This process also included critique sessions and user tests to create an Developmently improve the prototype with audience considerations in mind.</p>
                    <h3 id="goal-and-value-of-the-application">Goal and Value of the Application</h3>
                    <p>This is a simple application used to buy clothes from the retailer Fashion Haus. Users can sort, filter, and add/remove items from their cart. They can filter by style and color, and they can sort by rating and price.</p>
                </div>

                <div className="mt-5 intro" id="prototype">
                    <h2>React Prototype</h2>
                    <div className="mt-5">
                        {/* <h3>Wireframing</h3>
                        <p>
                            <b>Design Choices:</b> This is our lo-fi prototype! Ultimately we decided to go with a site on which users can open a generic account, and can open stores or make orders for their store from this account. This way users have flexibility as to whether they want to be a buyer or seller (or both). Also, sellers can become familiar with the interface through which buyers are going to peruse their products.
                            <br></br>
                            <br></br>
                            The rest of the site operates like many current buying-selling websites, with a marketplace landing page and an ability to go to specific stores, see more info about iterms, see your order history, and maintain a cart.
                        </p> */}
                        <h3>Preview</h3>
                        <iframe height="450" src="https://feralferret224.github.io/development/" allowfullscreen></iframe>
                        <h3 className='mt-3'><a href="https://feralferret224.github.io/development/">Visit the prototype</a></h3>
                    </div>
                </div>

            <div className="mt-5" id="reflection">
                <h2>Reflection</h2>
                <h3 className='mt-5' id="usability-principles-considered">Usability Principles Considered</h3>
                <p>To account for memorability, I opted to use labels in lieu of symbols in many places. Additionally, I used a layout that is common on many marketplace websites, which feature the filters and sort options on the lefthand side of the page. With regard to error prevention, I disabled the remove button when it should be impossible to remove an item from the cart to prevent a negative balance.</p>
                <h3 id="organization-of-components">Organization of Components</h3>
                <p>The App component is the primary component. It contains the sort, filter, and cart functionality. The App component also contains the StoreGrid component, which organizes the item cards into a grid. Each item card is a StoreItem component. Additionally, the items in the cart are CartItem components.</p>
                <h3 id="how-data-is-passed-down-through-components">How Data is Passed Down Through Components</h3>
                <p>The App component contains the add and remove functions, as well as the item and cart data. The add and remove functions and the item and cart data are passed to the StoreGrid, which passes them to the StoreItems. The StoreItem uses the item data to populate the item card, and uses the functions and cart data to give the item card&#39;s add and remove buttons correct functionality based on the amount of the item in the cart. The App component also passes the cart information to the CartItem components, and the CartItem components use the data to populate correctly.</p>
                <h3 id="how-the-user-triggers-state-changes">How the User Triggers State Changes</h3>
                <p>The user triggers state changes using state variables, useEffect hooks, and the passing of props to components. The cart is controlled by a state variable, and when there is an item added to the cart, the CartItems are rerendered. Additionally, the card of the item that&#39;s be added to the cart is rerendered depending on the cart contents as well. The metric the user is sorting by is also a state variable, and when it's changed, it rerenders the order of the item cards.</p>
            </div>
    
        
        
        


        </div>  
            <nav class="navbar navbar-expand-sm center mt-5" id="navbar">
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
