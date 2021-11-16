import React from "react";
import styled from "styled-components";
// import Header from "./Header/Header";
import Agents from "./TaibatHomePage/agents";
import Properties from "./TaibatHomePage/properties";

const HomePage = () => {
  return (
    <Container>
      <Wrapper>
        {/* <Header /> */}
        <Properties />
        <Agents />
      </Wrapper>
    </Container>
  );
};

export default HomePage;

const Container = styled.div``;
const Wrapper = styled.div``;
