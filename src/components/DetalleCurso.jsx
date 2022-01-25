import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Data from "../data.json";
import { Link } from "react-router-dom";

export const DetalleCurso = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  var index = null;
  switch (path) {
    case "34fddb3f-d62d-4fe7-aead-ebb9d057d2e4":
      index = 0;
      break;
    case "34fddb3f-d62d-4fe7-aead-ebb9d057d2e5":
      index = 1;
      break;
    case "34fddb3f-d62d-4fe7-aead-ebb9d057d2e6":
      index = 2;
      break;
    default:
      index = 0;
  }
  const Info = Data.Cursos[index];
  console.log(Info);
  return (
    <Container>
      <InfoContainer>
        <div>
          <Title>{Info.title}</Title>
          <Description>{Info.desc}</Description>
          <Span>
            <b>Nivel:</b> {Info.level}
          </Span>
          <Span>
            <b>Duracion:</b> {Info.duracion}
          </Span>
          <Span>
            <b>Requerimentos:</b> {Info.req}
          </Span>
          <Span>
            <b>Costo:</b> {Info.costo}
          </Span>
          <Span>
            <Button bg="15ade0" hover="1fb7ea" color="fff">
              Comenzar este curso
            </Button>
            <A
              href={
                "https://api.whatsapp.com/send?phone=593988973278&text=Hola! Deseo conocer más sobre el curso de " +
                Info.title
              }
              target="_blank"
            >
              ¡Quiero más información!{" "}
            </A>
          </Span>
        </div>

        <Img src={Info.src} />
      </InfoContainer>
      <Hr />
      <InfoBox>
        <Temario>
          <Title>Temario del curso</Title>
          {Info.temas.map((item, i) => {
            return (
              <div key={i}>
                <TemaTitle>{item.titulo}</TemaTitle>
                {item.subtitulos.map((item, index) => {
                  return <SubtemaTitle key={index}>{item}</SubtemaTitle>;
                })}
              </div>
            );
          })}
          {Info.video?(<iframe title={Info.title} src={Info.video} width='560' height='299' style={{borderRadius:"10px"}} scrolling='no' frameBorder='0'  allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share' allowFullScreen={true}></iframe>):(<></>)}
        </Temario>
        <div>
          <Title>Cursos recomendados</Title>
          <CardContainer>
            {Data.Cursos.slice(0, 4).map((item, index) => (
              <Link
                key={index}
                to={"/cursos/" + item.id}
                style={{ textDecoration: "none" }}
              >
                {" "}
                <Card
                  style={{ display: "flex", justifyContent: "center" }}
                  bg={item.bg}
                >
                  <TitleCard>{item.title}</TitleCard>
                </Card>
              </Link>
            ))}
          </CardContainer>
        </div>
      </InfoBox>
    </Container>
  );
};
const Container = styled.div`
  margin: 50px;
`;
const Title = styled.h2`
  color: #264653;
  margin: 20px;
`;
const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60vh, 1fr));
  gap: 20px;
`;
const Img = styled.img`
  width: 100%;
  height: 40vh;
  object-fit: cover;
  border-radius: 10px;
`;
const Description = styled.p`
  color: #264653;
  margin: 20px;
`;
const Span = styled.div`
  margin: 10px 0px 0px 20px;
  width: 100%;
  color: #264653;
`;
const Button = styled.button`
  font-size: 18px;
  background-color: transparent;
  margin: 10px 5px;
  padding: 10px 40px;
  border: 1px solid white;
  border-radius: 4px;
  background-color: #${(props) => props.bg};
  cursor: pointer;
  color: black;
  &:hover {
    background-color: #${(props) => props.hover};
    border: 1px solid black;
  }
`;
const A = styled.a`
  text-decoration: none;
  font-size: 18px;
  background-color: transparent;
  margin: 10px 5px;
  padding: 10px 40px;
  border: 1px solid white;
  border-radius: 4px;
  background-color: #${(props) => props.bg};
  cursor: pointer;
  color: black;
  &:hover {
    background-color: #${(props) => props.hover};
    border: 1px solid black;
  }
`;
const Hr = styled.hr`
  margin: 20px 0px;
`;
const InfoBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(45vw, 1fr));
`;
const Temario = styled.div``;
const CardContainer = styled.div`
  margin: 10px 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 10px;
`;
const Card = styled.div`
  background-color: #${(props) => props.bg};
  text-align: center;
  height: 15vh;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(158, 158, 158, 0.466);
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.01);
    /* background-color: rgba(133, 133, 133, 0); */
    box-shadow: 0 0 100px rgba(158, 158, 158, 0.466);
    transition: all 0.5s ease;
  }
`;
const TitleCard = styled.h3`
  margin: auto;
  color: #ffffff;
`;
const TemaTitle = styled.ul`
  margin: 20px;
  font-weight: 800;
`;
const SubtemaTitle = styled.li`
  margin: 10px 0px 0px 30px;
  list-style: none;
`;
