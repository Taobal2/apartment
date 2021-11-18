import React from "react";
import styled from "styled-components";

const BuyItems = () => {
  return (
    <Container>
      <Wrapper>
        <List>Home Near Me</List>
        <List>Home For Sale</List>
        <List>Home For Rent</List>
        <List>Short Let</List>
        <List>Land</List>
      </Wrapper>
    </Container>
  );
};

export default BuyItems;

const List = styled.div`
  font-size: 25px;
  margin: 15px 0;
  display: flex;

  :hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  width: 200px;
  height: 100%;
  background-color: white;
  color: black;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
`;
