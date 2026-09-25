import NavBar from "../components/Navbar"
import Hero from "../components/Hero"
import Story from "../components/Story"
import Community from "../components/Community"
import Footer from "../components/Footer"

const MainPage = () => {
  return (
    <>
      <NavBar />
      <main className="relative bg-transparent">
        <Hero />
        <Story />
        <Community />
        <Footer />
      </main>
    </>
  )
}

export default MainPage
