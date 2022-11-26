import About from "../About"
import Hero from "../Hero"
import Nav from "../Nav"

function MainPage() {
  return (
    <>
      <div className="page-wrapper">
        <Nav />
        <Hero />
        <About />
      </div>
    </>
  )
}

export default MainPage