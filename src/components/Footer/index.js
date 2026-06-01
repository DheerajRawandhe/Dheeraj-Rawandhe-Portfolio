import React from "react";
import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Bio } from "../../data/constants";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 70px 0 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 30px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }
`;

const Left = styled.div``;

const Logo = styled.h2`
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.8;
  max-width: 400px;

  @media (max-width: 768px) {
    margin: auto;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 25px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.text_secondary};
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h3`
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 12px;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 14px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 50px;
  padding-top: 25px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  color: ${({ theme }) => theme.text_secondary};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterContent>
          {/* Left Section */}
          <Left>
            <Logo>Dheeraj Rawandhe</Logo>

            <Description>Passionate and self-motivated MERN Stack Developer seeking an entry-level opportunity to apply my web development skills and contribute to real-world projects.</Description>

            <SocialIcons>
              <SocialIcon href={Bio.github} target="_blank" rel="noreferrer">
                <GitHubIcon />
              </SocialIcon>

              <SocialIcon href={Bio.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon />
              </SocialIcon>

              <SocialIcon href={Bio.leetcode} target="_blank" rel="noreferrer">
                <CodeIcon />
              </SocialIcon>

              <SocialIcon href={Bio.insta} target="_blank" rel="noreferrer">
                <InstagramIcon />
              </SocialIcon>

              <SocialIcon href={Bio.facebook} target="_blank" rel="noreferrer">
                <FacebookIcon />
              </SocialIcon>

              <SocialIcon href={Bio.twitter} target="_blank" rel="noreferrer">
                <TwitterIcon />
              </SocialIcon>
            </SocialIcons>
          </Left>

          {/* Center Section */}
          <Center>
            <Heading>Quick Links</Heading>

            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </Center>

          {/* Right Section */}
          <Right>
            <Heading>Contact Info</Heading>

            <ContactItem>
              <LocationOnIcon />
              Indore, India
            </ContactItem>

            <ContactItem>
              <EmailIcon />
              dheerajrawandhe57@gmail.com
            </ContactItem>

            <ContactItem>
              <PhoneIcon />
              +91 9770414387
            </ContactItem>
          </Right>
        </FooterContent>

        <Copyright>© 2026 Dheeraj Rawandhe. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
