import React from "react";
import styled from "styled-components";
import Main from "./Auth/main";
import Header from "./Header/Header";

const HomePage = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </Container>
  );
};

export default HomePage;

const Container = styled.div``;
const Wrapper = styled.div``;
