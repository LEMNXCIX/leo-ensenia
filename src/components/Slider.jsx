import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import Data from "../data.json";

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <FaArrowLeft />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {Data.SliderItems.map((item, index) => (
          <Slide bg={item.bg} key={index}>
            <ImgContainer>
              <Image draggable="false" src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Titlte>{item.title}</Titlte>
              <Desc>{item.desc}</Desc>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <FaArrowRight />
      </Arrow>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 30px;
  height: 30px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  flex: 2;
  height: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Titlte = styled.h1`
  font-size: 70px;
  letter-spacing: 5px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
`;
