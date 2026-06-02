import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding: 100px 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
`;

export const Logo = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 25px;
  border-radius: 16px;

  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    width: 90px;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 800px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 20px;
  line-height: 1.7;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  margin-top: 50px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid rgba(133, 76, 230, 0.2);
  border-radius: 16px;
  padding: 20px;

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 10px 25px rgba(133, 76, 230, 0.15);
  }
`;

export const CardTitle = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;

export const CardText = styled.div`
  margin-top: 40px;
  max-width: 900px;

  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 17px;
  line-height: 1.8;
`;