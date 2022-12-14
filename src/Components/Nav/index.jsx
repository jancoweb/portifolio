import './index.css'

function Nav() {
  return (
    <div className="nav-bar">
      <h2 className='logo'><span className='logo-span'>{'<'}</span> JancoDev <span className='logo-span'>{'/>'}</span></h2>
      <ul className="nav-item-wrapper">
        <li className="nav-item"><a href="#about"><span className="nav-item-index">01.</span> About</a></li>
        <li className="nav-item"><a href="#projects"><span className="nav-item-index">02.</span> Projects</a></li>
        <li className="nav-item"><a href="#contact"><span className="nav-item-index">03.</span> Contact me</a></li>
        <a className='nav-resume' href="https://docs.google.com/document/d/e/2PACX-1vQ7qCGyFsXCZ7Uyzgv2D056oY1ISsDAb3m8pVCGcQfcE5e_tV-mVYnEyWlqCh4V_bactaMquXUIl0CW/pub" target='blank'> Resume</a>
      </ul>
    </div>
  )
}

export default Nav