import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

export const Modal = ({ children, estado, cambiarEstado }) => {
  return (
    <>
      {estado && (
        <Overlay  >
          <ContenedorModal>
            <EncabezadoModal>
              <h2>Inicia sesion</h2>
            </EncabezadoModal>
            <BotonCerrar onClick={()=>cambiarEstado(false)} >
              <FaTimes />
            </BotonCerrar >
            {children}
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
};
const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const ContenedorModal = styled.div`
top: -100px;
  width: 30vw;
  min-height: 100px;
  background: #fff;
  position: relative;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 100px rgba(158, 158, 158, 0.466); ;
`;
const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;
  h2 {
    font-weight: 500;
    font-size: 16px;
  }
`;
const BotonCerrar = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  /* color: #f11c09; */
  &:hover {
    color: #d31807;
  }
`;
