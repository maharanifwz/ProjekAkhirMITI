import React, { useContext, useEffect } from "react";
import { Button } from "antd";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import logoPetMate from '../../assets/Logo paw.png'
import { useAuth } from "../../config/Auth";
import { useNavigate } from "react-router-dom";
import { accountContext } from "../../App";


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
  const { setAndGetTokens } = useAuth();
  const navigate = useNavigate();
  const {account, setAccount} = useContext(accountContext)

	const handleLogout = () => {
		setAccount(false)
	};

  const coba = () => {
    navigate('/signin')
  }

  return (
    <div>
      <NavWrapper>
        <NavContainer>
          <NavItem to="/">
            <div className="logo">
              <img src={logoPetMate}/>
              <a className="logo">Pet<span className="identity">Mate</span></a>
            </div>
          </NavItem>
          <NavItem className="konsultasi" to="/consultation">
            Konsultasi
          </NavItem>
          <NavItem to="/community">Komunitas</NavItem>
          <NavItem to="/article">Artikel</NavItem>
          <NavItem to="/aboutus">Tentang Kami</NavItem>
        </NavContainer>
        <RightContainer>
        {/* <Button className="navbar" href="/signin">
            Riwayat
          </Button> */}
          {/* {(localStorage.getItem("token") !== null)?
          <Button className="navbar" href="/">
            Keluar
          </Button> :
          <Button className="navbar" href="/signin">
          Masuk
        </Button>} */}
        {account === true ?
			<Button className='navbar' onClick={handleLogout}>
				Keluar
			</Button>:
			<Button className='navbar' onClick={coba}>
				Masuk
			</Button>
		}
        </RightContainer>
      </NavWrapper>
    </div>
  );
};