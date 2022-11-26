import About from "../About"
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
      </div>
    </>
  )
}

export default MainPage