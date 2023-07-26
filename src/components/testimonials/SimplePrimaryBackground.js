import React, {useState} from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { ReactComponent as QuoteIconBase } from "images/quotes-l.svg"
import { ReactComponent as ArrowLeftIcon } from "images/arrow-left-3-icon.svg"
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-3-icon.svg"
import Benjamin from "images/benjaminFranklin.jpeg";
import Seuss from "images/DrSeuss.jpg";
import Drucker from "images/Drucker.jpg";
import Toffler from "images/Toffler.jpeg";
import Bruce from "images/bruceLee.jpeg";

import "slick-carousel/slick/slick.css";

const PrimaryBackgroundContainer = tw(Container)`-mx-8 px-8 bg-primary-900 text-gray-100`;

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;

const TestimonialsSlider = styled(Slider)`
  ${tw`flex mt-16 mx-auto max-w-xs sm:max-w-xl lg:max-w-4xl text-left bg-gray-100 rounded-lg text-gray-900`}
  .slick-track {
    ${tw`flex!`}
  }
  .slick-slide {
    ${tw`h-auto`}
  }
  .slick-slide > div {
    ${tw`h-full`}
  }
`;
const Testimonial = tw.div`px-6 py-12 sm:px-20 sm:py-16 focus:outline-none flex! flex-col justify-between h-full`
const QuoteContainer = tw.div`relative`
const QuoteIcon = tw(QuoteIconBase)`absolute opacity-15 top-0 left-0 transform -translate-y-2 -translate-x-1/2 sm:-translate-x-full w-10 fill-current text-primary-500`
const Quote = tw.blockquote`font-medium sm:font-normal relative text-base sm:text-3xl text-center sm:text-left pl-5 sm:pl-10`
const CustomerInfoAndControlsContainer = tw.div`mt-8 flex items-center flex-col sm:flex-row justify-center text-center sm:text-left`
const CustomerImage = tw.img`w-16 h-16 rounded-full`
const CustomerNameAndProfileContainer = tw.div`mt-4 sm:mt-0 sm:ml-4 flex flex-col`
const CustomerName = tw.span`text-lg font-semibold`
const CustomerProfile = tw.span`text-sm font-normal text-gray-700`
const ControlsContainer = tw.div`sm:ml-auto flex`
const ControlButton = styled.button`
  ${tw`text-gray-600 hover:text-primary-700 focus:outline-none transition-colors duration-300 ml-4 first:ml-0 sm:first:ml-4 mt-4 sm:mt-0`}
  .icon {
    ${tw`fill-current w-6`}
  }
`;

export default ({
  subheading = "",
  heading = "My Favorite Quotes about Learning",
  description = "",
  testimonials = [
    {
      customerName: "Alvin Toffler",
      customerProfile: "Futuristic, Provocative Intellectual",
      imageSrc: Toffler,
      quote:
        "The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn."
    },
    {
      customerName: "Benjamin Franklin",
      customerProfile: "A Diplomat with Visionary Inventiveness",
      imageSrc: Benjamin,
      quote:
        "Tell me and I forget, teach me and I may remember, involve me and I learn."
    },
    {
      customerName: "Bruce Lee",
      customerProfile: "Dynamic, Philosophical Martial Artist",
      imageSrc: Bruce,
      quote:
        "A wise man can learn more from a foolish question than a fool can learn from a wise answer."
    },
    {
      customerName: "Dr. Seuss",
      customerProfile: "Imaginative, Whimsical Storyteller",
      imageSrc: Seuss,
      quote:
        "The more that you read, the more things you will know. The more that you learn, the more places you’ll go."
    },
    {
      customerName: "Peter Drucker",
      customerProfile: "Strategic, Insightful Thinker",
      imageSrc: Drucker,
      quote:
        "We now accept the fact that learning is a lifelong process of keeping abreast of change. And the most pressing task is to teach people how to learn."
    }
  ]
}) => {
  const [sliderRef, setSliderRef] = useState(null)

  const settings = {
    arrows: false,
    ref: setSliderRef,
    autoplay: true,
    autoplaySpeed: 3000
  }

  return (
    <PrimaryBackgroundContainer>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </HeadingContainer>
        <TestimonialsSlider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index}>
              <QuoteContainer>
                <QuoteIcon />
                <Quote>
                  {testimonial.quote}
                </Quote>
              </QuoteContainer>
              <CustomerInfoAndControlsContainer>
                <CustomerImage src={testimonial.imageSrc} />
                <CustomerNameAndProfileContainer>
                  <CustomerName>
                    {testimonial.customerName}
                  </CustomerName>
                  <CustomerProfile>
                    {testimonial.customerProfile}
                  </CustomerProfile>
                </CustomerNameAndProfileContainer>
                <ControlsContainer>
                  <ControlButton onClick={sliderRef?.slickPrev}>
                    <ArrowLeftIcon className="icon" />
                  </ControlButton>
                  <ControlButton>
                    <ArrowRightIcon className="icon" onClick={sliderRef?.slickNext}/>
                  </ControlButton>
                </ControlsContainer>
              </CustomerInfoAndControlsContainer>
            </Testimonial>
          ))}
        </TestimonialsSlider>
      </ContentWithPaddingXl>
    </PrimaryBackgroundContainer>
  );
};
