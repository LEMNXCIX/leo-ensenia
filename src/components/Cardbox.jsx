import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Data from "../data.json";
import { mobile } from "../pages/responsive";

export const Cardbox = () => {
  return (
    <Container>
      <Title>Cursos disponibles!</Title>
      <CardBox>
        {Data.Cursos.slice(0, 3).map((item, index) => {
          return (
            <Card key={index}>
              <Subtitle>{item.title}</Subtitle>
              <Image src={item.src} />
              <Description>{item.desc}</Description>
              <Link to={"/cursos/" + item.id}>
                {" "}
                <Button>Ver curso</Button>
              </Link>
            </Card>
          );
        })}
      </CardBox>
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;

  align-items: center;
  justify-content: center;
`;
const CardBox = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40vh, 1fr));
  gap: 20px;
  margin: 0px 100px;
  ${mobile({ margin: "0px" })}
`;
const Card = styled.div`
  text-align: center;
  /* min-width: 200px; */
  background-color: #f7f7f8;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(158, 158, 158, 0.466);
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.01);
    background-color: rgba(133, 133, 133, 0);
    box-shadow: 0 0 100px rgba(158, 158, 158, 0.466);
    transition: all 0.5s ease;
  }
`;
const Title = styled.h1`
  color: #264653;
  font-size: 50px;
  margin-bottom: 30px;
  font-weight: 800;
  letter-spacing: -0.035em;
  text-overflow: ellipsis;
`;
const Image = styled.img`
  width: 100%;
  height: 30vh;
  object-fit: cover;
  border-radius: 4px;
`;
const Description = styled.p`
  text-overflow: ellipsis;
  padding: 20px;
`;
const Button = styled.button`
  font-size: 20px;
  background-color: white;
  margin: 20px 5px;
  padding: 10px;
  border: 1px solid white;
  border-radius: 4px;
  cursor: pointer;
  color: black;
  &:hover {
    border: 1px solid black;
  }
`;
const Subtitle = styled.h3`
  margin: 10px;
  color: #264653;
`;
