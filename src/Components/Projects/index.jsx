import './index.css'

function Projects() {

  return (
    <div className='project-wrapper' id='projects'>
      <p className='headline'><span className="nav-item-index">02.</span> Projects</p>
      <div className="project-list">
        <div className="project left">
          <div className='project-text-content'>
            <h2 className='project-title'>Your To Do App</h2>
            <p className='project-text'>
              A ToDo list with user authentication using ReactJS and NodeJS, where each user has its own list storaged in a PostGres database.
            </p>
            <span>React, Node, Javascript, Postgres</span>
            <br />
            <br />
            <a href="https://github.com/jancoweb/your-todo-app-frontend" target='blank'>Github front-end Repository</a>
            <br />
            <br />
            <a href="https://github.com/jancoweb/your-todo-app-backend" target='blank'>Github back-end Repository</a>
          </div>
          <div className='project-img'>
            <img src="https://i.imgur.com/sOgyhnf.png" alt="you-todo-app" />
          </div>
        </div>
        <div className="project right">
          <div className="project-text-content">
            <h2 className="project-title">Finance Control</h2>
            <p className="project-text">
              A finance control app developed as the final project of <span className='cubos'>Cubos Academy</span> course, where you can register your costumers payments and debts.
            </p>
            <span>React, Node, Javascript, Postgres</span>
            <br />
            <br />
            <a href="https://github.com/j-efe/front-integral-m05-desafio-t06" target='blank'>Github front-end Repository</a>
            <br />
            <br />
            <a href="https://github.com/j-efe/back-integral-m05-desafio-t06" target='blank'>Github back-end Repository</a>
          </div>
          <div className='project-img'>
            <img src="https://i.imgur.com/2uUMV7e.png" alt="" />
          </div>
        </div>
        <div className="project right">
          <div className="project-text-content">
            <h2 className="project-title">Rick and Morty App</h2>
            <p className="project-text">
              I started this project to pratice ReactJS and third party API consumption. In this application allows you to find a specific Rick and Morty character by his name, search a random character or even see the full cast (826 characters).
            </p>
            <span>React, Javascript</span>
            <br />
            <br />
            <a href="https://github.com/j-efe/front-integral-m05-desafio-t06" target='blank'>Github front-end Repository</a>
            <br />
            <br />
            <a href="https://rickandmorty-jancoweb.netlify.app/" target='blank'>Application live on Netlify!</a>
          </div>
          <div className='project-img'>
            <img src="https://i.imgur.com/piZdqII.png" alt="" />
          </div>
        </div>
        <p className='git'>You can find more projects on my <a href="https://github.com/jancoweb" target='blank'>GitHub</a></p>
      </div>

    </div>
  )
}

export default Projects