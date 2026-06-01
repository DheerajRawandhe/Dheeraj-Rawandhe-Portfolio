import React from "react";
import styled from "styled-components";
import VerifiedIcon from "@mui/icons-material/Verified";
import LaunchIcon from "@mui/icons-material/Launch";

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid #00b7ff40;
  border-radius: 16px;
  padding: 18px;
  min-height: 360px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #00b7ff;
    box-shadow: 0 8px 25px rgba(0, 183, 255, 0.15);
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(0, 183, 255, 0.1);
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Date = styled.div`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 16px;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.text_primary};
  margin-top: 14px;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.4;
`;

const Issuer = styled.div`
  color: #00b7ff;
  margin-top: 8px;
  font-size: 17px;
  font-weight: 500;
`;

const Desc = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 14px;
  font-size: 15px;
  line-height: 1.6;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`;

const Button = styled.a`
  flex: 1;
  height: 52px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: 10px;
  border: 1px solid #00b7ff;

  color: white;
  text-decoration: none;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 183, 255, 0.12);
  }
`;

const VerifyBtn = styled.a`
  flex: 1;
  height: 52px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #00b7ff;
  border-radius: 10px;

  color: white;
  text-decoration: none;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const CertificateCard = ({ certificate }) => {
  return (
    <Card>
      <div>
        <Top>
          <IconBox>
            <VerifiedIcon sx={{ color: "#00b7ff" }} />
          </IconBox>

          <Date>{certificate.date}</Date>
        </Top>

        <Title>{certificate.title}</Title>

        <Issuer>{certificate.issuer}</Issuer>

        <Desc>{certificate.desc}</Desc>
      </div>

      <ButtonContainer>
        <Button
          href={certificate.view}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LaunchIcon fontSize="small" />
          View
        </Button>

        <VerifyBtn
          href={certificate.verify}
          target="_blank"
          rel="noopener noreferrer"
        >
          Verify
        </VerifyBtn>
      </ButtonContainer>
    </Card>
  );
};

export default CertificateCard;