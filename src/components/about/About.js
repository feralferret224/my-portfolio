import './About.css';
import ferretImg from './img/ferret.png';
import { Box } from '@mui/material';
import ResumeIcon from '@mui/icons-material/Description';
import ConnectIcon from '@mui/icons-material/ConnectWithoutContactOutlined';


function About() {
  return (
    <div id="About">
      <div className="container">
        <h1 className='mb-4 d-flex justify-contents-start title'>About</h1> 
        <div className='intro row justify-content-between'>
          <div className='col no-pad justify-content-start'>
            <img className='profile' src={ferretImg} />
          </div>
          <div className='col-8 d-flex flex-column text-start justify-content-start'>
          <h2 className='mb-3 d-flex justify-contents-start title'>Getting to know me</h2> 
          <p>I'm a Brown University student studying computer science, with special emphasis on <b>cloud technologies</b>, <b>design</b>, and <b>learnability</b>. I also enjoy writing, and I've published both nonfiction pieces and satire.</p>
          <p>I'm from the Chicago area, and in my free time, I enjoy listening to <a href='https://g.co/kgs/vCU2B8'>Dolly Parton</a> and <a href="https://g.co/kgs/MR1bXZ">The Strokes</a>. I'm also a fan of classic films, and I love a good murder mystery.</p>
          <ul class="nav justify-content-end justify-items-end">
            <li class="nav-item">
              <a class="nav-link active" href="#"><ResumeIcon sx={{ fontSize: 25 }}/>
                 Resume</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#"><ConnectIcon sx={{ fontSize: 25 }}/>
                 Connect</a>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
