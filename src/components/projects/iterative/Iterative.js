import React from 'react';
import './Iterative.css';
import { NavLink } from "react-router-dom";
import onethree from './PNG-sketches/1.3.png';
import oneone from './PNG-sketches/1.1.png';
import onetwo from './PNG-sketches/1.2.png';
import onefour from './PNG-sketches/1.4.png';
import twoone from './PNG-sketches/2.1.png';
import twotwo from './PNG-sketches/2.2.png';
import twothree from './PNG-sketches/2.3.png';
import twofour from './PNG-sketches/2.4.png';
import threethree from './PNG-sketches/3.3.png';
import threeone from './PNG-sketches/3.1.png';
import threetwo from './PNG-sketches/3.2.png';
import threefour from './PNG-sketches/3.4.png';
import fourone from './PNG-sketches/4.1.png';
import fourtwo from './PNG-sketches/4.2.png';
import fourthree from './PNG-sketches/4.3.png';
import fourfour from './PNG-sketches/4.4.png';


function Iterative() {
    return (
        <div className='Iterative'>
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
                    <h1>Iterative Design</h1>
                </div>
                <h5 className="mt-2">Prototyping a website from the ground up for a start-up</h5> 
                <ul class="nav justify-content-start justify-items-start mx-auto">
                <li class="nav-item">
                  <a class="nav-link active" href="#initial-wireframing">Initial Sketches</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#lofi-prototype">Lo-Fi Wireframe</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#mockup">Hi-Fi Prototype</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#user-testing">User Testing</a>
                </li>
              </ul>
            </div>
            
            <div class="container-sm mt-5">
                <div id="intro">
                <div className='background'>
                    <h2 class="mt-5" id="goals">Goals</h2>
                    <p> The purpose of this project is to get experience prototyping a website from the ground up for a start-up, keeping in mind the start-up's goals and motivations. I worked in a small team to design and test our proposed idea. This process also included critique sessions and user tests to create and iteratively improve the prototype with audience considerations in mind.</p>
                </div>
                <div className="mt-5" id="start-up-intro">
                    <h2>Start-up and Pre-design Definition</h2>
                    <p> Our startup is <b>Pantore</b>, a Brazilian based company which aims to connect wholesale and bulk food vendors to restaurants. The users affected by our interface would likely be restaurant managers / anyone looking to buy food in bulk because the buying process will be simplified, and they will not need to negotiate with sellers since Pantore does that on their behalf. Bulk food sellers are also impacted because they now have a consolidated customer base in the Pantore users, and they can do less work seeking out customers.</p>
                </div>
                </div>

                <div className="mt-5" id="initial-wireframing">
                    <h2>Ideation and Initial Sketches</h2>
                    <p className='mt-4'>My team and I sketched four possible designs for the Pantore website, which we then iterated on to select the features we thought were best for the business's use case.</p>
                    <div class="sketch-a">
                        <h3>Sketch One</h3>
                        <div class="row">
                            <img src={onethree}/>
                            <img src={oneone}/>
                        </div>
                        <div class="row">
                            <img src={onetwo}/>
                            <img src={onefour}/>
                        </div>
                    </div>
                    
                    <div class="sketch-b">
                        <h3>Sketch Two</h3>
                        <div class="row">
                            <img src={twoone}/>
                            <img src={twotwo}/>
                        </div>
                        <div class="row">
                            <img src={twothree}/>
                            <img src={twofour}/>
                        </div>
                    </div>
        
                    <div class="sketch-a">
                        <h3>Sketch Three</h3>
                        <div class="row">
                            <img src={threetwo}/>
                            <img src={threeone}/>
                        </div>
                        <div class="row">
                            <img src={threethree}/>
                            <img src={threefour}/>
                        </div>
                    </div>
                    
                    <div class="sketch-b">
                        <h3>Sketch Four</h3>
                        <div class="row">
                            <img src={fourtwo}/>
                            <img src={fourone}/>
                        </div>
                        <div class="row">
                            <img src={fourthree}/>
                            <img src={fourfour}/>
                        </div>
                    </div>
                    
                    <div className="mt-5" id="lofi-prototype">
                    <h2>Prototyping</h2>
                        <h3 className='mt-5'>Wireframing</h3>
                        <p className="mt-3">
                            For our prototype, we ultimately decided to go with a site on which users can open a generic account, and can open stores or make orders for their store from this account. This way users have flexibility as to whether they want to be a buyer or seller (or both). Also, sellers can become familiar with the interface through which buyers are going to peruse their products.
                            <br></br>
                            <br></br>
                            The rest of the site operates like many current buying-selling websites, with a marketplace landing page and an ability to go to specific stores, see more info about iterms, see your order history, and maintain a cart.
                        </p>
                        <iframe height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FMwJpph9p2yKWwtClrHJqlM%2FIterative-Design%253A-Shared%3Fnode-id%3D3%253A4" allowfullscreen></iframe>
                    </div>
                </div>
    <div className="mt-5" id="mockup">
        <h3>Hifi Mockup</h3>
        <div id="hifi-mockup ">
            <p className="mt-3">We chose to use orange as our accent color, with slightly different shades to delineate different sections or group things together. We used with sans serif fonts to improve readability. We used the font Alata for headers and Inter for everything else to make it clear what was navigational info and what was item or store info.                     We used a green icon to represent adding things to the cart, since both green and a plus sign are things users traditionally represent with that action.</p>
            <iframe width="500" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FMwJpph9p2yKWwtClrHJqlM%2FIterative-Design%253A-Shared%3Fpage-id%3D3%253A6%26node-id%3D29%253A582%26viewport%3D25%252C270%252C0.11%26scaling%3Dscale-down%26starting-point-node-id%3D29%253A582" allowfullscreen></iframe>
            <h3 className="mt-5">Critique Feedback</h3>
            <p className="mt-3"> We had a crtique formed on our initial design. The feedback we obtained was very useful in determining how the prototype could be improved. We received feedback on the following aspects of the prototype:
                <ol class="list-group list-group-flush list-group-numbered">
                    <li className='list-group-item'><b>The notch at the top of the laptop in the prototype would cover a portion of the header.</b> To address this, we increased the padding at the top of the navbar.</li>
                    <li className='list-group-item'><b>The order boxes in the Past Orders page had a plus icon on it, which users were confused about.</b> We removed the plus icon.</li>
                    <li className='list-group-item'><b>In the Checkout page, people were unsure about whether the prices displayed for an product were per item or overall.</b> We added this column to our cart page to make this clearer.</li>
                    <li className='list-group-item'><b>In the Checkout page, the frequency of the order being placed was difficult to find.</b> We created a separate section for frequency and cart name and moved it to a more prominent location.</li>
                    <li className='list-group-item'><b>The pages for the buyer and the vendor were too similar and would confuse the user.</b> We added a notice at the top of the vendor page indicating that they were viewing their own store.</li>
                    <li className='list-group-item'><b>Users were unsure how to add products, vendors, or orders to their favorites.</b> We added an explicit "Save Cart" option to the checkout page. We also created an unsaved and saved state for the star icon.</li>
                </ol>
            </p>
            
        </div>
    </div>
    <div className="mt-5 intro" id="user-testing">
        <h2>User Testing</h2>
        <p className='mt-4'>Here are the videos of our user testing sessions. We had three users test our prototype, and we asked them to complete a series of tasks. We also asked them to think aloud as they completed the tasks. We also asked them to give us feedback on the prototype and the tasks they were asked to complete.</p>
        
        <div id="user-videos">
            <div className='row'>
                <div className='col-sm'>
                    <h3 className="mt-3">User One</h3>
                    <iframe src="https://drive.google.com/file/d/1UgUSeOk2O_nyTf_D7RNnzAAx1wtDB8BV/preview" class="video-embed" allow="autoplay"></iframe>
                </div>
                <div className='col-sm'>
                    <h3 className="mt-3">User Two</h3>
                    <iframe src="https://drive.google.com/file/d/1hpDLAQZhaFAMbaW_-RPzw5GSXkuKpb2v/preview" class="video-embed" allow="autoplay"></iframe>
                </div>
                <div className='col-sm'>
                    <h3 className="mt-3">User Three</h3>
                    <iframe src="https://drive.google.com/file/d/1Xj0Fgm-vtesCgDmopJEuDUB0ZVi_DZ3Q/preview" class="video-embed" allow="autoplay"></iframe>
                </div>
            </div>
        </div>
        
        <h2 className="mt-5" id="testing-analysis">User Testing Analysis</h2>
        <h4 className='mt-4'>Task Summary</h4>
        <p>Our goal was to have testers emulate the checkout process, and we defined our subtasks to comprehensively guide them through the process without leading them in a way that would interfere with their intuition. 
        <br></br>
        <br></br>
        We asked that testers first familiarize themselves with the website and visit useful pages, such as the My Favorites and Order History pages. Then, we asked that they put specific quantities of items from a single vendor in their cart. Next, we asked them to add an item to the cart from a separate vendor, which, due to the flow of our prototype, required them to follow a slightly different process. Lastly, we asked the testers to save the cart with a specific name and frequency and to then check out. 
        </p>
        <h4>Frequent Errors</h4>
        <ol class="list-group list-group-flush list-group-numbered">
            <li className='list-group-item'>
                The most frequent issue we faced was confusion about using a prototype. Though we included a disclaimer in our instructions, some testers were confused that not all buttons were clickable.
            </li>
            <li className='list-group-item'>
                There was also difficulty due to buttons not being responsive, making it difficult for testers to tell if they had successfully completed the task.
            </li>
            <li className='list-group-item'>
                Some testers noted that they were having time locating the specific vendor we asked them to. They noted that this issue could have been resolved with a working search bar, which would be implemented in a full website.

            </li>
        </ol>
        <h2 className="mt-5">General Testing Conclusions</h2>
        <p className='mt-4'>In general, testers were able to accurately navigate through the steps using their intuition. Due to the nature of the prototype, testers were not always able to tell if they had successfully completed a click. Despite this, each tester accurately followed the checkout process, and they all successfully completed the subtasks. This result was generally in line with our expectations given that the flow of the page mimics common food ordering pages.</p>
        <h4>Potential Changes</h4>
        <p>Following feedback from the testers, we would implement the following changes:</p>
        <ol class="list-group list-group-flush list-group-numbered">
            <li className='list-group-item'>
                Include a “past vendors” carousel on the landing page to highlight vendors the user has purchased from before. Testers recommended this in order to make it easier to find vendors they had made previous purchases from.
            </li>
            <li className='list-group-item'>
                Move the favorites, order history, and profile settings to the profile menu. Testers leveraged the order history page, and this would consolidate the navigation bar and raise the order history page within the overall page hierarchy.
            </li>
            <li className='list-group-item'>
                Provide more distinction between the vendor and buyer functions of the website by creating two separate website layouts depending on the type of user. Some testers noted a possible conflation between vendor and buyer capabilities.
            </li>
        </ol>
    </div>
    <div className='conclusion'>
        <h2 class="mt-5" id="goals">Takeaways</h2>
        <p>This was my first time following the design process, and it was interesting to see how ideas can be improved upon with further iterations. The critique and user testing were both helpful because they highlighted issues that weren't immediately apparent to my team. In the future, I'll continue to focus on user empathy and to seek outside opinions on my designs.</p>
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

export default Iterative;
