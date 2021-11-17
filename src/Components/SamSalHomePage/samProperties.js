import React from "react";
import SamSalHomePage from "./samSalHomePage";
import styled from "styled-components";
import SamProperty2 from "./samProperty2";

const SamProperties = () => {
  return (
    <div>
      <TitleHolder>
        <Title>THE LATEST LISTINGS</Title>
        <SubTitle>
          New Homes for Sale in <span>Nigeria</span>
        </SubTitle>
      </TitleHolder>
      <SamSalHomePage />
      <TitleHolder style={{ marginTop: "50px" }}>
        <Title>MY SEARCHES</Title>
        <SubTitleClose>Recently Viewed</SubTitleClose>
      </TitleHolder>
      <SamProperty2 />
    </div>
  );
};

export default SamProperties;

const TitleHolder = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Title = styled.div`
  font-size: 11px;
`;

const SubTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 1px;

  span {
    color: blue;

    :hover {
      cursor: pointer;
      color: black;
    }
  }
`;
const SubTitleClose = styled.div`
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 1px;
`;
