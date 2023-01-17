import React from "react";
import styled from "styled-components";

function Specifics() {
  return (
    <Container>
      <Head>
        <h1>Utility Specifics</h1>
      </Head>

      <First>
        <Right>
          <img src="\assets\mainContent\Specific1.png" alt="" />
        </Right>
        <Left>
          <h1>Exclusive Alpha</h1>
          <p>
            With a Coliseum membership, receive exclusive daily alpha on the
            very best investment opportunities. Our alpha section is equipped
            with a specialized team for each of the following categories: NFTs,
            Cryptocurrency, Stock Market, DEFI Education and analysis, Tezos
            Education and Analysis, Ecommerce Education, High Ticket Sales
            education, and Crypto Gaming.
          </p>
        </Left>
      </First>

      <Second>
        <Right>
          <img src="\assets\mainContent\Specific2.png" alt="" />
        </Right>
        <Left>
          <h1>Top Tier Tools</h1>
          <p>
            A Coliseum membership will unlock access to: botting tools, contract
            data tools, profit and loss calculators, personalized wallet
            monitors, gas calculators, pending mints monitor, and a NFT analysis
            tool. Coliseum will be using a percentage from mint and royalties to
            develop our own custom tools as well.
          </p>
        </Left>
      </Second>

      <First>
        <Right>
          <img src="\assets\mainContent\Specific3.png" alt="" />
        </Right>
        <Left>
          <h1>Education</h1>
          <p>
            Obtain valuable information that you otherwise cannot find on social
            media. Connect with industry leading experts from a variety of
            different fields for valuable insight on numerous topics, ranging
            from WEB3 to real life, that help you dominate as an individual in
            all aspects of your life.
          </p>
        </Left>
      </First>

      <Second>
        <Right>
          <img src="\assets\mainContent\Specific4.png" alt="" />
        </Right>
        <Left>
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
        </Left>
      </Second>
    </Container>
  );
}

export default Specifics;

const Container = styled.div`
  background-color: rgb(9, 9, 9);
  heigt: 1500px;
`;

const Head = styled.div`
  text-align: center;
  h1 {
    color: rgb(199, 171, 85);
    margin-bottom: 150px;
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

  h1 {
    width: 910px;
    text-align: start;
    color: rgb(199, 171, 85);
  }

  p {
    width: 900px;
    color: white;
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

  h1 {
    width: 910px;
    text-align: start;
    color: rgb(199, 171, 85);
  }

  p {
    width: 900px;
    color: white;
  }
`;

const Right = styled.div``;

const Left = styled.div``;