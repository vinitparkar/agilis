import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const CarouselItem = styled.div`
  min-width: 100%;
  transition: 0.5s;
`;

export const CarouselImage = styled.img`
  min-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 10%;
  height: 80%;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1rem;

  &:hover {
    outline: none;
    cursor: pointer;
  }

  @media (min-width: 250px) {
    font-size: 1.5rem;
  }

  @media (min-width: 350px) {
    font-size: 2rem;
  }

  @media (min-width: 750px) {
    font-size: 3rem;
  }
`;

export const LeftButton = styled(Button)`
  left: 0;
`;

export const RightButton = styled(Button)`
  right: 0;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;

  @media (min-width: 350px) {
    margin: 0.75rem;
  }
`;

export const LoginInput = styled.input`
  width: 6rem;
  font-size: 0.75rem;
`;

export const UserId = styled(LoginInput)`
  margin-bottom: 0.25rem;
`;

export const Error = styled.div`
  margin-top: 0.25rem;
  font-size: 0.75rem;
  width: 6rem;
  text-align: center;
  color: red;
`;

export const Welcome = styled.div`
  margin: 0.5rem;

  @media (min-width: 350px) {
    margin: 0.75rem;
}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 250px) {
    justify-content: flex-end;
  }
`;

export const H1 = styled.h1`
  font-size: 1rem;
  margin: 0.5rem;

  @media (max-width: 250px) {
    display: none;
  }

  @media (min-width: 350px) {
    font-size: 1.5rem;
    margin: 1rem;
  }

  @media (min-width: 750px) {
    font-size: 2rem;
  }
`;
