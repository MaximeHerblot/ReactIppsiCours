import AboutMe from "../components/cv/about_me"
import Diplomes from "../components/cv/diplomes"
import Experiences from "../components/cv/experiences"
import Formations from "../components/cv/formations"
import Hobbies from "../components/cv/hobbies"
import Skills from "../components/cv/skills"

const Cv = () => {
    return (
        <>
            <h1>Cv de Maxime HERBLOT</h1>
            <AboutMe/>
            <Formations />
            <Experiences />
            <Skills />
            <Diplomes />
            <Hobbies />
        </>
    )
}

export default Cv
