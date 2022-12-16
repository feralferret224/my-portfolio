import React from 'react';
import './Personas.css';
import { NavLink } from "react-router-dom";
import home from './img/Home Screen.png';
import ordering from './img/Ordering Screen.png';
import newbie from './img/NewbieNicole.png';
import regular from './img/RegularRandy.png';
import storyboard from './img/storyboard.png';


function Personas() {
    return (
        <div className='Personas'>
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
                    <h1>Personas and Storyboarding</h1>
                </div>
                <h5 className="mt-2">A study of the Tiger Sugar order kiosk interface</h5> 
                <ul class="nav justify-content-start justify-items-start mx-auto">
                <li class="nav-item">
                    <a class="nav-link active" href="#interface">My Interface</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#summaries">Interview Summaries</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#maps">Empathy Maps</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#storyboard">Storyboard</a>
                </li>
                </ul>
            </div>
            <div class="container-sm mt-5">
            <div class="row">
                <div class="col-md-auto">
                    <div className='background'>
                        <h2 class="mt-5" id="goals">Goals</h2>
                        <p>For this project, my goal was to develop a better understanding of user behavior, and to gain experience analyzing behavior. In order to do so, I observed user interactions with the ordering kiosk of my local boba shop, Tiger Sugar.</p>
                    </div>
                    <h2 class="mt-5" id="interface">Interface</h2>
                        <p className='mt-4'>This is the ordering kiosk at Tiger Sugar, a boba shop on Thayer St. It allows the user to order without speaking to the cashier, 
                            avoiding lines, and it displays photos of all the menu offerings, which the typical menu does not. The typical steps for ordering are
                            select a drink from the home page, customize the drink in the ordering page, select "checkout," enter your phone number for rewards and 
                            order updates, and complete the order by paying and adding a tip. 
                        </p>
                    <h5 class="mt-4">Sketches of the kiosk</h5>
                            <div class="row">
                                <div class="col-sm">
                                    <img src={home} class="img-fluid" alt="Responsive image"/>
                                    <p><i>The kiosk home screen</i></p>
                                </div>
                                <div class="col-sm">
                                    <img src={ordering} class="img-fluid" alt="Responsive image"/>
                                    <p><i>The kiosk ordering screen</i></p>
                                </div>
                            </div>
                        

                <h2 class="mt-5" id="summaries">Interview Summaries</h2>
                        <p className='mt-4'>After observing their use of the ordering kiosk, I conducted three interviews with different patrons.</p>
                        <h5 class="mt-2">Questions asked:</h5>
                        <ol class="list-group list-group-flush list-group-numbered">
                            <li class="list-group-item">Do you use meal ordering services like Doordash/Grubhub/Ubereats/Snackpass? If so, how often? </li>
                            <li class="list-group-item">Have you used this kiosk before?</li>
                            <li class="list-group-item">Have you used similar kiosks before?</li>
                            <li class="list-group-item">How often do you order from Tiger Sugar using the kiosk?</li>
                            <li class="list-group-item">Do you prefer ordering with the kiosk or the cashier? Why?</li>
                            <li class="list-group-item">Did you make you drink selection based on the promoted section?</li>
                            <li class="list-group-item">Do you have a regular boba order?</li>
                            <li class="list-group-item">How would you rate the process of finding and customizing your order on this interface?</li>
                            <li class="list-group-item">Were there more or fewer steps than you thought there would be? </li>
                            <li class="list-group-item">Do you believe that the rewards points step adds value or is annoying?</li>
                            <li class="list-group-item">Were there any parts of the process that were inconvenient?</li>
                        </ol>
                <h5 class="mt-4">Key findings:</h5>
                        <p>
                            I found that users of the Tiger Sugar ordering kiosk typically began the process in one of two ways: by <b>scrolling</b> through the homepage to
                            the category of drink they wanted, or by <b>searching</b> for their desired drink using the search bar. 
                        </p>
                        <p>
                            Users who had a <b>regular order</b> at Tiger Sugar typically spent <b>less time</b> on the homepage
                            and moved on to the ordering page more quickly, whereas <b>new users</b> who were unfamiliar with the ordering process took <b>more time</b> on the home page looking at drink options.
                        </p>
                        <p>
                            <b>Regular kiosk users</b> were also more inclined to <b>opt into</b> the Tiger Sugar rewards program, and they believed it added value. The <b>new users</b> instead saw
                            the rewards screen as <b>not valuable.</b>
                        </p>
                        <p>
                            <b>Both new and returning users</b> felt lke there were <b>more steps than necessary.</b> Returning users felt that there were more steps required to use
                            the kiosk rather than simply asking ther cashier for their order, and they didn't having to enter their phone number in. New users thought the rewards
                            screen was an unnecessary extra step.
                        </p>
                        <p>
                            <b>Returning users</b> felt that the customizations offered on the customization page were <b>not always consitent with their typical order</b>, and that some of the customization options
                            were contradictory or confusing. New users typically did not make as much use of the customization page (beyond allergen requirements) because they were less familiar with the drink they were ordering.
                        </p>
                    
                        <h2 class="mt-5" id="maps">Empathy Maps</h2>
                        <p className='mt-4'>Using the information I gathered from the user interviews, I developed two possible empathy maps, which highlight possible user experiences.</p>
                        <div class="row mt-3">
                            <div class="col-sm">
                                <h5>Newbie Nicole</h5>
                                <img src={newbie} class="img-fluid" alt="Responsive image"/>
                                <p className='mt-2'><strong class="emphasis">Newbie Nicole</strong> is a first time visiter at Tiger Sugar, and she doesn't drink bubble tea regularly. She approaches the kiosk because there's a line at the cashier,
                                    and because there are photos of the drinks on the kiosk and not on the menu behind the cashier. She takes her time and scrolls through the home page, which lists 
                                    different drinks, and is overwhelmed by the diffent options. She does not select customizations for her drink because she doesn't have preferences yet.
                                </p>
                            </div>
                            <div class="col-sm">
                                <h5>Regular Randy</h5>
                                <img src={regular} class="img-fluid" alt="Responsive image" />
                                    <p className='mt-2'> <strong class="emphasis">Regular Randy</strong> is a regular at Tiger Sugar, and he always orders the same thing. He usually orders with the cashier, but if there's a line, 
                                        he'll use the kiosk. He thinks that there are more steps than necessary on the kiosk, and that it's over complicated. He's trying to order his regular drink as quickly as possible, so he wants to move quickly thorugh
                                        the interface. He does appreciate the ability to collect reward points on the kiosk, which is not available at the cashier.
                                    </p>
                            </div>
                        </div>

                <h2 class="mt-5" id="storyboard">Storyboard</h2>
                    <p className='mt-4'>
                        I created a storyboard to outline a possible ordering experience for one of my potential users. I emphasized emotion and possible frustrations.
                    </p>
                <h5>Newbie Nicole goes to Tiger Sugar for the first time</h5>
                <img src={storyboard} class="img-fluid" alt="Responsive image" />
            </div>
            </div>
            <div className='conclusion'>
                        <h2 class="mt-5" id="goals">Takeaways</h2>
                        <p>I got insight into the importance of user testing during this project. Different users found different things confusing. This was empowering knowledge because it enabled me to better put myself in their place, and I was better able to create the Empathy Maps and Storyboards. With insight into user frustrations, I can design a more informed and improved experience.</p>
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

export default Personas;

{/*             
        <nav class="navbar navbar-expand-sm navbar-dark center" id="navbar">
            <div class="container-fluid">
                <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                    <a class="nav-link active" href="#interface">My Interface</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#summaries">Interview Summaries</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#maps">Empathy Maps</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#storyboard">Storyboard</a>
                </li>
                </ul>
            </div>
        </nav>

        <div class="container-md mt-5">
            <div class="row">
                <div class="col-md-auto">
                    <h2 id="interface">Interface</h2>
                    <h5>Sketches of the kiosk</h5>
                            <div class="row">
                                <div class="col-sm">
                                    <img src="img/Home Screen.png" class="img-fluid" alt="Responsive image"/>
                                    <p>The kiosk home screen</p>
                                </div>
                                <div class="col-sm">
                                    <img src="img/Ordering Screen.png" class="img-fluid" alt="Responsive image"/>
                                    <p>The kiosk ordering screen</p>
                                </div>
                            </div>
                        <p>This is the ordering kiosk at Tiger Sugar, a boba shop on Thayer St. It allows the user to order without speaking to the cashier, 
                            avoiding lines, and it displays photos of all the menu offerings, which the typical menu does not. The typical steps for ordering are
                            select a drink from the home page, customize the drink in the ordering page, select "checkout," enter your phone number for rewards and 
                            order updates, and complete the order by paying and adding a tip. 
                        </p>

                <h2 class="mt-5" id="summaries">Interview Summaries</h2>
                        <h5 class="mt-3">Questions asked:</h5>
                        <ol class="list-group list-group-flush list-group-numbered">
                            <li class="list-group-item">Do you use meal ordering services like Doordash/Grubhub/Ubereats/Snackpass? If so, how often? </li>
                            <li class="list-group-item">Have you used this kiosk before?</li>
                            <li class="list-group-item">Have you used similar kiosks before?</li>
                            <li class="list-group-item">How often do you order from Tiger Sugar using the kiosk?</li>
                            <li class="list-group-item">Do you prefer ordering with the kiosk or the cashier? Why?</li>
                            <li class="list-group-item">Did you make you drink selection based on the promoted section?</li>
                            <li class="list-group-item">Do you have a regular boba order?</li>
                            <li class="list-group-item">How would you rate the process of finding and customizing your order on this interface?</li>
                            <li class="list-group-item">Were there more or fewer steps than you thought there would be? </li>
                            <li class="list-group-item">Do you believe that the rewards points step adds value or is annoying?</li>
                            <li class="list-group-item">Were there any parts of the process that were inconvenient?</li>
                        </ol>
                <h5 class="mt-2">Key findings:</h5>
                        <p>
                            I found that users of the Tiger Sugar ordering kiosk typically began the process in one of two ways: by scrolling through the homepage to
                            the category of drink they wanted, or by searching for their specific drink. 
                        </p>
                        <p>
                            Users who had a regular order at Tiger Sugar typically spent less time on the homepage
                            and moved on to the ordering page more quickly, whereas new users who were unfamiliar with the ordering process took more time on the home page looking at drink options.
                        </p>
                        <p>
                            Regular kiosk users were also more inclined to opt into the Tiger Sugar rewards program, and they believed it added value. The new users instead saw
                            the rewards screen as not valuable. 
                        </p>
                        <p>
                            Both new and returning users felt lke there were more steps than necessary. Returning users felt that there were more steps required to use
                            the kiosk rather than simply asking ther cashier for their order, and they didn't having to enter their phone number in. New users thought the rewards
                            screen was an unnecessary extra step.
                        </p>
                        <p>
                            Returning users felt that the customizations offered on the customization page were not always consitent with their typical order, and that some of the customization options
                            were contradictory or confusing. New users typically did not make as much use of the customization page (beyond allergen requirements) because they were less familiar with the drink they were ordering.
                        </p>
                    
                        <h2 class="mt-5" id="maps">Empathy Maps</h2>
                        <div class="row mt-3">
                            <div class="col-sm">
                                <h5>Newbie Nicole</h5>
                                <img src="img/NewbieNicole.png" class="img-fluid" alt="Responsive image"/>
                                <p><strong class="emphasis">Newbie Nicole</strong> is a first time visiter at Tiger Sugar, and she doesn't drink bubble tea regularly. She approaches the kiosk because there's a line at the cashier,
                                    and because there are photos of the drinks on the kiosk and not on the menu behind the cashier. She takes her time and scrolls through the home page, which lists 
                                    different drinks, and is overwhelmed by the diffent options. She does not select customizations for her drink because she doesn't have preferences yet.
                                </p>
                            </div>
                            <div class="col-sm">
                                <h5>Regular Randy</h5>
                                <img src="img/RegularRandy.png" class="img-fluid" alt="Responsive image" />
                                    <p> <strong class="emphasis">Regular Randy</strong> is a regular at Tiger Sugar, and he always orders the same thing. He usually orders with the cashier, but if there's a line, 
                                        he'll use the kiosk. He thinks that there are more steps than necessary on the kiosk, and that it's over complicated. He's trying to order his regular drink as quickly as possible, so he wants to move quickly thorugh
                                        the interface. He does appreciate the ability to collect reward points on the kiosk, which is not available at the cashier.
                                    </p>
                            </div>
                        </div>

                <h2 class="mt-5" id="storyboard">Storyboard</h2>
                <h5>Newbie Nicole goes to Tiger Sugar for the first time</h5>
                <img src="img/storyboard.png" class="img-fluid" alt="Responsive image" />
            </div>
            </div>
        </div>

            <nav class="navbar navbar-expand-sm navbar-dark center mt-5" id="navbar">
            <div class="container-fluid">
                <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                    <a class="nav-link active" href="#top_header">Back to Top</a>
                </li>
                </ul>
            </div>
            </nav> */}