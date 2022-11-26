import TechList from '../TechList'
import './index.css'

function About() {

  return (
    <div className='about-content-wrapper'>
      <div className='about-text-wrapper'>
        <p className='headline'><span className="nav-item-index">01.</span> About me</p>
        <div className='about-text-content'>
          <p className='about-text'>
            Hello! My name is João Coelho and I enjoy building things on the internet. Back in 2020, I started to study about programming and its languages, thats how I got introduced in the JavaScript world.
          </p>
          <br />
          <p className='about-text'>
            Fast-foward to 2022, I had the privilege to study at one of the top programming schools, <span className='cubos'>Cubos Academy</span>, where I've had the opportunity to learn and develop web applications.
          </p>
          <br />
          <p className='about-text'>
            Here are the technologies I've been learning since 2020:
          </p>
          <br />
          <TechList />
        </div>
      </div>
    </div>
  )
}

export default About