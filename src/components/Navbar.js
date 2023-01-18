import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

function Navbar() {
  const [burgerStatus, setBurgerStatus] = useState(false);

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
        <Link activeClass="active" to="Utility" spy={true} smooth={true}>
          <img src="/assets/navbar/Utility.png" alt="" className="Utility" />
        </Link>
        <Link to="Specifics" spy={true} smooth={true}>
          <img
            src="/assets/navbar/Specifics.png"
            alt=""
            className="Specifics"
          />
        </Link>
        <Link to="FAQ" spy={true} smooth={true}>
          <img src="/assets/navbar/faqs.png" alt="" className="faqs" />
        </Link>
        <a href="https://cw-ak.vercel.app/mint">
          <img
            src="/assets/navbar/enter1000.png"
            alt=""
            className="enter1000"
          />
        </a>
      </Left>

      <OpenWrapper>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          color="white"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setBurgerStatus(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
      </OpenWrapper>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            height="50px"
            width="50px"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setBurgerStatus(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </CloseWrapper>
        <li>
          <Link
            to="Kingdom"
            spy={true}
            smooth={true}
            onClick={() => setBurgerStatus(false)}
          >
            Kingdom
          </Link>
        </li>
        <li>
          <Link
            to="Team"
            spy={true}
            smooth={true}
            onClick={() => setBurgerStatus(false)}
          >
            Nobles
          </Link>
        </li>
        <li>
          <Link
            to="Elixir"
            spy={true}
            smooth={true}
            onClick={() => setBurgerStatus(false)}
          >
            Elixirs
          </Link>
        </li>
        <a
          href="https://twitter.com/ItsFadedNFT?s=20&t=E40QScTf_zPcpT8cOumLLg"
          rel="noreferrer"
          target="_blank"
        >
          <img src="/images/twitter.png" alt="" />
        </a>
        <img src="/images/opensea.png" alt="" />
        <img src="/images/etherscan.png" alt="" />
      </BurgerNav>
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
  width: 72%;
  position: absolute;
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 165%;
  position: absolute;

  @media (max-width: 1215px) {
    display: none;
  }
`;

const OpenWrapper = styled.div`
  display: none;
  margin-right: 20px;

  svg {
    width: 60px;
    height: 60px;
    color: rgb(199, 171, 85);
  }

  @media (max-width: 1215px) {
    display: initial;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgb(238, 213, 238);
  width: 35%;
  z-index: 2;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s;
  display: none;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    font-weight: bold;
  }

  img {
    width: 40px;
    margin-right: 20px;
    margin-top: 40px;
  }

  @media (max-width: 1215px) {
    display: initial;
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: end;
`;
