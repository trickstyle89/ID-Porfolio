import React from "react"
import "style.css"
import "tailwindcss/lib/css/preflight.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/FullWidthWithImage"
import Resume from "components/features/TwoColWithTwoHorizontalFeaturesAndButton"
import Skills from "components/features/ThreeColWithSideImage"
import Quotes from "components/testimonials/SimplePrimaryBackground"
import Books from "components/testimonials/TwoColumnWithImageAndProfilePictureReview"
import Portfolio from "components/cards/ThreeColSlider"
import AboutMe from "components/features/TwoColSingleFeatureWithStats"
import Footer from "components/footers/MiniCenteredFooter"


function App() {
  return (
    <AnimationRevealPage>
      <Hero />
      <Portfolio />
      <Skills />
      <Quotes />
      <Books />
      <Resume />
      <AboutMe />
      <Footer />
    </AnimationRevealPage>
  )
}

export default App
