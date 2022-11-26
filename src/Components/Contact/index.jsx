import './index.css'
import linkedin from '../../assets/linkedin-svgrepo-com.svg'
import github from '../../assets/github-svgrepo-com.svg'
import whatsapp from '../../assets/whatsapp-svgrepo-com.svg'
import email from '../../assets/email-mails-svgrepo-com.svg'

function Contact() {
  return (
    <div className="contact-wrapper" id='contact'>
      <p className='headline'><span className="nav-item-index">03.</span> What's next?</p>
      <h2>Contact me</h2>
      <p className='x'>You can get in touch via:</p>
      <div className='contact-list'>
        <a href="https://www.linkedin.com/in/jancoweb/" target='blank'><img src={linkedin} /></a>
        <a href="https://github.com/jancoweb" target='blank'><img src={github} /></a>
        <a href="https://wa.me/5571991274686" target='blank'><img src={whatsapp} /></a>
        <a href="mailto:jancoweb@outlook.com"><img src={email} /></a>
      </div>
      <p>@jancoweb 2022</p>
    </div>
  )
}

export default Contact