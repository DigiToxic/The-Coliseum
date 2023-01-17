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
    <Container>
      <Head>
        <h1>FAQ</h1>
      </Head>

      <Middle>
        <Right>
          <One>
            <h1 onClick={() => setIsVisible(!isVisible)}>
              What is Coliseum's supply and mint price?
            </h1>
            <BurgerNav isVisible={isVisible}>
              <p>
                Coliseum offers two tiers to cater diverse utility demand. Tier
                1 consists of 410 tokens and has a mint price of 0.5E Tier 2
                consists of 123 tokens and has a mint price of 3 Eth.
              </p>
            </BurgerNav>
          </One>
          <Two>
            <h1 onClick={() => setIsVisible2(!isVisible2)}>
              What is the difference between the tiers?
            </h1>
            <BurgerNav isVisible={isVisible2}>
              <p>
                Tier 1 has access to: The network, exclusive alpha, top tier
                tools and educational events. <br /> <br /> Tier 2 has access
                to: All of the above, in addition to WEB3 marketing, advisory,
                seed rounds and IRL utility reserved exclusively for our most
                elite members
              </p>
            </BurgerNav>
          </Two>
          <Three>
            <h1 onClick={() => setIsVisible3(!isVisible3)}>
              What is the mint structure?
            </h1>
            <BurgerNav isVisible={isVisible3}>
              <p>
                Obtain valuable information that you otherwise cannot find on
                social media. Connect with industry leading experts from a
                variety of different fields for valuable insight on numerous
                topics, ranging from WEB3 to real life, that help you dominate
                as an individual in all aspects of your life.
              </p>
            </BurgerNav>
          </Three>
        </Right>
        <Left>
          <One>
            <h1 onClick={() => setIsVisible4(!isVisible4)}>
              Can my access pass be upgraded post mint?
            </h1>
            <BurgerNav isVisible={isVisible4}>
              <p>Yes, your access pass can be upgraded post mint.</p>
            </BurgerNav>
          </One>
          <Two>
            <h1 onClick={() => setIsVisible5(!isVisible5)}>
              What is your plan for phase 2?
            </h1>
            <BurgerNav isVisible={isVisible5}>
              <p>
                Coliseum will be introducing IRL utility for members, which
                includes but is not limited to, hotel discounts and concierge,
                the development of a token gated platform that will host all of
                our content allowing our members to effortlessly connect and
                network with one another, as well as introducing passive income
                through cashflow for our holders.
              </p>
            </BurgerNav>
          </Two>
          <Three>
            <h1 onClick={() => setIsVisible6(!isVisible6)}>
              What will the mint funds be used for?
            </h1>
            <BurgerNav isVisible={isVisible6}>
              <p>
                Mint funds will be used for financing Coliseum's private
                research team, tools, uncensored educational events,
                miscellaneous utility costs, and the development of phase 2. The
                mint fund is our runway for two years and allows us to finance
                building cashflow sources for Coliseum for everlasting
                sustainability.
              </p>
            </BurgerNav>
          </Three>
        </Left>
      </Middle>

      <Footer>
        <img src="\assets\navbar\ColiseumLogo.png" alt="" />
        <UnderFooter>
          <img src="/assets/navbar/barrier.png" alt="" />
          <img src="/assets/navbar/twitter.png" alt="" />
          <img src="/assets/navbar/discord.png" alt="" />
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
  text-align: center;
`;

const Middle = styled.div`
  text-align: start;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 700px;
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

const One = styled.div``;

const Two = styled.div``;

const Three = styled.div``;

const BurgerNav = styled.div`
  height: ${(props) => (props.isVisible ? "100px" : 0)};
  transition: height 0.3s ease-in-out;
  overflow: hidden;
  margin-right: 80px;
  width: 750px;

  p {
    font-size: 18px;
    line-height: 25px;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: columns;
  justify-content: center;
  align-items: center;
`;

const UnderFooter = styled.div`

`;