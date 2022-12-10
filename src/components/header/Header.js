import './Header.css';

function Header() {
  return (
    <div className="Header">
      <div className="container-sm">
        <ul class="nav intro justify-content-end justify-items-end">
          <li class="nav-item">
            <a class="nav-link active" href="#Projects">projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#Work">work</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#About">about</a>
          </li>
        </ul>
        <div className='intro row justify-content-between'>
          <div className='col-8 d-flex flex-column text-start justify-content-start'>
          <h1 className='mb-3 d-flex justify-contents-start title'>Hi, my name is feralferret224.</h1> 
          <p>I am new to the world of design. Welcome to my portfolio. Let's learn together.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
