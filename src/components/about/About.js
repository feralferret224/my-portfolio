import './About.css';
import ferretImg from './img/ferret.png';

function About() {
  return (
    <div id="About">
      <div className="container">
        <h1 className='mb-4 d-flex justify-contents-start title'>About</h1> 
        <div className='intro row justify-content-between'>
          <div className='col justify-content-left'>
            <img className='profile' src={ferretImg} />
          </div>
          <div className='col-8 d-flex flex-column text-start justify-content-start'>
          <h2 className='mb-3 d-flex justify-contents-start title'>I'm currently a Solutions Architect at AWS.</h2> 
          <p>This means that I'm interested in solving problems using cloud technologies. My clientele is public sector.</p>
          <p>My internship project was to create a searchable file storage system that could use AI to categorize documents.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
