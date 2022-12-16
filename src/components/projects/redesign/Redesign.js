import React from 'react';
import './Redesign.css';
import { NavLink } from "react-router-dom";
import origpage from './img/origpage.png';
import lofide from './img/lo-fi-desktop.png';
import lofitab from './img/lo-fi-tablet.png';
import lofipho from './img/lo-fi-phone.png';
import style from './img/Design Style Guide.png';
import hifide from './img/hi-fi-desktop.png';
import hifitab from './img/hi-fi-tablet.png';
import hifipho from './img/hi-fi-phone.png';
import redesign from './img/redesign.png';



function Redesign() {
    return (
        <div className='Redesign'>
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
                    <h1>Reactive Redesign</h1>
                </div>
                <h5 className="mt-2">A redesign of The Brown Noser satire newspaper's website</h5> 
                <ul className="nav justify-content-start justify-items-start mx-auto">
                <li className="nav-item ">
                    <a className="nav-link active" href="#usability">Original Usability Issues</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#lo-fi">Lo-Fi Wireframe</a>
                </li>
                        <li className="nav-item">
                    <a className="nav-link active" href="#design">Design Guide</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#hi-fi">Hi-Fi Prototype </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#redesign">Final Redesign</a>
                </li>
                </ul>
            </div>

        <div className="container-sm mt-5">
        <div className="row">
            <div className="col-md-auto">
            <div className='background'>
                <h2 class="mt-5" id="goals">Goals</h2>
                <p>My goal for this project was to build up my experience with HTML/CSS/JS, while also focusing on reactive design. The orginal website is not designed for mobile, so I paid special attention to how to maintain the layout's readability while still inlcuding the necessary information.</p>
            </div>
            <h2 class="mt-5" id="usability">Initial usability issues</h2>
            <h5 className="mt-3">Original webpage</h5>
                    <div className="row">
                        <div className="col-xl">
                            <p className='mt-4'>I chose to redesign this website because it's the website for the satire newspaper of my university, and I spend a fair amount of time on it. Visit the original <a href="http://thenoser.com"><b>here</b></a>.</p>
                            <img src={origpage} className="img-fluid" alt="Image of original website"/>					
                        </div>
                        <div className="col-md">
                            <h5 className="mt-3">Issues I've noticed:</h5>
                            <ol className="list-group list-group-flush list-group-numbered">
                                <li className="list-group-item">The page looks outdated</li>
                                <li className="list-group-item">The section navigation bar is poorly formatted</li>
                                <li className="list-group-item">The picture for the main headline (the middle article) is not larger than the other pictures, meaning the page isn’t fully calling attention to the article</li>
                                <li className="list-group-item">There’s no “about” or “join us” page</li>
                                <li className="list-group-item">The page is meant to emulate a newspaper, but it looks crowded</li>
                                <li className="list-group-item">On tablet and phone, the articles don’t reorder on the page. Instead, the text and photos become smaller, and the entire view compresses</li>
                            </ol>
                        </div>
                        <p className="m-3">The accessibility test revealed that there were some photos <strong className="emphasis">missing alternative text</strong>, there was <b className="emphasis">no set language</b>, and there were some <b className="emphasis">missing form labels</b> as well. There were also <b className="emphasis">no page regions</b> found. The overall structure of the page was fairly clear, and the hierarchies were consistent from an accessibility standpoint. I would disagree that the hierarchies are as clear from a design standpoint as the main headline isn’t clearly highlighted. Additionally, when the display was the size of a phone, the <b className="emphasis">text was extremely small</b>, which may pose difficulties for users with low vision.
                        </p>
                    </div>
            
                    <h2 className="mt-5" id="lo-fi">Low-fidelity wireframes</h2>
                    <p className='mt-4'>Before finalizing my design, I created a low-fidelity wireframe. This allowed me to better organize the layout and to decide what I would display when the page was at its smallest, on a moble device. I included my annotations indicating my reasoning.</p>
                    <div className="row mt-3">
                        <div className="col-lg-auto">
                            <h5>Desktop</h5>
                            <img src={lofide} className="img-fluid" alt="lo-fi-desktop image"/>
                        </div>
                        <div className="mt-3 col-sm">
                            <h5>Tablet</h5>
                            <img src={lofitab} className="img-fluid" alt="lo-fi-tablet image"/>
                        </div>
                        <div className="mt-3 col-sm">
                            <h5>Phone</h5>
                            <img src={lofipho} className="img-fluid" alt="lo-fi-phone image"/>
                        </div>
                    </div>
                
                    <h2 className="mt-5" id="design">Design guide</h2>
                    <h5>Reference for prototype</h5>
                    <p className='mt-4'>I created a style guide for the website that mimics the print publication's styling. The fonts used are the same as those in the paper.</p>
                    <img src={style} className="img-fluid" alt="Design Stlye Guide image"/>
                    <h2 className="mt-5" id="hi-fi">High-fidelity prototypes</h2>
                    <p className='mt-4'>Using my lo-fi wireframes and style guide, I designed a hi-fi prototype of the page at various sizes. The hi-fi annotations relate to how to create the page structure and usability.</p>
                    <div className="row mt-3">
                        <div className="col-lg-auto">
                            <h5>Desktop</h5>
                            <img src={hifide} className="img-fluid" alt="hi-fi-desktop image"/>
                        </div>
                        <div className="mt-3 col-sm">
                            <h5>Tablet</h5>
                            <img src={hifitab} className="img-fluid" alt="hi-fi-tablet image"/>
                        </div>
                        <div className="mt-3 col-sm">
                            <h5>Phone</h5>
                            <img src={hifipho} className="img-fluid" alt="hi-fi-phone image"/>
                        </div>

                    <h2 className="mt-5" id="redesign">Final redesign</h2>
                    <div className="row d-flex">
                        <div className="col-lg">
                            <p className='mt-4'>This is the final product: a restructured, cleaner page. Test different sizes to see how the page should behave responsively.</p>
                        </div>
                        <div className="col-xl-auto">
                            <img src={redesign} className="img-fluid" alt="Image of original website" />					
                        </div>
                        <nav class="navbar-expand-sm left mt-5" id="navbar">
                                <ul class="navbar-nav mx-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="https://feralferret224.github.io/assign2-mockup/#">Visit the prototype</a>
                                </li>
                                </ul>
                        </nav>
                        <div className='conclusion'>
                            <h2 class="mt-5" id="goals">Takeaways</h2>
                            <p>This project was my first exposure to reactive design, and it was a challenge. I came away from it with a much improved skill set in CSS and HTML, and I learned the ins and outs of Figma as well. From a design standpoint, I learned about the importance of <b>memorability</b>, <b>learnability</b>, and <b>usability</b>, and I worked to integrate them in my design over the course of this project.</p>
                        </div>
                    </div>
                </div>
                
        </div>
        </div>
        </div>

        <nav className="navbar intro navbar-expand-sm center mt-5" id="navbar">
        <div className="container-fluid">
            <ul className="navbar-nav mx-auto">
            <li className="nav-item">
                <a className="nav-link active" href="#top_header">Back to Top</a>
            </li>
            </ul>
        </div>
        </nav>
        </div>
    );
}

export default Redesign;