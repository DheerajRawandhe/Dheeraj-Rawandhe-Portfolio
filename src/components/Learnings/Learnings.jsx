import React from "react";
import {
  Container,
  Wrapper,
  Logo,
  Title,
  Desc,
  CardContainer,
  Card,
  CardTitle,
  CardText,
} from "./LearningsStyle";

import MedhashalaLogo from "../../images/Medhashalalogo.jpeg";

const Learnings = () => {
  const learnings = [
    "Team Leadership & Coordination",
    "Project Planning & Execution",
    "Professional Communication",
    "Real-world Software Development Workflow",
    "Problem Solving & Critical Thinking",
    "AI Tools for Productivity",
    "Personal Branding & Portfolio Development",
  ];

  return (
    <Container id="learnings">
      <Wrapper>

        <Logo src={MedhashalaLogo} alt="Medhashala Logo" />

        <Title>
          Learnings & Growth During Medhashala Program
        </Title>

        <Desc>
          During my journey at Medhashala, I gained practical experience in web
          development, leadership, teamwork, and project management. Working as
          a Technical Program Lead helped me improve communication,
          collaboration, and decision-making skills.
        </Desc>

        <CardContainer>
          {learnings.map((item, index) => (
            <Card key={index}>
              <CardTitle>✓ {item}</CardTitle>
            </Card>
          ))}
        </CardContainer>

        <CardText>
          This experience has strengthened both my technical and professional
          skills, preparing me for future industry opportunities and helping me
          build a strong foundation for my software development career.
        </CardText>

      </Wrapper>
    </Container>
  );
};

export default Learnings;