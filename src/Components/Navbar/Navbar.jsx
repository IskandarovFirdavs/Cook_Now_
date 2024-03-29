import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";
const Header = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 50px;
  background-color: black;
`;
const Header2 = styled("div")`
  display: flex;
  justify-content: end;
  width: 100%;
  height: 50px;
  background-color: black;
`;

const Link = styled(NavLink)`
  color: white;
  font-weight: 500;
  text-decoration: none;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
`;

const LeftSide = styled("div")`
  width: 20%;
  justify-content: center;
  height: 100%;
  align-items: center;
  display: flex;
`;
const RightSide = styled("div")`
  width: 60%;
  justify-content: space-evenly;
  height: 100%;
  align-items: center;
  display: flex;
`;
const RightSideLinks = styled("div")`
  width: 100%;
  justify-content: space-evenly;
  height: 100%;
  align-items: center;
  display: flex;
`;

const Navbar = () => {
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
    <Header>
      <LeftSide>
        <Link to={"/"}>Home</Link>
      </LeftSide>
      <RightSide>
        {width <= 800 ? (
          <Header2>
            <div className="dropdown">
              <img
                src="https://i.pinimg.com/originals/26/9d/d1/269dd16fa1f5ff51accd09e7e1602267.png"
                alt="Cinque Terre"
                height="50"
              />
              <div className="dropdown-content">
                <div className="dropdown-content">
                  <NavLink to={"/Golden-Steak"}>Golden Steak</NavLink>
                  <NavLink to={"/Gamburger-with-free"}>Gamburger...</NavLink>
                  <NavLink to={"/Sushi"}>Sushi</NavLink>
                </div>
              </div>
            </div>
          </Header2>
        ) : (
          <RightSideLinks>
            <Link to={"/Golden-Steak"}>Golden Steak</Link>
            <Link to={"/Sushi"}>Sushi</Link>
            <Link to={"/Gamburger-with-free"}>Gamburger with free</Link>
          </RightSideLinks>
        )}
      </RightSide>
    </Header>
  );
};

export default Navbar;
