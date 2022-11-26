import './index.css'

function Hero() {
  return (
    <div className='hero-wrapper'>
      <div className='text-wrapper'>
        <p className='greeting'>Hi, my name is</p>
        <h1>João Coelho.</h1>
        <p className='paragraph'>
          I'm a fullstack web developer.
          Currently, I'm focused on finding a job.
        </p>
      </div>
      <a href="https://docs.google.com/document/d/e/2PACX-1vSWfs0RXkfgVtnfzJf2mE6IfOnHNvzCmRSHWRjUtjeDIgDAe5p9LorVuTkwTgqOtB4OimLVqAWceLVz/pub" target='blank' className='resume'>My Resume</a>
    </div>
  )
}

export default Hero