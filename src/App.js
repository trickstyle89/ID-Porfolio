import React from "react"
import "style.css"
import "tailwindcss/lib/css/preflight.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/FullWidthWithImage"
import Pitch from "components/features/TwoColWithButton"
import Skills from "components/features/ThreeColWithSideImage"
import Portfolio from "components/features/VerticalWithAlternateImageAndText"
import AboutMe from "components/features/TwoColSingleFeatureWithStats"
import Footer from "components/footers/MiniCenteredFooter"


function App() {
  return (
    <AnimationRevealPage>
      <Hero />
      <Pitch />
      <Portfolio />
      <AboutMe />
      <Skills />
      <Footer />
    </AnimationRevealPage>
  )
}

export default App
