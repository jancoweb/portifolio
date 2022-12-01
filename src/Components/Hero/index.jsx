import './index.css'
import Nav from '../Nav'

function Hero() {
  return (
    <>
      <div className='hero-wrapper'>
        <Nav />
        <div className='text-wrapper'>
          <p className='greeting'>Hi, my name is</p>
          <h1>João Coelho.</h1>
          <p className='paragraph'>
            I'm a fullstack web developer.
            Currently, I'm focused on finding a job.
          </p>
        </div>
        <a href="https://docs.google.com/document/d/e/2PACX-1vQ7qCGyFsXCZ7Uyzgv2D056oY1ISsDAb3m8pVCGcQfcE5e_tV-mVYnEyWlqCh4V_bactaMquXUIl0CW/pub" target='blank' className='resume'>My Resume</a>
      </div>
    </>
  )
}

export default Hero