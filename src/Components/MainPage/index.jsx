import About from "../About"
import Contact from "../Contact"
import Hero from "../Hero"
import Nav from "../Nav"
import Projects from "../Projects"

function MainPage() {
  return (
    <>
      <div className="page-wrapper">
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default MainPage