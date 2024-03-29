import React, { useState, useEffect } from "react";
import { BoxJsSushi } from "./FooodJs";
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
  height: 220px;
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
  width: ${(props) => (props.width < 800 ? "100%" : "50%")};
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
  width: 100%;
  margin: 30px 0;
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
  margin: 20px 0;
`;

const Sushi = () => {
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
      {BoxJsSushi.map((d, index) => (
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
                  src="https://www.youtube.com/embed/joweUxpHaqc"
                  title="How to make Simple Sushi at home | step-by-step SUSHI recipe"
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
                <SushiImgs
                  src="https://www.allrecipes.com/thmb/jtu4mPozw3ogvCAE9_2oX9ndSqI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/24228-Sushi-roll-step1-4x3-2861-c90162d4da2248a7b9c3002f396c085d.jpg"
                  alt=""
                />
                <BotRightBlock>
                  <h4 style={{ textDecoration: "underline" }}>{d.step2}</h4>
                  <h5>{d.steps2}</h5>
                </BotRightBlock>
                <BotRightBlock>
                  <h4 style={{ textDecoration: "underline" }}>{d.step3}</h4>
                  <h5>{d.steps3}</h5>
                </BotRightBlock>
                <SushiImgs
                  src="https://www.allrecipes.com/thmb/t0pxegk1nswb9dmnSWNqLuyAeLY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/24228-Sushi-roll-step2-4x3-2869-142a6ea0c34f47db8f5c6f2fdd720d42.jpg"
                  alt=""
                />
                <BotRightBlock>
                  <h4 style={{ textDecoration: "underline" }}>{d.step4}</h4>
                  <h5>{d.steps4}</h5>
                </BotRightBlock>
                <SushiImgs
                  src="https://www.allrecipes.com/thmb/Ff-qtS1qoZyfkofbg-xgEd1KqzA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/24228-Sushi-roll-step3-4x3-2878-02b8583ae16a4bddae806a3079796ace.jpg"
                  alt=""
                />
                <BotRightBlock>
                  <h4 style={{ textDecoration: "underline" }}>{d.step5}</h4>
                  <h5>{d.steps5}</h5>
                </BotRightBlock>
                <BotRightBlock>
                  <h4 style={{ textDecoration: "underline" }}>{d.step6}</h4>
                  <h5>{d.steps6}</h5>
                </BotRightBlock>
                <SushiImgs
                  src="https://www.allrecipes.com/thmb/gX1A6ZcXKiCz2OHB59RJD5nhalw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/24228-Sushi-roll-step4-4x3-2886-8b09a71b7edc414c8f1fcabd99c6f7ff.jpg"
                  alt=""
                />
                <BotRightBlock>
                  <h4 style={{ textDecoration: "underline" }}>{d.step7}</h4>
                  <h5>{d.steps7}</h5>
                </BotRightBlock>
                <SushiImgs
                  src="https://www.allrecipes.com/thmb/MwzTFSRD_3KIDMbkMFGg-wyOjP4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/24228-Sushi-roll-step5a-4x3-2892-d5162eb19cc347bc844226eed1f160f0.jpg"
                  alt=""
                />
                <BotRightBlock>
                  <h4 style={{ textDecoration: "underline" }}>{d.step8}</h4>
                  <h5>{d.steps8}</h5>
                </BotRightBlock>
                <SushiImgs
                  src="https://www.allrecipes.com/thmb/r8R94CK0RI8oPxD827OauRxVE8Y=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/24228-Sushi-roll-step6a-4x3-2898-4046116b9a16456b9712eacb21ee7066.jpg"
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

export default Sushi;
