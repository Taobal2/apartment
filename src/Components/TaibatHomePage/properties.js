import React from "react";
import TaibatHomePage from "./taibatHomePage";
import styled from "styled-components";
import Property2 from "./Property2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Properties = () => {
  return (
    <div>
      <TitleHolder>
        <Title>REAL ESTATE LISTINGS</Title>
        <SubTitle>
          Open Houses in <span>Nigeria</span>
        </SubTitle>
      </TitleHolder>
      <TaibatHomePage />
      <TitleHolder style={{ marginTop: "50px" }}>
        <Title>MOST RECENT REAL ESTATE LISTINGS</Title>
        <SubTitleClose>
          Close Houses in <span>Lagos</span>
        </SubTitleClose>
      </TitleHolder>
      <Property2 />
    </div>
  );
};

export default Properties;

const TitleHolder = styled.div`
  text-align: center;
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

  span {
    color: blue;
    transition: all 350ms;

    :hover {
      cursor: pointer;
      color: black;
    }
  }
`;
