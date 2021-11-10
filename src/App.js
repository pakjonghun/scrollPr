import styled, { css } from "styled-components";
import { useScroll } from "./Hooks/UseScroll";

import GlobalStyles from "./Styles/GlobalStyles";

function App() {
  const { ref, cur } = useScroll();
  return (
    <>
      <GlobalStyles />
      <Wrapper ref={ref}>
        <Dots>
          <Dot id={1} cur={cur} />
          <Dot id={2} cur={cur} />
          <Dot id={3} cur={cur} />
        </Dots>
        <Container></Container>
        <Container1></Container1>
        <Container2></Container2>
        <Footer>Footer</Footer>
      </Wrapper>
    </>
  );
}

export default App;

const Footer = styled.footer`
  height: 30vh;
  width: 100%;
  background-color: white;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin: 10px;
  background-color: ${({ id, cur }) => (id === cur ? "black" : "gray")};
  transform: scale(${({ id, cur }) => (id === cur ? 1.3 : 1)});
  border-radius: 100%;
  transition: transform 0.3s linear;
`;

const Dots = styled.div`
  position: fixed;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
`;

const Wrapper = styled.div`
  /* -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  } */
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: gray;
`;

const Container1 = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: green;
`;

const Container2 = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: yellow;
`;
