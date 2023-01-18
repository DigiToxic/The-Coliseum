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
              <Arrow rotation={rotation} onClick={handleClick2}>
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
  height: 900px;

  @media (max-width: 1315px) {
    height: 1000px;
  }

  @media (max-width: 1215px) {
    height: 1300px;
  }
`;

const Head = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  text-align: center;

  h1 {
    font-size: 35px;
    line-height: 1;
  }
`;

const Middle = styled.div`
  text-align: start;
  display: flex;
  justify-content: space-around;
  height: 500px;

  @media (max-width: 1215px) {
    flex-direction: column;
    justify-content: center;
    height: 1000px;
  }
`;

const Right = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 1215px) {
    justify-content: center;
    align-items: center;
  }
`;

const Left = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 1215px) {
    justify-content: center;
    align-items: center;
  }
`;

const One = styled.div`
  margin-left: -30px;
  width: 700px;
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
`;

const BurgerNav4 = styled.div`
  height: ${(props) => (props.isVisible ? "100px" : 0)};
  transition: height 0.3s ease-in-out;
  overflow: hidden;
  margin-left: 50px;

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
    width: 450px;
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
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-left: 50px;
  background-image: url("https://static.wixstatic.com/media/a67ef4_a58691a592bf47f4bd8c6c4fce9655aa~mv2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 700px 100px;

  h1 {
    font-size: 23px;
  }

  @media (max-width: 1500px) {
    background-size: 600px 75px;

    h1 {
      font-size: 20px;
    }
  }

  @media (max-width: 1315px) {
    background-size: 500px 75px;
    padding-left: 20px;

    h1 {
      font-size: 17px;
    }
  }

  @media (max-width: 1215px) {
    background-size: 700px 100px;

    h1 {
      font-size: 23px;
    }
  }

  @media (max-width: 825px) {
    background-size: 600px 100px;

    h1 {
      font-size: 20px;
    }
  }

  @media (max-width: 650px) {
    background-size: 500px 100px;

    h1 {
      font-size: 18px;
    }
  }

  @media (max-width: 540px) {
    background-size: 400px 75px;

    h1 {
      font-size: 14px;
    }
  }
`;

const Title2 = styled(Title)`
  @media (max-width: 1500px) {
    h1 {
      padding-left: 10px;
    }

    @media (max-width: 825px) {
      padding-left: 20px;
    }
  }

  @media (max-width: 650px) {
    h1 {
      padding-left: 5px;
    }
  }
`;

const Title3 = styled(Title)`
  padding-left: 240px;

  @media (max-width: 1500px) {
    h1 {
      margin-left: -30px;
    }

    @media (max-width: 825px) {
      h1 {
        margin-left: -10px;
      }
    }
  }

  @media (max-width: 1315px) {
    padding-left: 180px;
  }

  @media (max-width: 650px) {
    padding-left: 160px;
  }

  @media (max-width: 540px) {
    padding-left: 130px;
  }
`;

const Title4 = styled(Title)`
  padding-left: 20px;

  @media (max-width: 825px) {
    h1 {
      margin-left: -20px;
    }
  }
`;

const Title5 = styled(Title)`
  padding-left: 180px;

  @media (max-width: 1500px) {
    h1 {
      margin-left: -20px;
    }
  }

  @media (max-width: 1315px) {
    padding-left: 160px;
  }

  @media (max-width: 825px) {
    h1 {
      margin-left: -10px;
    }
  }

  @media (max-width: 650px) {
    padding-left: 140px;
  }

  @media (max-width: 540px) {
    padding-left: 110px;
  }
`;

const Title6 = styled(Title)`
  padding-left: 100px;

    h1 {
      margin-left: -20px;
    }
  }

  @media (max-width: 1315px) {
    padding-left: 100px;
  }

  @media (max-width: 825px) {
    h1 {
      margin-left: -30px;
    }
  }

  @media (max-width: 650px) {
    padding-left: 80px;
  }
`;

const Arrow = styled.div`
  margin-left: 10px;
  img {
    width: 40px;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

const UnderFooter = styled.div`
  margin-top: 30px;
`;
