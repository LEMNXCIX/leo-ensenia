import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Data from "../data.json";
import { FaBookDead } from "react-icons/fa";
import { Modal } from "./Modal";

export const Navbar = () => {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  return (
    <>
      <Container>
        <Wrap>
          <Logo>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <NavItem border={"white"}>
                <Text>
                  <FaBookDead /> LɘoEnseña
                </Text>
              </NavItem>
            </NavLink>
          </Logo>
        </Wrap>
        <Wrap>
          {Data.Navbar.map((item, index) => {
            return (
              <NavItemContainer key={index}>
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={{ pathname: item.path }}
                >
                  <NavItem
                    cursor={item.cursor}
                    border={item.border}
                    bg={item.bg}
                    color={item.color}
                    onClick={() => cambiarEstadoModal1(!estadoModal1)}
                  >
                    {item.title}
                  </NavItem>
                </NavLink>
              </NavItemContainer>
            );
          })}
        </Wrap>
      </Container>{" "}
      <Modal estado={estadoModal1} cambiarEstado={cambiarEstadoModal1}>
        <InputContainer>
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Contrasenia" />
          <Button cursor="pointer" border="black" bg="e7c15f" color="ecce83">
            Iniciar sesion
          </Button>
        </InputContainer>
      </Modal>
    </>
  );
};

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
`;
const NavItemContainer = styled.ul``;
const NavItem = styled.li`
  text-decoration: none;
  list-style: none;
  margin: 0px 5px;
  padding: 10px;
  border: 1px solid white;
  background: #${(props) => props.color};
  border-radius: 4px;
  cursor: ${(props) => props.cursor};
  color: #264653;
  transition: all 0.5s ease;
  &:hover {
    border: 1px solid ${(props) => props.border};
    transition: all 0.5s ease;
    color: #000;
    background: #${(props) => props.bg};
  }
`;
const Logo = styled.div`
  margin-left: 20px;
`;
const Text = styled.h2`
  /* font-size: 20px;
  margin-bottom: 30px;
  font-weight: 800;*/
  letter-spacing: -0.09em;
`;
const InputContainer = styled.div`
  margin: auto;
  display: flex;
  width: 20vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  width: 90%;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
`;
const Button = styled.button`
  font-size: 20px;
  font-weight: 400;
  width: 100%;
  text-decoration: none;
  list-style: none;
  padding: 10px;
  margin: 10px;
  border: 1px solid white;
  background: #${(props) => props.color};
  border-radius: 4px;
  cursor: ${(props) => props.cursor};
  color: #264653;
  transition: all 0.5s ease;
  &:hover {
    border: 1px solid ${(props) => props.border};
    transition: all 0.5s ease;
    color: #000;
    background: #${(props) => props.bg};
  }
`;
