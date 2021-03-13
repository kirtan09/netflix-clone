import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
`;

export const Title = styled.p`
  font-size: 1.3rem;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 0.7rem;
  color: #757575;
  text-align: center;
  margin-bottom: 40px;
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;
