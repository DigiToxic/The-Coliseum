import React, { useState } from "react";
import styled from "styled-components";

function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);

  return (
    <Container id="FAQ">
      <Head>
        <LeftVine>
          <img src="\assets\design-assets\left vine.png" alt="" />
        </LeftVine>
        <div>
          <h1>FAQ</h1>
        </div>
        <RightVine>
          <img src="\assets\design-assets\right vine.png" alt="" />
        </RightVine>
      </Head>

      <Middle>
        <Right>
          <One>
            <Title onClick={() => setIsVisible(!isVisible)}>
              <h1>What is Coliseum's supply and mint price?</h1>
              <Arrow>
                <img src="\assets\design-assets\Arrow.png" alt="" />
              </Arrow>
            </Title>
            <BurgerNav isVisible={isVisible}>
              <p>
                Coliseum offers two tiers to cater diverse utility demand. Tier
                1 consists of 410 tokens and has a mint price of 0.5E Tier 2
                consists of 123 tokens and has a mint price of 3 Eth.
              </p>
            </BurgerNav>
          </One>
          <Two>
            <Title2 onClick={() => setIsVisible2(!isVisible2)}>
              <h1>What is the difference between the tiers?</h1>
              <Arrow>
                <img src="\assets\design-assets\Arrow.png" alt="" />
              </Arrow>
            </Title2>
            <BurgerNav2 isVisible={isVisible2}>
              <p>
                Tier 1 has access to: The network, exclusive alpha, top tier
                tools and educational events. <br /> <br /> Tier 2 has access
                to: All of the above, in addition to WEB3 marketing, advisory,
                seed rounds and IRL utility reserved exclusively for our most
                elite members
              </p>
            </BurgerNav2>
          </Two>
          <Three>
            <Title3 onClick={() => setIsVisible3(!isVisible3)}>
              <h1>What is the mint structure?</h1>
              <Arrow>
                <img src="\assets\design-assets\Arrow.png" alt="" />
              </Arrow>
            </Title3>
            <BurgerNav3 isVisible={isVisible3}>
              <p>
                Obtain valuable information that you otherwise cannot find on
                social media. Connect with industry leading experts from a
                variety of different fields for valuable insight on numerous
                topics, ranging from WEB3 to real life, that help you dominate
                as an individual in all aspects of your life.
              </p>
            </BurgerNav3>
          </Three>
        </Right>

        <Left>
          <Four>
            <Title4 onClick={() => setIsVisible4(!isVisible4)}>
              <h1>Can my access pass be upgraded post mint?</h1>
              <Arrow>
                <img src="\assets\design-assets\Arrow.png" alt="" />
              </Arrow>
            </Title4>
            <BurgerNav4 isVisible={isVisible4}>
              <p>Yes, your access pass can be upgraded post mint.</p>
            </BurgerNav4>
          </Four>
          <Five>
            <Title5 onClick={() => setIsVisible5(!isVisible5)}>
              <h1>What is your plan for phase 2?</h1>
              <Arrow>
                <img src="\assets\design-assets\Arrow.png" alt="" />
              </Arrow>
            </Title5>
            <BurgerNav5 isVisible={isVisible5}>
              <p>
                Coliseum will be introducing IRL utility for members, which
                includes but is not limited to, hotel discounts and concierge,
                the development of a token gated platform that will host all of
                our content allowing our members to effortlessly connect and
                network with one another, as well as introducing passive income
                through cashflow for our holders.
              </p>
            </BurgerNav5>
          </Five>
          <Six>
            <Title6 onClick={() => setIsVisible6(!isVisible6)}>
              <h1>What will the mint funds be used for?</h1>
              <Arrow>
                <img src="\assets\design-assets\Arrow.png" alt="" />
              </Arrow>
            </Title6>
            <BurgerNav6 isVisible={isVisible6}>
              <p>
                Mint funds will be used for financing Coliseum's private
                research team, tools, uncensored educational events,
                miscellaneous utility costs, and the development of phase 2. The
                mint fund is our runway for two years and allows us to finance
                building cashflow sources for Coliseum for everlasting
                sustainability.
              </p>
            </BurgerNav6>
          </Six>
        </Left>
      </Middle>

      <Footer>
        <a href="https://www.coliseumnft.com/" rel="noreferrer" target="_blank">
          <img
            src="\assets\navbar\ColiseumLogo.png"
            alt=""
            className="ColiseumLogo-bottom"
          />
        </a>
        <UnderFooter>
          <a
            href="https://twitter.com/ColiseumNFT"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="/assets/navbar/twitter.png"
              alt=""
              className="twitter-bottom"
            />
          </a>
          <a
            href="https://discord.com/invite/jCd8AU2QfX"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="/assets/navbar/discord.png"
              alt=""
              className="discord-bottom"
            />
          </a>
          <a href="https://opensea.io/" rel="noreferrer" target="_blank">
            <img
              src="/assets/navbar/opensea.png"
              alt=""
              className="opensea-bottom"
            />
          </a>
        </UnderFooter>
      </Footer>
    </Container>
  );
}

