import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <Container>
      <Right>
        <img
          src="/assets/navbar/ColiseumLogo.png"
          alt=""
          className="ColiseumLogo"
        />
        <a href="https://www.coliseumnft.com/" rel="noreferrer" target="_blank">
          <img src="/assets/navbar/barrier.png" alt="" className="barrier" />
        </a>
        <a
          href="https://twitter.com/ColiseumNFT"
          rel="noreferrer"
          target="_blank"
        >
          <img src="/assets/navbar/twitter.png" alt="" className="twitter" />
        </a>
        <a
          href="https://discord.com/invite/jCd8AU2QfX"
          rel="noreferrer"
          target="_blank"
        >
          <img src="/assets/navbar/discord.png" alt="" className="discord" />
        </a>
        <a href="https://opensea.io/" rel="noreferrer" target="_blank">
          <img src="/assets/navbar/opensea.png" alt="" className="opensea" />
        </a>
      </Right>

      <Middle>
        <img src="/assets/navbar/ColiseumText.png" alt="" />
      </Middle>

      <Left>
        <img src="/assets/navbar/Utility.png" alt="" className="Utility" />
        <img src="/assets/navbar/Specifics.png" alt="" className="Specifics" />
        <img src="/assets/navbar/faqs.png" alt="" className="faqs" />
        <img src="/assets/navbar/enter1000.png" alt="" className="enter1000" />
      </Left>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  background-image: url("https://static.wixstatic.com/media/a67ef4_29f1a49b50ea4a97af2802af9e09214a~mv2.jpg");
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;

const Middle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 14%;
  img {
    width: 300px;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
