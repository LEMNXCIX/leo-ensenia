import React from "react";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import MyComponent from "../components/Map";
import { FaBookDead } from "react-icons/fa";
import { Footer } from '../components/Footer'

export const Acercade = () => {
  return (
    <>
      <Navbar />
      <Title>Acerca de nosotros</Title>

      <Container>
        <MapContainer>
          Ubicanos
          <MyComponent />
        </MapContainer>

        <InfoContainer>
          <Logo>
            <Text>
              <FaBookDead /> LɘoEnseña
            </Text>
          </Logo>
          <Description>
            Leo enseña es una empresa dedicada a brindar capacitaciones
            virtuales sobre la programación, dónde se trata de enseñar desde lo
            más básico hasta lo más complicado, con el propósito de que las
            personas que reciban los cursos adquieran conocimientos sobre cómo
            es la realización de programas y proyectos en la informática.
          </Description>
          <Subtitle>Mision</Subtitle>
          <Description>
            Mantener a los capacitadores capacitados acorde a las mejoras de la
            programación que se va integrando en la actualidad, para ofrecer
            cursos de programación actualizados para brindar, la mejor calidad
            de los cursos teniendo en meta acaparar unos 80 cursos en total
            contando todos los niveles (Básico – Medio -Alto). A través de
            capacitaciones se busca preparar a los profesionales con mejoras
            continuas dentro de la empresa, incrementando la ventaja
            competitiva.
          </Description>
          <Subtitle>Vision</Subtitle>
          <Description>
            Contar con sistema de aula virtual propio en la cual se puedan
            registrar los docentes, estudiantes y subir los módulos de las
            capacitaciones; este sistema también permitirá que se pueda subir
            videos para que exista una retroalimentación por parte de los
            estudiantes. Posesionarios físicamente en el mercado.
          </Description>
        </InfoContainer>
      </Container>
      <Footer/>
    </>
  );
};
const Container = styled.div`
  margin: 30px 50px;
  display: flex;
`;

const InfoContainer = styled.div`
  padding: 10px 50px;
  width: 50vw;
`;
const MapContainer = styled.div`
  width: 50vw;
  height: 500px;
  margin: 10px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Text = styled.h2`
  /* font-size: 20px;
  margin-bottom: 30px;
  font-weight: 800;*/
  letter-spacing: -0.09em;
`;
const Title = styled.h2`
  margin: 30px 50px 0px 50px;
`;
const Subtitle = styled.h3`
  margin: 10px;
`;
