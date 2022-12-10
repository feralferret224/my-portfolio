import './Work.css';
import awsImg from './img/aws.png';


function Work() {
  return (
    <div id="Work">
      <div className="container">
        <h1 className='mb-4 d-flex justify-contents-start title'>Work</h1> 
        <div className='intro row justify-content-between'>
          <div className='col-8 d-flex flex-column text-start justify-content-start'>
          <h2 className='mb-3 d-flex justify-contents-start title'>I'm currently a Solutions Architect at AWS.</h2> 
          <p>This means that I'm interested in solving problems using cloud technologies. My clientele is public sector.</p>
          <p>My internship project was to create a searchable file storage system that could use AI to categorize documents.</p>
          </div>
          <div className='col justify-content-center'>
            <img className="profile" src={awsImg} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Work;
