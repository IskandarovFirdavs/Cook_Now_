import React, { useState, useEffect } from "react";
import { BoxJs } from "./FooodJs";
import styled from "styled-components";
import { keyframes } from "styled-components";

const All = styled("div")`
  width: 100%;
  height: 100vh;
`;

const Box = styled("div")`
  display: flex;
  width: 100%;
  height: 100%;
`;
const BoxBefore = styled("div")`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;
const Name = styled("h2")`
  color: gold;
  text-align: center;
  font-size: 45px;
  font-weight: 700;
  font-family: "Courier New", Courier, monospace;
`;

const Img = styled("img")`
  width: 50%;
  height: 100%;
`;
const ImgBefore = styled("img")`
  width: 100%;
  height: 100%;
`;
const Blocks = styled("div")`
  display: flex;
  flex-wrap: wrap;
  height: 250px;

  width: 100%;
  align-items: start;
  justify-content: space-evenly;
`;
const BlocksBefore = styled("div")`
  display: flex;
  align-items: center;
  cursor: none;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  height: 30px;
  align-items: start;
`;
const BotRightBlock = styled("div")`
  height: 150 px;
  text-align: center;
  width: 70%;
  align-items: center;
  cursor: none;
  display: flex;
  font-size: 20px;
  border: 2px solid black;
  justify-content: space-evenly;
  margin: 20px 0;
  flex-direction: column;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;
const Block = styled("div")`
  height: 110px;
  text-align: center;
  background: linear-gradient(grey, white, grey);
  border-radius: 20px;
  width: 120px;
  align-items: center;
  cursor: none;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  animation: mymove 5s infinite;

  @keyframes mymove {
    0% {
      top: 0px;
      background: linear-gradient(grey, white, grey);
    }
    25% {
      top: 50px;
      background: linear-gradient(white, grey, white);
    }
    50% {
      top: 100px;
      background: linear-gradient(grey, white, grey);
    }
    75% {
      top: 50px;
      background: linear-gradient(white, grey, white);
    }
    100% {
      top: 0px;
      background: linear-gradient(grey, white, grey);
    }
  }
`;
const Block1 = styled("div")`
  height: 110px;
  text-align: center;
  background: linear-gradient(grey, white, grey);
  border-radius: 20px;
  width: 120px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  cursor: none;
  flex-direction: column;
  position: relative;
  animation: mymove2 5s infinite;

  @keyframes mymove2 {
    0% {
      top: 100px;
      background: linear-gradient(white, grey, white);
    }
    25% {
      top: 50px;
      background: linear-gradient(grey, white, grey);
    }
    50% {
      top: 0px;
      background: linear-gradient(white, grey, white);
    }
    75% {
      top: 50px;
      background: linear-gradient(grey, white, grey);
    }
    100% {
      top: 100px;
      background: linear-gradient(white, grey, white);
    }
  }
`;
const AfterBlock = styled("div")`
  height: 90px;
  text-align: center;
  background: linear-gradient(grey, white, grey);
  border-radius: 20px;
  width: 100px;
  display: flex;
  align-items: center;
  cursor: none;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  animation: mymove 5s infinite;

  @keyframes mymove {
    0% {
      top: 0px;
      background: linear-gradient(grey, white, grey);
    }
    25% {
      top: 50px;
      background: linear-gradient(white, grey, white);
    }
    50% {
      top: 100px;
      background: linear-gradient(grey, white, grey);
    }
    75% {
      top: 50px;
      background: linear-gradient(white, grey, white);
    }
    100% {
      top: 0px;
      background: linear-gradient(grey, white, grey);
    }
  }
`;
const AfterBlock1 = styled("div")`
  height: 90px;
  text-align: center;
  background: linear-gradient(grey, white, grey);
  border-radius: 20px;
  width: 100px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  animation: mymove2 5s infinite;
  align-items: center;

  @keyframes mymove2 {
    0% {
      top: 100px;
      background: linear-gradient(white, grey, white);
    }
    25% {
      top: 50px;
      background: linear-gradient(grey, white, grey);
    }
    50% {
      top: 0px;
      background: linear-gradient(white, grey, white);
    }
    75% {
      top: 50px;
      background: linear-gradient(grey, white, grey);
    }
    100% {
      top: 100px;
      background: linear-gradient(white, grey, white);
    }
  }
`;

