import React from "react";
import styled from "styled-components";

function Body() {
  return (
    <Container>
      <Middle>
        <img
          src="/assets/mainContent/TitleOne.png"
          alt=""
          className="TitleOne"
        />
        <img src="/assets/background/ColLogo.png" alt="" className="ColLogo" />
        <img
          src="/assets/mainContent/TitleTwo.png"
          alt=""
          className="TitleTwo"
        />
      </Middle>

      <Under>
        <div>
          <h1>Work Smart Not Hard</h1>
          <p>
            Coliseum memmbership unlocks access to exclusive alpha, unparalleled
            network, industry leading tools, education and everything you need
            to skip the trenches.
          </p>
        </div>
      </Under>

      <About>
        <div>
          <h1>About Coliseum</h1>
          <p>
            Coliseum was created due to a need and market gap we spotted in the
            WEB3 space: An all in one access pass. An access pass that not only
            gives you more than everything you need to succeed in WEB3 but is a
            powerhouse equivalent to none other and serves as a base of
            operations for you to navigate WEB3 to the top.
          </p>
        </div>
      </About>
    </Container>
  );
}

export default Body;

const Container = styled.div`
  background-image: url("https://static.wixstatic.com/media/a67ef4_29f1a49b50ea4a97af2802af9e09214a~mv2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 1200px;
  margin-top: -10rem;
  padding-top: 10rem;

  @media (max-width: 1250px) {
    height: 1000px;
  }

  @media (max-width: 1100px) {
    height: 1500px;
  }

  @media (max-width: 515px) {
    height: 1500px;
  }
`;

const Middle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Under = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 100px;

  div {
    width: 600px;
  }

  p {
    font-size: 20px;
    line-height: 25px;
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 650px) {
    div {
      width: 500px;
    }
  }

  @media (max-width: 500px) {
    div {
      width: 450px;
    }

    p {
      font-size: 18px;
    }
  }

  @media (max-width: 450px) {
    div {
      width: 400px;
    }
  }
`;

const About = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 125px;

  p {
    font-size: 20px;
    line-height: 25px;
    color: rgba(255, 255, 255, 0.8)
  }

  div {
    width: 800px;
  }

  @media (max-width: 1401px) {
    h1 {
      font-size: 32px;
    }

    p {
      font-size: 19px;
    }

  @media (max-width: 1250px) {
    h1 {
      font-size: 28px;
    }

    p {
      font-size: 15px;
    }

  @media (max-width: 1100px) {
    h1 {
      font-size: 2em;
    }

    p {
      font-size: 20px;
    }
  }

  @media (max-width: 825px) {
    div {
      width: 600px;
    }

    h1 {
      font-size: 30px;
    }

    p {
      font-size: 20px;
    }
  }

  @media (max-width: 650px) {
    div {
      width: 550px;
    }

    p {
      font-size: 18px;
    }
  }

  @media (max-width: 555px) {
    div {
      width: 500px;
    }

    p {
      font-size: 18px;
    }
  }

  @media (max-width: 515px) {
    div {
      width: 400px;
    }
  }

  @media (max-width: 410px) {
    div {
      width: 350px;
    }
  }
`;
