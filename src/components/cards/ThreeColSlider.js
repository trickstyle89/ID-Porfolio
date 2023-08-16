import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as LocationIcon } from "images/id-logos/file-text-svgrepo-com.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import SurfPreview from "images/surf_course_ss.png";
import OutlinePreview from "images/outline_preview.png";
import WDPortPreview from "images/WDPortSS.png";
import PhotoPortPreview from "images/PhotoPortSS.png";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc:SurfPreview,
      title: "Surf eLearning Course",
      description: "Harnessing its extensive features and media applications to craft a highly interactive learning experience, showcasing my proficiency in leveraging innovative tools to enhance course engagement and interactivity.",
      locationText: "Articulate360",
      url: "https://rise360surf.vercel.app/"
    },
    {
      imageSrc:OutlinePreview,
      title: "Surf eLearning Outline",
      description: "Course outline covers essential aspects, including induction, addressing bullying, and conflict resolution. Learners will acquire knowledge and skills related to surfing, conflict management and fostering community.",
      locationText: "Apple Pages",
      url: "https://drive.google.com/file/d/13QzKDfRSCSQy1rsTav0wM4_yBjqpgbT1/view?usp=sharing"
    },
    {
      imageSrc:WDPortPreview,
      title: "Developer Portfolio",
      description: "Showcasing my expertise in creating immersive and user-friendly websites. Explore my projects to see how I bring digital ideas to life with modern technologies and a keen eye for aesthetics.",
      locationText: "Website",
      url: "https://trickstyle89.github.io/"
    },
    {
      imageSrc:PhotoPortPreview,
      title: "Photo Portfolio",
      description: "Discover a captivating visual journey through my photography portfolio, currently under construction with cutting-edge technologies like Next.js, TypeScript, and FullPage.js.",
      locationText: "Website",
      url: "https://photo-portfolio-rouge.vercel.app/"
    },
    {
      imageSrc: "https://img.freepik.com/free-photo/futuristic-abstract-background-with-circular-shapes_24972-1922.jpg?t=st=1688417151~exp=1688417751~hmac=e5f911f3d83a40d36f1f4d8d47b3e66553978ed45dc06a7430a6b08adc11aeeb",
      title: "ESL for Adult Learners",
      description: "This Powerpoint project is currently being created using Powerpoint, iSpring, Mentimeter, QR4Office, Power-User and other plugins to help create an interactive and engaging eLearning experience.",
      locationText: "PowerPoint",
      url: "#"
    }
  ]

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Portfolio</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <a href={card.url} target="_blank" rel="noopener noreferrer">
              <CardImage imageSrc={card.imageSrc} />
              </a>
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <LocationIcon />
                    </IconContainer>
                    <Text>{card.locationText}</Text>
                  </IconWithText>
                </SecondaryInfoContainer>
                <Description>{card.description}</Description>
              </TextInfo>
              <PrimaryButton as="a" href={card.url} target="_blank" rel="noopener noreferrer">Learn More</PrimaryButton>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