const Type = styled("h2")`
  font-size: large;
  font-weight: 600;
`;
const Line = styled("div")`
  width: 30px;
  height: 5px;
  background-color: black;
  justify-content: center;
`;

const Information = styled("p")`
  font-size: ${(props) => (props.width < 1290 ? "0px" : "20px")};
  width: 90%;
  font-family: sans-serif;
  justify-content: end;
  margin: 20px;
`;

const Bottom = styled("div")`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100%;
  height: 300px;
`;

const BotLeft = styled("div")`
  height: 400px;
  width: ${(props) => (props.width < 800 ? "90%" : "50%")};
  background-color: #e0e0e0;
  display: flex;
  font-size: 20px;
  flex-wrap: wrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  max-height: 850px;
  justify-content: space-between;
`;
const BotRight2 = styled("div")`
  height: 400px;
  width: ${(props) => (props.width < 800 ? "100%" : "50%")};
  display: flex;
  font-size: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const BotRight = styled("div")`
  height: 1200px;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
`;

const Bot = styled("div")`
  height: 1000px;
  width: 90%;
  align-items: center;
  margin-top: 180px;
  display: flex;
  flex-direction: ${(props) => (props.width < 800 ? "column" : "row")};
  justify-content: space-between;
`;
const BottomRight = styled("div")`
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const MainCenterDiv = styled("div")`
  width: 80%;
  align-items: center;
`;
const Ingrideints = styled("h1")`
  width: 100%;
  color: black;
  font-weight: 700;
  text-align: start;
`;
const Ingrideint1 = styled("h2")`
  width: 49%;
  color: black;
  font-weight: 400;
  font-size: ${(props) => (props.width < 800 ? "20px" : "30px")};
  text-align: start;
`;
const Ingrideint2 = styled("h2")`
  width: 50%;
  color: black;
  font-size: ${(props) => (props.width < 800 ? "20px" : "30px")};
  font-weight: 400;
  text-align: start;
`;

const CapIcon = styled("img")`
  height: 50px;
`;

const CookDiv = styled("div")`
  display: flex;
  justify-content: space-evenly;
  width: 25%;
  height: auto;
  margin: 15px 0;
  flex-direction: row;
`;
const CookDiv2 = styled("div")`
  display: flex;
  justify-content: space-between;
  height: auto;
  margin: 15px 0;
  width: ${(props) => (props.width < 800 ? "400" : "200")};
  flex-direction: row;
`;

const SushiImgs = styled("img")`
  height: 400px;
  width: ${(props) => (props.width < 500 ? "100%" : "50%")};
  margin: 20px 0;
`;

