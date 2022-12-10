import React from 'react';
import './Redesign.css';
import { NavLink } from "react-router-dom";

function Redesign() {
    return (
        <div className='Redesign'>
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
            <h2 id="usability">Initial usability issues</h2>
            <h5 className="mt-3">Original webpage</h5>
                    <div className="row">
                        <div className="col-xl">
                            <img src="img/origpage.png" className="img-fluid" alt="Image of original website"/>					
                        </div>
                        <div className="col-md">
                            <p>I chose to redesign this website because it's the website for the satire newspaper of my university, and I spend a fair amount of time on it. Visit the original <a href="http://thenoser.com">here</a></p>
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
                    <div className="row mt-3">
                        <div className="col-lg-auto">
                            <h5>Desktop</h5>
                            <img src="img/lo-fi-desktop.png" className="img-fluid" alt="lo-fi-desktop image"/>
                        </div>
                        <div className="mt-3 col-sm">
                            <h5>Tablet</h5>
                            <img src="img/lo-fi-tablet.png" className="img-fluid" alt="lo-fi-tablet image"/>
                        </div>
                        <div className="mt-3 col-sm">
                            <h5>Phone</h5>
                            <img src="img/lo-fi-phone.png" className="img-fluid" alt="lo-fi-phone image"/>
                        </div>
                    </div>
                
                    <h2 className="mt-5" id="design">Design guide</h2>
                    <h5>Reference for prototype</h5>
                    <img src="img/Design Style Guide.png" className="img-fluid" alt="Design Stlye Guide image"/>
            <h2 className="mt-5" id="hi-fi">High-fidelity prototypes</h2>
                    <div className="row mt-3">
                        <div className="col-lg-auto">
                            <h5>Desktop</h5>
                            <img src="img/hi-fi-desktop.png" className="img-fluid" alt="hi-fi-desktop image"/>
                        </div>
                        <div className="mt-3 col-sm">
                            <h5>Tablet</h5>
                            <img src="img/hi-fi-tablet.png" className="img-fluid" alt="hi-fi-tablet image"/>
                        </div>
                        <div className="mt-3 col-sm">
                            <h5>Phone</h5>
                            <img src="img/hi-fi-phone.png" className="img-fluid" alt="hi-fi-phone image"/>
                        </div>

                    <h2 className="mt-5" id="redesign">Final redesign</h2>
                    <div className="row d-flex">
                        <div className="col-lg">
                            <p>This is the final product: a restructured, cleaner page. Test different sizes to see how the page should behave responsively. Visit the redesign <a href="https://feralferret224.github.io/assign2-mockup/#">here</a></p>
                        </div>
                        <div className="col-xl-auto">
                            <img src="img/redesign.png" className="img-fluid" alt="Image of original website" />					
                        </div>
                    </div>
                </div>
        </div>
        </div>
        </div>

        <nav className="navbar navbar-expand-sm center mt-5" id="navbar">
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