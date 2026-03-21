import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import {
  AboutSection,
  EducationSection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
} from './components/Sections'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-svh bg-void">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <Footer />
      </main>
    </div>
  )
}

export default App
