import TechList from '../TechList'
import './index.css'

function About() {

  return (
    <div className='about-content-wrapper' id='about'>
      <div className='about-text-wrapper'>
        <p className='headline'><span className="nav-item-index">01.</span> About me</p>
        <div className='about-content'>
          <div className='content'>
            <div className='text'>
              <p className='about-text'>
                Hello! My name is João Coelho and I enjoy building things on the internet. Back in 2020, I started to study about web development on my own.
              </p>
              <br />
              <p className='about-text'>
                Fast-foward to 2022, I had the opportunity to study at one of the top programming schools, <span className='cubos'>Cubos Academy</span>, where I learned how to build API's using NodeJS with JavaScript and TypeScript, front-end development using ReactJS and how to manipulate Relational Database with PostGresSQL.
              </p>
              <br />
              <p className='about-text'>
                Here are the technologies I've been learning since 2020:
              </p>
            </div>
            <div className='about-img'>
              <img src="https://i.imgur.com/zxVqPbt.jpg" alt="eu" />
            </div>
          </div>
          <br />
          <TechList />
        </div>
      </div>
    </div>
  )
}

export default About