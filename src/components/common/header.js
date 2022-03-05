import React from "react";
import { Menu } from "antd";
import { Button } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.nav`
  position: fixed;
  min-width: 100vw;
  background-color: #fff;
  width: 100%;
  padding: 1rem 0;
  z-index: 10;
  top: 0;
  display: flex;
`;

const NavContainer = styled.div`
  width: 60%;
  margin-left: 70px;
  display: flex;
  align-items: center;
  flex: 70%;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
  color: #000;
  &:not(:last-child) {
    margin-right: 2rem;
  }
  &:hover {
    color: #1f7a8c;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex: 30%;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const AppHeader = () => {
  return (
    <div>
      <NavWrapper>
        <NavContainer>
          <NavItem to="/">
            <a><img>PetMate</img></a>
          </NavItem>
          <NavItem className="konsultasi" to="/consultation">
            Konsultasi
          </NavItem>
          <NavItem to="/community">Komunitas</NavItem>
          <NavItem to="/grooming">Layanan Grooming</NavItem>
          <NavItem to="/education">Artikel</NavItem>
          <NavItem to="/aboutus">Tentang Kami</NavItem>
        </NavContainer>
        <RightContainer>
          <Button className="navbar" href="/signin">
            Sign In
          </Button>
        </RightContainer>
      </NavWrapper>
    </div>
  );
};