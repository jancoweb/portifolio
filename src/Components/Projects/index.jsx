import './index.css'

function Projects() {

  return (
    <div className='project-wrapper'>
      <p className='headline'><span className="nav-item-index">02.</span> Projects</p>
      <div className="project-list">
        <div className="project left">
          <div className='project-text-content'>
            <h2 className='project-title'>Your To Do App</h2>
            <p className='project-text'>
              A ToDo list with user authentication using ReactJS and NodeJS
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
            <img src="https://i.imgur.com/eVr2zIi.png" alt="you-todo-app" />
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
        <p className='git'>You can find more <a href="https://github.com/jancoweb" target='blank'>here</a></p>
      </div>
    </div>
  )
}

export default Projects