import React from "react";
import styled from "styled-components";

function Body() {
  return (
    <Container>
      <Middle>
        <img src="/assets/mainContent/TitleOne.png" alt="" className="TitleOne" />
        <img src="/assets/background/ColLogo.png" alt="" className="ColLogo" />
        <img src="/assets/mainContent/TitleTwo.png" alt="" className="TitleTwo" />
      </Middle>

      <Under>
        <img src="/assets/mainContent/WorkSmartNotHard.png" alt="" />
      </Under>
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
  height: 800px;
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
margin-top: 50px;

  img {
    width: 800px;
  }
`;
