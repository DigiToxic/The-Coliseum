import React from "react";
import styled from "styled-components";

function Specifics() {
  return (
    <Container id="Specifics">
      <Head>
        <LeftVine>
          <img src="\assets\design-assets\left vine.png" alt="" />
        </LeftVine>
        <div>
          <h1>Utility Specifics</h1>
        </div>
        <RightVine>
          <img src="\assets\design-assets\right vine.png" alt="" />
        </RightVine>
      </Head>

      <First>
        <Right1>
          <img src="\assets\mainContent\Specific1.png" alt="" />
        </Right1>
        <Left1>
          <h1>Exclusive Alpha</h1>
          <p>
            With a Coliseum membership, receive exclusive daily alpha on the
            very best investment opportunities. Our alpha section is equipped
            with a specialized team for each of the following categories: NFTs,
            Cryptocurrency, Stock Market, DEFI Education and analysis, Tezos
            Education and Analysis, Ecommerce Education, High Ticket Sales
            education, and Crypto Gaming.
          </p>
        </Left1>
      </First>

      <Second>
        <Right2>
          <img src="\assets\mainContent\Specific2.png" alt="" />
        </Right2>
        <Left2>
          <h1>Top Tier Tools</h1>
          <p>
            A Coliseum membership will unlock access to: botting tools, contract
            data tools, profit and loss calculators, personalized wallet
            monitors, gas calculators, pending mints monitor, and a NFT analysis
            tool. Coliseum will be using a percentage from mint and royalties to
            develop our own custom tools as well.
          </p>
        </Left2>
      </Second>

      <Three>
        <Right3>
          <img src="\assets\mainContent\Specific3.png" alt="" />
        </Right3>
        <Left3>
          <h1>Education</h1>
          <p>
            Obtain valuable information that you otherwise cannot find on social
            media. Connect with industry leading experts from a variety of
            different fields for valuable insight on numerous topics, ranging
            from WEB3 to real life, that help you dominate as an individual in
            all aspects of your life.
          </p>
        </Left3>
      </Three>

      <Four>
        <Right4>
          <img src="\assets\mainContent\Specific4.png" alt="" />
        </Right4>
        <Left4>
          <h1>Gladiator Edge</h1>
          <p>
            Thousands of NFT projects start development every single month yet
            only a handful make it to the top 1%. With Coliseum's WEB3 marketing
            utility, ensure that your product gets heard loud and clear. Seed
            rounds are impossible to access unless you manage or run a VC. With
            tokenization, bringing this opportunity to the average investor is
            possible. Through Coliseum membership, vetted and quality seed round
            opportunities are delivered to you on a tray.
          </p>
        </Left4>
      </Four>
    </Container>
  );
}

export default Specifics;

const Container = styled.div`
  background-color: rgb(9, 9, 9);
  height: 1500px;

  @media (max-width: 900px) {
    height: 2300px;
  }

  @media (max-width: 530px) {
    height: 2600px;
  }
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    text-align: center;
  }

  h1 {
    color: rgb(199, 171, 85);
  }
`;

const LeftVine = styled.div`
  margin-right: 50px;
  img {
    width: 225px;
  }

  @media (max-width: 950px) {
    margin-right: 30px;
    img {
      width: 200px;
    }
  }

  @media (max-width: 866px) {
    img {
      width: 175px;
    }
  }

  @media (max-width: 765px) {
    img {
      width: 150px;
    }
  }

  @media (max-width: 670px) {
    margin-right: 0px;
    margin-left: 0px;
    img {
      display: none;
    }
  }
`;

const RightVine = styled.div`
  margin-left: 50px;
  img {
    width: 225px;
  }

  @media (max-width: 950px) {
    margin-left: 30px;
    img {
      width: 200px;
    }
  }

  @media (max-width: 866px) {
    img {
      width: 175px;
    }
  }

  @media (max-width: 765px) {
    img {
      width: 150px;
    }
  }

  @media (max-width: 670px) {
    margin-right: 0px;
    margin-left: 0px;
    img {
      display: none;
    }
  }
`;

const First = styled.div`
  text-align: start;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  line-height: 30px;

  h1 {
    width: 910px;
    text-align: start;
  }
  p {
    width: 910px;
    font-size: 19px;
  }

  @media (max-width: 900px) {
    justify-content: center;
    flex-direction: column;
  }

  @media (max-width: 1215px) {
    h1 {
      width: 610px;
    }
    p {
      width: 610px;
    }
  }

  @media (max-width: 630px) {
    h1 {
      width: 510px;
    }
    p {
      width: 510px;
      font-size: 18px;
    }
  }

  @media (max-width: 530px) {
    h1 {
      width: 410px;
    }
    p {
      width: 410px;
    }
  }

  @media (max-width: 430px) {
    h1 {
      width: 360px;
    }
    p {
      width: 360px;
      font-size: 17px;
    }
  }
`;

const Second = styled.div`
  text-align: start;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(11, 13, 18);
  padding-top: 30px;
  padding-bottom: 30px;
  line-height: 30px;

  h1 {
    width: 910px;
    text-align: start;
  }
  p {
    width: 910px;
    font-size: 19px;
  }

  @media (max-width: 1215px) {
    h1 {
      width: 610px;
    }
    p {
      width: 610px;
    }
  }

  @media (max-width: 900px) {
    justify-content: center;
    flex-direction: column;
  }

  @media (max-width: 630px) {
    h1 {
      width: 510px;
    }
    p {
      width: 510px;
      font-size: 18px;
    }
  }

  @media (max-width: 530px) {
    h1 {
      width: 410px;
    }
    p {
      width: 410px;
    }
  }

  @media (max-width: 430px) {
    h1 {
      width: 360px;
    }
    p {
      width: 360px;
      font-size: 17px;
    }
  }
`;

const Three = styled(First)`
  @media (max-width: 900px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const Four = styled(First)`
  background-color: rgb(11, 13, 18);

  @media (max-width: 900px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const Right1 = styled.div``;

const Right2 = styled.div`
  margin-left: 50px;
  }
`;

const Right3 = styled.div``;

const Right4 = styled.div``;

const Left1 = styled.div``;

const Left2 = styled.div`
  margin-left: 50px;

  @media (max-width: 900px) {
    margin-left: 0px;
  }
`;

const Left3 = styled.div``;

const Left4 = styled.div``;
