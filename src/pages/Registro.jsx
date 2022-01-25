import React from "react";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";

export const Registro = () => {
  return (
    <>
      {" "}
      <Navbar />
      <Container>
        <H1>Registro</H1>
        <Group>
          {" "}
          <Input placeholder="Nombre" />
          <Input placeholder="Apellido" />
        </Group>

        <Input placeholder="Numero de cedula" />
        <Input placeholder="Correo electronico" />
        <Group>
          <Input placeholder="Password" type="password" />
          <Input placeholder="Confirm Password" type="password" />
        </Group>
        <Button cursor="pointer" border="black" bg="e7c15f" color="ecce83">
          Registro
        </Button>
      </Container>{" "}
    </>
  );
};
const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60vh;
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
const Group = styled.div`
  width: 100%;
  display: flex;
  margin: 0;
`;

const H1 = styled.h1`
  margin: 50px;
`;
