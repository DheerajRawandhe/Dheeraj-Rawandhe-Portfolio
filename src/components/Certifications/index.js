import React from "react";
import styled from "styled-components";
import CertificateCard from "../Cards/CertificateCard";
import { certifications } from "../../data/constants";

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding: 80px 0;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
`;

const Desc = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  max-width: 700px;
  margin-bottom: 50px;
`;

const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Certifications = () => {
  return (
    <Container id="certifications">
      <Wrapper>
        <Title>Certifications</Title>

        <Desc>
          Highlighted professional certifications demonstrating technical
          skills and continuous learning.
        </Desc>

        <CardContainer>
          {certifications.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Certifications;