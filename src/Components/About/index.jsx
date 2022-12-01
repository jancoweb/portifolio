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
                Hello! My name is João Coelho and I enjoy building things on the internet. Back in 2020, I started to study about programming and its languages, thats how I got introduced in the JavaScript world.
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
              <img src="https://scontent.fssa7-1.fna.fbcdn.net/v/t1.6435-9/42996783_1722369997872926_1093889799053377536_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=e0Xxmsr1CHcAX_3ayWq&_nc_ht=scontent.fssa7-1.fna&oh=00_AfDOzwrSHQ2JlNR5AcR2M3Q14JhovEJwl0OmbNBu8Otxmw&oe=63B015DC" alt="eu" />
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