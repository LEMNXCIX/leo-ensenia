import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import Data from "../data.json";
import { mobile } from "./responsive";

export const Cursos = () => {
  return (
    <>
      <Navbar />
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

      <Bar>
        <BarOption>
          <Search type="search" placeholder="Buscar" />
        </BarOption>
        <BarOption>
          <Span>Categoria</Span>
          <Select>
            <option>Programacion</option>
            <option>Basico</option>
          </Select>
        </BarOption>
        <BarOption>
          <Span>Nivel</Span>
          <Select>
            <option>Basico</option>
            <option>Medio</option>
            <option>Avanzado</option>
          </Select>
        </BarOption>
      </Bar>
      <Title>Todos los cursos</Title>
      <CardContainer>
        {Data.Cursos.map((item, index) => (
          <CardExtended key={index} bg={item.bg}>
            <Subtitle>{item.title}</Subtitle>
            <Img alt="" src={item.src} />
            <Description>{item.desc}</Description>
            <Link to={"/cursos/" + item.id}>
              <Button>Ver curso</Button>
            </Link>
          </CardExtended>
        ))}
      </CardContainer>
    </>
  );
};
const Title = styled.h3`
  margin: 30px 80px;
  color: #264653;
`;
const TitleCard = styled.h3`
  margin: auto;
  color: #ffffff;
`;

const Bar = styled.div`
  margin: 0px 30px;
  display: flex;
  justify-content: end;

  ${mobile({ flexDirection: "column", padding: "0px" })}
`;
const BarOption = styled.div`
  display: flex;
  margin: 0px 5px;
  align-items: center;
  ${mobile({ margin: "10px" })}
`;
const Search = styled.input`
  padding: 5px;
  border-radius: 4px;
  ${mobile({ width: "90vw" })}
`;
const Span = styled.span`
  margin-right: 10px;
`;
const Select = styled.select`
  padding: 5px;
  border-radius: 4px;
  font-size: 14px;
  option {
  }
  ${mobile({ width: "50vw" })}
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
const CardContainer = styled.div`
  margin: 10px 80px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 10px;
`;
const Img = styled.img`
  width: 100%;
  height: 30vh;
  object-fit: cover;
  border-radius: 4px;
`;
const Subtitle = styled.h4`
  margin: 10px;
`;
const CardExtended = styled.div`
  text-align: center;
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
const Description = styled.p`
  text-overflow: ellipsis;
  padding: 20px;
`;
const Button = styled.button`
  font-size: 20px;
  background-color: white;
  margin: 10px 5px;
  padding: 10px;
  border: 1px solid white;
  border-radius: 4px;
  cursor: pointer;
  color: black;
  &:hover {
    border: 1px solid black;
  }
`;
