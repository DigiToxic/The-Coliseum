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
        <img src="/assets/mainContent/WorkSmartNotHard.png" alt="" />
      </Under>

      <Video>
        <div>
          <h1>About Coliseum</h1>
          <p>
            Coliseum was created due to a need and market gap we spotted in the
            WEB3 space: An all in one access pass. An access pass that not only
            gives you more than everything you need to succeed in WEB3 but is a
            powerhouse equivalent to none other and serves as a base of
            operations for you to navigate WEB3 to the top.{" "}
          </p>
        </div>
      </Video>
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
`;

const Middle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Under = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  img {
    width: 800px;
  }
`;

const Video = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 125px;

  p {
    font-size: 20px;
    line-height: 25px;
  }

  div {
    width: 800px;
  }
`;
