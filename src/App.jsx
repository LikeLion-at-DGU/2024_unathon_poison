import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./style/globalStyle";
import styled from "styled-components";
import Nav from "./layouts/nav/Nav";

const Background = styled.div`
  width: 100vw;
  max-width: 767px;
  height: 100vh;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Layout = () => {
  return (
    <Background>
      {/* <Nav /> */}
      <Wrapper>
        <Outlet />
      </Wrapper>
    </Background>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  );
}

export default App;