export default FAQ;

const Container = styled.div`
  background-image: url("https://static.wixstatic.com/media/a67ef4_c82e230a1a644de4ba34b38c881ff7e3~mv2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
`;

const Head = styled.div`
  margin-top: 20px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    text-align: center;
  }

  h1 {
    font-size: 35px;
    margin-top: 50px;
  }
`;

const LeftVine = styled.div`
  margin-right: 50px;
  img {
    width: 225px;
  }

  @media (max-width: 950px) {
    img {
      width: 200px;
    }
  }

  @media (max-width: 866px) {
    img {
      width: 175px;
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
    img {
      width: 200px;
    }
  }

  @media (max-width: 866px) {
    img {
      width: 175px;
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

const Middle = styled.div`
  text-align: start;
  display: flex;
  justify-content: space-around;

  @media (max-width: 1275px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Right = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 22px;

  @media (max-width: 1275px) {
    justify-content: center;
    align-items: center;
    margin-left: 0px;
  }

  @media (max-width: 440px) {
    margin-left: 0px;
  }
`;

const Left = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  margin-left: 22px;

  @media (max-width: 1275px) {
    justify-content: center;
    align-items: center;
    margin-left: 0px;
  }

  @media (max-width: 440px) {
    margin-left: 0px;
  }
`;

const One = styled.div``;

const Two = styled.div``;

const Three = styled.div``;

const Four = styled.div``;

const Five = styled.div``;

const Six = styled.div``;

const BurgerNav = styled.div`
  height: ${(props) => (props.isVisible ? "100px" : 0)};
  transition: height 0.3s ease-in-out;
  overflow: hidden;
  margin-left: 50px;
  margin-bottom: 20px;
  width: 600px;

  p {
    font-size: 18px;
    line-height: 25px;
    font-size: 19px;
  }

  @media (max-width: 1500px) {
    margin-left: 90px;
    width: 500px;
  }

  @media (max-width: 1315px) {
    margin-left: 130px;
    width: 450px;
  }

  @media (max-width: 1275px) {
    margin-left: 50px;
    width: 600px;
  }

  @media (max-width: 775px) {
    margin-left: 30px;
    width: 550px;
  }

  @media (max-width: 650px) {
    margin-left: 50px;
    width: 475px;
  }

  @media (max-width: 600px) {
    margin-left: 30px;
    width: 450px;
  }

  @media (max-width: 530px) {
    margin-left: 30px;
    width: 420px;
    height: ${(props) => (props.isVisible ? "120px" : 0)};

    p {
      font-size: 18px;
    }
  }

  @media (max-width: 475px) {
    margin-left: 20px;
    width: 380px;

    p {
      font-size: 17px;
    }
  }

  @media (max-width: 415px) {
    margin-left: 20px;
    width: 320px;
    height: ${(props) => (props.isVisible ? "140px" : 0)};

    p {
      font-size: 16px;
    }
  }
`;

const BurgerNav2 = styled.div`
  height: ${(props) => (props.isVisible ? "120px" : 0)};
  transition: height 0.3s ease-in-out;
  overflow: hidden;
  margin-left: 50px;
  margin-bottom: 20px;
  width: 600px;

  p {
    font-size: 18px;
    line-height: 25px;
    font-size: 19px;
  }

  @media (max-width: 1500px) {
    margin-left: 90px;
    width: 500px;
  }

  @media (max-width: 1315px) {
    margin-left: 130px;
    width: 450px;
  }

  @media (max-width: 1275px) {
    margin-left: 50px;
    width: 625px;
  }

  @media (max-width: 775px) {
    margin-left: 30px;
    width: 550px;
  }

  @media (max-width: 650px) {
    margin-left: 50px;
    width: 475px;
    height: ${(props) => (props.isVisible ? "180px" : 0)};
  }

  @media (max-width: 600px) {
    margin-left: 30px;
    width: 450px;
    height: ${(props) => (props.isVisible ? "165px" : 0)};
  }

  @media (max-width: 530px) {
    margin-left: 30px;
    width: 420px;

    p {
      font-size: 18px;
    }
  }

  @media (max-width: 475px) {
    margin-left: 20px;
    width: 380px;

    p {
      font-size: 17px;
    }
  }

  @media (max-width: 415px) {
    margin-left: 20px;
    width: 320px;
    height: ${(props) => (props.isVisible ? "220px" : 0)};

    p {
      font-size: 16px;
    }
  }
`;

const BurgerNav3 = styled.div`
  height: ${(props) => (props.isVisible ? "120px" : 0)};
  transition: height 0.3s ease-in-out;
  overflow: hidden;
  margin-left: 50px;
  margin-bottom: 20px;
  width: 600px;

  p {
    font-size: 18px;
    line-height: 25px;
    font-size: 19px;
  }

  @media (max-width: 1500px) {
    margin-left: 90px;
    width: 500px;
    height: ${(props) => (props.isVisible ? "140px" : 0)};
  }

  @media (max-width: 1315px) {
    margin-left: 130px;
    width: 450px;
    height: ${(props) => (props.isVisible ? "180px" : 0)};
  }

  @media (max-width: 1275px) {
    margin-left: 50px;
    width: 600px;
    height: ${(props) => (props.isVisible ? "120px" : 0)};
  }

  @media (max-width: 775px) {
    margin-left: 30px;
    width: 550px;
    height: ${(props) => (props.isVisible ? "140px" : 0)};
  }

  @media (max-width: 650px) {
    margin-left: 50px;
    width: 475px;
    height: ${(props) => (props.isVisible ? "150px" : 0)};
  }

  @media (max-width: 600px) {
    margin-left: 30px;
    width: 450px;
    height: ${(props) => (props.isVisible ? "170px" : 0)};
  }

  @media (max-width: 530px) {
    margin-left: 30px;
    width: 420px;

    p {
      font-size: 18px;
    }
  }

  @media (max-width: 475px) {
    margin-left: 20px;
    width: 380px;

    p {
      font-size: 17px;
    }
  }

  @media (max-width: 415px) {
    margin-left: 20px;
    width: 320px;
    height: ${(props) => (props.isVisible ? "210px" : 0)};

    p {
      font-size: 16px;
    }
  }
`;

const BurgerNav4 = styled.div`
  height: ${(props) => (props.isVisible ? "100px" : 0)};
  transition: height 0.3s ease-in-out;
  overflow: hidden;
  margin-left: 50px;
  margin-bottom: 20px;
  width: 700px;

  p {
    font-size: 18px;
    line-height: 25px;
    font-size: 19px;
  }

  @media (max-width: 1500px) {
    margin-left: 90px;
    width: 500px;
  }

  @media (max-width: 1315px) {
    margin-left: 130px;
  }

  @media (max-width: 1275px) {
    margin-left: 50px;
  }

  @media (max-width: 775px) {
    margin-left: 50px;
  }

  @media (max-width: 600px) {
    margin-left: 30px;
    width: 400px;
  }

  @media (max-width: 475px) {
    margin-left: 20px;
    width: 380px;

    p {
      font-size: 17px;
    }
  }

  @media (max-width: 415px) {
    margin-left: 20px;
    width: 320px;

    p {
      font-size: 16px;
    }
  }
`;

const BurgerNav5 = styled.div`
  height: ${(props) => (props.isVisible ? "140px" : 0)};
  transition: height 0.3s ease-in-out;
  overflow: hidden;
  margin-left: 50px;
  margin-bottom: 20px;
  width: 650px;

  p {
    font-size: 18px;
    line-height: 25px;
    font-size: 19px;
  }

  @media (max-width: 1500px) {
    margin-left: 90px;
    width: 500px;
    height: ${(props) => (props.isVisible ? "180px" : 0)};
  }

  @media (max-width: 1315px) {
    margin-left: 130px;
    width: 450px;
    height: ${(props) => (props.isVisible ? "200px" : 0)};
  }

  @media (max-width: 1275px) {
    margin-left: 50px;
    width: 650px;
    height: ${(props) => (props.isVisible ? "140px" : 0)};
  }

  @media (max-width: 775px) {
    margin-left: 30px;
    width: 550px;
  }

  @media (max-width: 650px) {
    margin-left: 50px;
    width: 475px;
    height: ${(props) => (props.isVisible ? "180px" : 0)};
  }

  @media (max-width: 600px) {
    margin-left: 30px;
    width: 450px;
    height: ${(props) => (props.isVisible ? "200px" : 0)};
  }

  @media (max-width: 530px) {
    margin-left: 30px;
    width: 420px;
    height: ${(props) => (props.isVisible ? "200px" : 0)};

    p {
      font-size: 18px;
    }
  }

  @media (max-width: 475px) {
    margin-left: 20px;
    width: 380px;

    p {
      font-size: 17px;
    }
  }

  @media (max-width: 415px) {
    margin-left: 20px;
    width: 320px;
    height: ${(props) => (props.isVisible ? "220px" : 0)};

    p {
      font-size: 16px;
    }
  }
`;

const BurgerNav6 = styled.div`
  height: ${(props) => (props.isVisible ? "120px" : 0)};
  transition: height 0.3s ease-in-out;
  overflow: hidden;
  margin-left: 50px;
  margin-bottom: 20px;
  width: 650px;

  p {
    font-size: 18px;
    line-height: 25px;
    font-size: 19px;
  }

  @media (max-width: 1500px) {
    margin-left: 90px;
    width: 500px;
    height: ${(props) => (props.isVisible ? "150px" : 0)};
  }

  @media (max-width: 1315px) {
    margin-left: 130px;
    width: 450px;
    height: ${(props) => (props.isVisible ? "180px" : 0)};
  }

  @media (max-width: 1275px) {
    margin-left: 50px;
    width: 650px;
    height: ${(props) => (props.isVisible ? "120px" : 0)};
  }

  @media (max-width: 775px) {
    margin-left: 30px;
    width: 550px;
    height: ${(props) => (props.isVisible ? "140px" : 0)};
  }

  @media (max-width: 650px) {
    margin-left: 50px;
    width: 475px;
    height: ${(props) => (props.isVisible ? "150px" : 0)};
  }

  @media (max-width: 600px) {
    margin-left: 30px;
    width: 450px;
    height: ${(props) => (props.isVisible ? "180px" : 0)};
  }

  @media (max-width: 530px) {
    margin-left: 30px;
    width: 420px;
    height: ${(props) => (props.isVisible ? "220px" : 0)};

    p {
      font-size: 18px;
    }
  }

  @media (max-width: 475px) {
    margin-left: 20px;
    width: 380px;

    p {
      font-size: 17px;
    }
  }

  @media (max-width: 415px) {
    margin-left: 20px;
    width: 320px;

    p {
      font-size: 16px;
    }
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: end;
  width: 720px;

  margin-bottom: 20px;
  background-image: url("https://static.wixstatic.com/media/a67ef4_a58691a592bf47f4bd8c6c4fce9655aa~mv2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 720px 200px;

  h1 {
    font-size: 23px;
  }

  @media (max-width: 1485px) {
    background-size: 650px 100px;
    width: 650px;
  }

  @media (max-width: 1345px) {
    background-size: 600px 100px;
    width: 600px;

    h1 {
      font-size: 21px;
    }
  }

  @media (max-width: 1275px) {
    background-size: 720px 100px;
    width: 720px;
  }

  @media (max-width: 775px) {
    background-size: 600px 100px;
    width: 600px;
  }

  @media (max-width: 650px) {
    background-size: 550px 100px;
    width: 550px;
  }

  @media (max-width: 600px) {
    background-size: 500px 100px;
    width: 500px;

    h1 {
      font-size: 19px;
    }
  }

  @media (max-width: 530px) {
    background-size: 450px 100px;
    width: 450px;

    h1 {
      font-size: 17px;
    }
  }

  @media (max-width: 475px) {
    background-size: 400px 100px;
    width: 400px;

    h1 {
      font-size: 15px;
    }
  }

  @media (max-width: 415px) {
    background-size: 350px 100px;
    width: 350px;

    h1 {
      font-size: 11px;
    }
  }
`;

const Title2 = styled(Title)``;

const Title3 = styled(Title)``;

const Title4 = styled(Title)`
  @media (max-width: 650px) {
    h1 {
      font-size: 15px;
    }
  }

  @media (max-width: 530px) {
    h1 {
      font-size: 16px;
    }
  }

  @media (max-width: 475px) {
    h1 {
      font-size: 14px;
    }
  }

  @media (max-width: 415px) {
    h1 {
      font-size: 11px;
    }
  }
`;

const Title5 = styled(Title)``;

const Title6 = styled(Title)``;

const Arrow = styled.div`
  margin-bottom: 7px;
  margin-left: 10px;
  img {
    width: 40px;
  }

  @media (max-width: 530px) {
    img {
      width: 35px;
    }
  }

  @media (max-width: 475px) {
    img {
      width: 30px;
    }
  }

  @media (max-width: 415px) {
    margin-bottom: 2px;

    img {
      width: 28px;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 110px;
`;

const UnderFooter = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
`;
