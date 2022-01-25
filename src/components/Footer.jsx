import React from "react";
import {
  FaEnvelope,
  FaMapMarkedAlt,
  FaTwitter,
  FaYoutube,
  FaBookDead,
  FaFacebookSquare,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Mailto = ({ email, subject = "", body = "", children }) => {
  let params = subject || body ? "?" : "";
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

  return (
    <a
      style={{ textDecoration: "none", color: "black" }}
      href={`mailto:${email}${params}`}
    >
      {children}
    </a>
  );
};
export const Footer = () => {
  return (
    <>
      <Hr />
      <Container>
        <Left>
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
        </Left>
        <Center></Center>
        <Right>
          <Title>Contacto</Title>
          <ContactItem>
            <SocialContainer>
              <A
                href="https://www.facebook.com/Leo-Ense%C3%B1a-106118901911004"
                target="_blank"
              >
                <SocialIcon color="4267B2">
                  <FaFacebookSquare />
                </SocialIcon>
              </A>
              <A
                href="https://api.whatsapp.com/send?phone=593988973278&text=Hola!,%20deseo%20conocer%20mas!!!!"
                target="_blank"
              >
                <SocialIcon color="25D366">
                  <FaWhatsapp />
                </SocialIcon>
              </A>
            </SocialContainer>
            <SocialIcon color="000000">  <FaEnvelope />
              <Mailto
                email="edison.salcan@uleam.edu.ec"
                subject="Informacion proyecto de codornices"
                body="Hola!, deseo conocer mas acerca del proyecto de las codornices"
              >
              
              </Mailto>
            </SocialIcon>

            <SocialIcon color="000000">
              <FaMapMarkedAlt />
            </SocialIcon>
            <A href="" target="_blank">
              El Carmen, Manabi
            </A>
          </ContactItem>
        </Right>
      </Container>
    </>
  );
};
const Container = styled.div`
  display: flex;
  color: #264653;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SocialIcon = styled.div`
  font-size: 25px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  text-decoration: none;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  padding: 5px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const Hr = styled.hr`
  margin-top: 20px;
`;
const Text = styled.h2`
  /* font-size: 20px;
  margin-bottom: 30px;
  font-weight: 800;*/
  letter-spacing: -0.09em;
`;
const A = styled.a`
  text-decoration: none;
  color: #264653;
`;
