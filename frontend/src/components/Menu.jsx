
import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png"
import HomeIcon from "@mui/icons-material/Home";
import GradeIcon from '@mui/icons-material/Grade';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { Link } from "react-router-dom";
const Container = styled.div`
  flex: 1;
  background-color: #181823;
  height: 100vh;
  color: white;
  font-size: 14px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-weight: 300px;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 50px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color:  #aaa;
  }
`;





const Menu = () => {

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={logo} />
            Vid School
          </Logo>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <HomeIcon />
            Home
          </Item>
        </Link>
        <Link to="popular" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <WhatshotIcon />
            Popular
          </Item>
        </Link>
        <Link
          to="subscriptions"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <GradeIcon />
            Subscriptions
          </Item>
        </Link>
        
      </Wrapper>
    </Container>
  );
};

export default Menu;
