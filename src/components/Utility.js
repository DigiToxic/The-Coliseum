import React from "react";
import styled from "styled-components";

function Utility() {
  return (
    <Container id="Utility">
      <HeadUtility>
        <h1>Coliseum's Utility</h1>
        <p>The following sets Coliseum apart from the rest :</p>
      </HeadUtility>

      <UtilityCoin>
        <Left>
          <One>
            <div>
              <img src="\assets\mainContent\HeadOne.png" alt="" />
            </div>
            <TextOne>
              <h1>Exclusive Alpha</h1>
              <p>
                Exclusivity and quality go hand in hand, alpha isn't alpha if
                thousands of people have access to it. Gain restricted access to
                Coliseum's private research team.
              </p>
            </TextOne>
          </One>
          <One>
            <div>
              <img src="\assets\mainContent\HeadThree.png" alt="" />
            </div>
            <TextOne>
              <h1>Top Tier Tools</h1>
              <p>
                Having access to top tier tools to give you an edge against the
                player vs player game that WEB3 is, is a necessity - not a
                choice. Unlock these convenient industry leading tools to
                succeed.
              </p>
            </TextOne>
          </One>
        </Left>
        <Right>
          <Two>
            <div>
              <img src="\assets\mainContent\HeadTwo.png" alt="" />
            </div>
            <TextOne>
              <h1>Education</h1>
              <p>
                Knowledge is power. Coliseum will be hosting uncensored
                educational sessions with well renowned experts in a vast
                variety of fields.
              </p>
            </TextOne>
          </Two>
          <Two>
            <div>
              <img src="\assets\mainContent\HeadFour.png" alt="" />
            </div>
            <TextOne>
              <h1>Additional Utility</h1>
              <p>
                Coliseum offers WEB3 marketing as an added utility for vetted
                projects created by our members. Acquire access to our
                first-class marketing team to ensure that your project stands
                out from the rest. Crypto Gaming is a sector of WEB3 with the
                highest potential of mass adoption. Gain access to crypto gaming
                seed rounds through Coliseum.
              </p>
            </TextOne>
          </Two>
        </Right>
      </UtilityCoin>
    </Container>
  );
}

export default Utility;

const Container = styled.div`
  background-image: url("https://static.wixstatic.com/media/a67ef4_b1c304c653884e8e820c46381d189895~mv2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  height: 900px;
`;

const HeadUtility = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  text-align: center;
  h1 {
    color: rgb(199, 171, 85);
  }

  p {
    color: white;
    font-size: 20px;
  }
`;

const UtilityCoin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1380px) {
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1380px) {
  }
`;

const One = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 600px;
  margin-right: 50px;
  margin-bottom: 100px;

  img {
    width: 200px;
    margin-right: 20px;
  }

  @media (max-width: 1380px) {
    margin-left: 50px;
    img {
      width: 150px;
      margin-right: 20px;
    }
  }
`;

const Two = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 700px;
  margin-bottom: 100px;

  img {
    width: 200px;
    margin-right: 20px;
  }

  @media (max-width: 1380px) {
    img {
      width: 150px;
      margin-right: 20px;
    }
  }

  @media (max-width: 1380px) {
    margin-left: -100px;
  }
`;

const TextOne = styled.div`
  h1 {
    margin-top: 10px;
  }

  p {
    font-size: 19px;
  }

  @media (max-width: 1380px) {
    width: 400px;
    h1 {
      margin-top: 10px;
    }
  
    p {
      font-size: 17px;
    }
  }
`;
