import React, { useState } from "react";
import styled from "styled-components";

function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);

  const [rotation, setRotation] = useState(0);
  const [rotation2, setRotation2] = useState(0);
  const [rotation3, setRotation3] = useState(0);
  const [rotation4, setRotation4] = useState(0);
  const [rotation5, setRotation5] = useState(0);
  const [rotation6, setRotation6] = useState(0);

  const handleClick = () => {
    setRotation(rotation + 180);
  };

  const handleClick2 = () => {
    setRotation2(rotation2 + 180);
  };

  const handleClick3 = () => {
    setRotation3(rotation3 + 180);
  };

  const handleClick4 = () => {
    setRotation4(rotation4 + 180);
  };

  const handleClick5 = () => {
    setRotation5(rotation5 + 180);
  };

  const handleClick6 = () => {
    setRotation6(rotation6 + 180);
  };

  return (
    <Container id="FAQ">
      <Head>
        <h1>FAQ</h1>
      </Head>

      <Middle>
        <Right>
          <One>
            <Title>
              <h1 onClick={() => setIsVisible(!isVisible)}>
                What is Coliseum's supply and mint price?
              </h1>
              <Arrow rotation={rotation} onClick={handleClick}>
                <img
                  src="\assets\design-assets\Arrow.png"
                  alt=""
                  onClick={() => setIsVisible(!isVisible)}
                />
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
            <Title2>
              <h1 onClick={() => setIsVisible2(!isVisible2)}>
                What is the difference between the tiers?
              </h1>
              <Arrow rotation={rotation} onClick={handleClick}>
                <img
                  src="\assets\design-assets\Arrow.png"
                  alt=""
                  onClick={() => setIsVisible2(!isVisible2)}
                />
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
            <Title3>
              <h1 onClick={() => setIsVisible3(!isVisible3)}>
                What is the mint structure?
              </h1>
              <Arrow rotation={rotation3} onClick={handleClick3}>
                <img
                  src="\assets\design-assets\Arrow.png"
                  alt=""
                  onClick={() => setIsVisible3(!isVisible3)}
                />
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
            <Title4>
              <h1 onClick={() => setIsVisible4(!isVisible4)}>
                Can my access pass be upgraded post mint?
              </h1>
              <Arrow rotation={rotation4} onClick={handleClick4}>
                <img
                  src="\assets\design-assets\Arrow.png"
                  alt=""
                  onClick={() => setIsVisible4(!isVisible4)}
                />
              </Arrow>
            </Title4>
            <BurgerNav4 isVisible={isVisible4}>
              <p>Yes, your access pass can be upgraded post mint.</p>
            </BurgerNav4>
          </Four>
          <Five>
            <Title5>
              <h1 onClick={() => setIsVisible5(!isVisible5)}>
                What is your plan for phase 2?
              </h1>
              <Arrow rotation={rotation5} onClick={handleClick5}>
                <img
                  src="\assets\design-assets\Arrow.png"
                  alt=""
                  onClick={() => setIsVisible5(!isVisible5)}
                />
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
            <Title6>
              <h1 onClick={() => setIsVisible6(!isVisible6)}>
                What will the mint funds be used for?
              </h1>
              <Arrow rotation={rotation6} onClick={handleClick6}>
                <img
                  src="\assets\design-assets\Arrow.png"
                  alt=""
                  onClick={() => setIsVisible6(!isVisible6)}
                />
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
            className="ColiseumLogo"
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
  height: 800px;
`;

const Head = styled.div`
  margin-top: 120px;
  margin-bottom: 50px;
  text-align: center;
  
  h1 {
    font-size: 35px;
  }
`;

const Middle = styled.div`
  text-align: start;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 500px;
`;

const Right = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Left = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const One = styled.div`
  margin-left: -30px;
`;

const Two = styled(One)``;

const Three = styled(One)``;

const Four = styled(One)``;

const Five = styled(One)``;

const Six = styled(One)``;

const BurgerNav = styled.div`
  height: ${(props) => (props.isVisible ? "100px" : 0)};
  transition: height 0.3s ease-in-out;
  overflow: hidden;
  margin-left: 40px;
  width: 800px;

  p {
    font-size: 18px;
    line-height: 25px;
    font-size: 19px;
  }
`;

const BurgerNav2 = styled.div`
  height: ${(props) => (props.isVisible ? "120px" : 0)};
  transition: height 0.3s ease-in-out;
  overflow: hidden;
  margin-left: 40px;
  width: 800px;

  p {
    font-size: 18px;
    line-height: 25px;
    font-size: 19px;
  }
`;

const BurgerNav3 = styled.div`
  height: ${(props) => (props.isVisible ? "100px" : 0)};
  transition: height 0.3s ease-in-out;
  overflow: hidden;
  margin-left: 40px;
  width: 800px;

  p {
    font-size: 18px;
    line-height: 25px;
    font-size: 19px;
  }
`;

const BurgerNav4 = styled.div`
  height: ${(props) => (props.isVisible ? "100px" : 0)};
  transition: height 0.3s ease-in-out;
  overflow: hidden;
  margin-left: 40px;
  width: 800px;

  p {
    font-size: 18px;
    line-height: 25px;
    font-size: 19px;
  }
`;

const BurgerNav5 = styled.div`
  height: ${(props) => (props.isVisible ? "120px" : 0)};
  transition: height 0.3s ease-in-out;
  overflow: hidden;
  margin-left: 40px;
  width: 800px;

  p {
    font-size: 18px;
    line-height: 25px;
    font-size: 19px;
  }
`;

const BurgerNav6 = styled.div`
  height: ${(props) => (props.isVisible ? "100px" : 0)};
  transition: height 0.3s ease-in-out;
  overflow: hidden;
  margin-left: 40px;
  width: 800px;

  p {
    font-size: 18px;
    line-height: 25px;
    font-size: 19px;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-left: 50px;
  padding-top: 50px;
  padding-bottom: 50px;
  background-image: url("https://static.wixstatic.com/media/a67ef4_a58691a592bf47f4bd8c6c4fce9655aa~mv2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 700px 100px;

  h1 {
    font-size: 23px;
  }
`;

const Title2 = styled(Title)``;

const Title3 = styled(Title)`
  padding-left: 240px;
`;

const Title4 = styled(Title)`
  padding-left:20px;
`;

const Title5 = styled(Title)`
  padding-left: 180px;
`;

const Title6 = styled(Title)`
  padding-left: 100px;
`;

const Arrow = styled.div`
  margin-left: 10px;
  img {
    width: 40px;
  }
`;

const Footer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UnderFooter = styled.div`
  margin-top: 30px;
`;
