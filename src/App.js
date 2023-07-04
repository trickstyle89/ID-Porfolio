import React from "react"
import "style.css"
import "tailwindcss/lib/css/preflight.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/FullWidthWithImage"
import Resume from "components/features/TwoColWithTwoHorizontalFeaturesAndButton"
import Skills from "components/features/ThreeColWithSideImage"
import Portfolio from "components/blogs/ThreeColSimpleWithImage"
import AboutMe from "components/features/TwoColSingleFeatureWithStats"
import Footer from "components/footers/MiniCenteredFooter"


function App() {
  return (
    <AnimationRevealPage>
      <Hero />
      <Portfolio />
      <Skills />
      <Resume />
      <AboutMe />
      <Footer />
    </AnimationRevealPage>
  )
}

export default App
