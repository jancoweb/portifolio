import './index.css'

function Nav() {
  return (
    <div className="nav-bar">
      <h2 className='logo'><span className='logo-span'>{'<'}</span> JancoDev <span className='logo-span'>{'/>'}</span></h2>
      <ul className="nav-item-wrapper">
        <li className="nav-item"><span className="nav-item-index">00.</span> Home</li>
        <li className="nav-item"><span className="nav-item-index">01.</span> About</li>
        <li className="nav-item"><span className="nav-item-index">02.</span> Projects</li>
        <li className="nav-item"><span className="nav-item-index">03.</span> Contact me</li>
        <li className='resume'>Resume</li>
      </ul>
    </div>
  )
}

export default Nav