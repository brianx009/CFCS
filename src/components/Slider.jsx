import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../data';
import { mobile } from '../responsive';

import {
  BrowserRouter as Router,
  Link,


  
} from "react-router-dom";



const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;

  
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
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
  height: 100vh;
  display: flex;
  align-items: center;
  background-size:cover;
  background-repeat:no-repeat;

`;





const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  width:100%;
  text-align:center;
`;

const Title = styled.h1`
  font-size: 70px;
  color:white;
  text-shadow:2px 2px 3px black;
  ${mobile({fontSize:"10px;"})}
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  color:white;
  text-shadow:2px 2px 3px black;
`;

const Button = styled.button`
  padding: 21px 30px;
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;
  background-color:red;
  border:none;
  color:white;
  border-radius:10px;
  box-shadow:2px 2px 3px black;
  font-weight: bold;

`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container >
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide style={{backgroundImage: `url(${item.img})` }} key={item.id}>
            
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Link className="navBtn" to="/productList">Show Now</Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;