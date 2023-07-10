import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/ivan-logo-white.png";
import LinkedInIcon from "../../images/id-logos/linkedin-logo-icon.png";
import GithubIcon from "../../images/id-logos/github-icon.png";
import MediumIcon from "../../images/id-logos/medium-logo-icon.png";
import VimeoIcon from "../../images/id-logos/vimeo-logo-icon.png";


const Container = tw(ContainerBase)`bg-primary-500 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-96`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-3`}
  svg {
    ${tw`w-1 h-1`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            <LogoText></LogoText>
          </LogoContainer>
          <SocialLinksContainer>
            <SocialLink href="https://www.linkedin.com/in/chewstory/">
              <img src={LinkedInIcon} alt="linkedin" />
            </SocialLink>
            <SocialLink href="https://github.com/trickstyle89">
              <img src={GithubIcon} alt="GitHub" />
            </SocialLink>
            <SocialLink href="https://medium.com/@chewsstory">
              <img src={MediumIcon} alt="Medium" />
            </SocialLink>
            <SocialLink href="https://vimeo.com/user32595080">
              <img src={VimeoIcon} alt="Vimeo" />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2023, Ivan Chew. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
