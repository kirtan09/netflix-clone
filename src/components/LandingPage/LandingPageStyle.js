import styled from "styled-components/macro";

export const Container = styled.div``;
export const Form = styled.form``;
export const Input = styled.input`
  padding: 10px;
  outline: none;
  height: 30px;
  width: 40%;
  border: none;
  max-width: 600px;
`;

export const Background = styled.div`
  background: ${({ background }) => background} center no-repeat;
  background-size: cover;
`;

export const Logo = styled.img`
  position: fixed;
  left: 15px;
  top: 15px;
  width: 150px;
  object-fit: contain;
  cursor: pointer;
`;

export const SignInBtn = styled.button`
  position: fixed;
  right: 15px;
  top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #e50914;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const Gradient = styled.div`
  width: 100%;
  z-index: 1;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;

export const Body = styled.div`
  position: relative;
  top: 25%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 1;
  color: #fff;
  padding: 20px;
`;

export const GetStartedBtn = styled.button`
  padding-top: 15.9px;
  padding-bottom: 16.5px;
  padding-right: 16px;
  padding-left: 16px;
  font-size: 1rem;
  color: #fff;
  background-color: #e50914;
  border: none;
  font-weight: 600;
  outline: none;
  cursor: pointer;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

export const Pane = styled.div`
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Header = styled.h1`
  line-height: 1.1;
  font-size: 3.125rem;
  margin-bottom: 20px;
  @media (max-width: 750px) {
    font-size: 2.125rem;
  }
`;

export const Title = styled.h2`
  line-height: 1.1;
  font-size: 2.5rem;
  margin-bottom: 20px;
  @media (max-width: 750px) {
    font-size: 2.125rem;
  }
`;

export const SubTitle = styled.h3`
  font-size: 1.7rem;
  font-weight: 400;
  margin-bottom: 30px;
  @media (max-width: 750px) {
    font-size: 1.4rem;
  }
`;

export const BodyText = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;
  @media (max-width: 750px) {
    font-size: 1rem;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
