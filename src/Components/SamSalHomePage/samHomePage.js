import React from "react";
import styled from "styled-components";
// import Header from "./Header/Header";
// import Agents from "./TaibatHomePage/agents";
import SamProperties from "./samProperties";

const SamHomePage = () => {
  return (
    <Container>
      <Wrapper>
        {/* <Header /> */}
        <SamProperties />
        {/* <Agents /> */}
      </Wrapper>
    </Container>
  );
};

export default SamHomePage;

const Container = styled.div``;
const Wrapper = styled.div``;