const Steak = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <All>
      {BoxJs.map((d, index) => (
        <div key={index}>
          {width <= 800 ? (
            <BoxBefore>
              <ImgBefore src={d.img} />
              <MainCenterDiv>
                <Name>{d.name}</Name>
                <Information>{d.about}</Information>
                {width <= 500 ? (
                  <BlocksBefore>
                    <AfterBlock1>
                      <Type>{d.calories}</Type>
                      <Line></Line>
                      <Type>{d.calories2}</Type>
                    </AfterBlock1>
                    <AfterBlock>
                      <Type>{d.time}</Type>
                      <Line></Line>
                      <Type>{d.time2}</Type>
                    </AfterBlock>

                    <AfterBlock1>
                      <Type>{d.sugar}</Type>
                      <Line></Line>
                      <Type>{d.sugar2}</Type>
                    </AfterBlock1>
                  </BlocksBefore>
                ) : (
                  <BlocksBefore>
                    <Block1>
                      <Type>{d.calories}</Type>
                      <Line></Line>
                      <Type>{d.calories2}</Type>
                    </Block1>
                    <Block>
                      <Type>{d.time}</Type>
                      <Line></Line>
                      <Type>{d.time2}</Type>
                    </Block>
                    <Block1>
                      <Type>{d.sugar}</Type>
                      <Line></Line>
                      <Type>{d.sugar2}</Type>
                    </Block1>
                  </BlocksBefore>
                )}
              </MainCenterDiv>
            </BoxBefore>
          ) : (
            <Box>
              <Img src={d.img} />
              <div>
                <Name>{d.name}</Name>
                <Blocks>
                  <Block1>
                    <Type>{d.calories}</Type>
                    <Line></Line>
                    <Type>{d.calories2}</Type>
                  </Block1>
                  <Block>
                    <Type>{d.time}</Type>
                    <Line></Line>
                    <Type>{d.time2}</Type>
                  </Block>
                  <Block1>
                    <Type>{d.sugar}</Type>
                    <Line></Line>
                    <Type>{d.sugar2}</Type>
                  </Block1>
                </Blocks>

                <Information width={width}>{d.about}</Information>
              </div>
            </Box>
          )}

          <Bottom>
            <Bot width={width}>
              <BotLeft width={width}>
                <Ingrideints>{d.ingredients}</Ingrideints>
                <Ingrideint1 width={width}>{d.typeingredients1}</Ingrideint1>
                <Ingrideint1 width={width}>{d.typeingredients2}</Ingrideint1>
                <Ingrideint1 width={width}>{d.typeingredients3}</Ingrideint1>
                <Ingrideint1 width={width}>{d.typeingredients4}</Ingrideint1>
                <Ingrideint2 width={width}>{d.typeingredients5}</Ingrideint2>
                <Ingrideint2 width={width}>{d.typeingredients6}</Ingrideint2>
                <Ingrideint2 width={width}>{d.typeingredients7}</Ingrideint2>
                <Ingrideint2 width={width}>{d.typeingredients8}</Ingrideint2>
                <Ingrideint2 width={width}>{d.typeingredients9}</Ingrideint2>
                <Ingrideint2 width={width}>{d.typeingredients10}</Ingrideint2>
              </BotLeft>
              <BotRight2 width={width}>
                <CookDiv2 width={width}>
                  <CapIcon
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-icon.png"
                    alt=""
                  />
                  <h1
                    style={{
                      fontSize: "45px",
                    }}
                  >
                    Video Recipe
                  </h1>
                </CookDiv2>
                <iframe
                  name="asd"
                  width="400"
                  height="400"
                  src="https://www.youtube.com/embed/xkkI9dPu4rU"
                  title="HOW TO MAKE GOLDEN STEAK #airfryerrecipe #steak #goldensteak"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </BotRight2>
            </Bot>
            <BotRight>
              <CookDiv>
                <CapIcon
                  src="https://cdn-icons-png.flaticon.com/512/4443/4443003.png"
                  alt=""
                />
                <h2 style={{ fontSize: "55px" }}>{d.directions}</h2>
              </CookDiv>

              <BottomRight>
                <BotRightBlock>
                  <h4 style={{ textDecoration: "underline" }}>{d.step1}</h4>
                  <h5>{d.steps1}</h5>
                </BotRightBlock>

                <BotRightBlock>
                  <h4 style={{ textDecoration: "underline" }}>{d.step2}</h4>
                  <h5>{d.steps2}</h5>
                </BotRightBlock>
                <BotRightBlock>
                  <h4 style={{ textDecoration: "underline" }}>{d.step3}</h4>
                  <h5>{d.steps3}</h5>
                </BotRightBlock>

                <BotRightBlock>
                  <h4 style={{ textDecoration: "underline" }}>{d.step4}</h4>
                  <h5>{d.steps4}</h5>
                </BotRightBlock>

                <BotRightBlock>
                  <h4 style={{ textDecoration: "underline" }}>{d.step5}</h4>
                  <h5>{d.steps5}</h5>
                </BotRightBlock>
                <BotRightBlock>
                  <h4 style={{ textDecoration: "underline" }}>{d.step6}</h4>
                  <h5>{d.steps6}</h5>
                </BotRightBlock>

                <SushiImgs
                  width={width}
                  src="https://crownful.com/cdn/shop/articles/P1055620_900x.jpg?v=1641043441g"
                  alt=""
                />
              </BottomRight>
            </BotRight>
          </Bottom>
        </div>
      ))}
    </All>
  );
};

export default Steak;
