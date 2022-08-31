import styled, { keyframes } from 'styled-components';
import {useSpring, animated} from "react-spring";



const IntroduceSection = () => {
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  return(
  <StyledIntroduceSection>
    <Hello style={props}>안녕하세요 김대관입니다.</Hello>
  </StyledIntroduceSection>);
};


export default IntroduceSection;

const bounce = keyframes`
  0%   {top: 0px;}
  25%  {top: 50px;}
  50%  {top: 25px;}
  75%  {top: 50px;}
  100% {top: 0px;}

  &:after {
    0%   {top: 0px;}
    50%  {top: 50px;}
    100% {top: 0px;}
  }
`

const Hello = styled(animated.div)`
  z-index: 4;
  font-size: 50px;
  position: relative;
  animation: ${bounce} 5s infinite;
`


const rotate = keyframes`
  0% {transform: translate(-50%, 0) rotateZ(0deg);}
  50% {transform: translate(-50%, -2%) rotateZ(180deg);}
  100% {transform: translate(-50%, 0%) rotateZ(360deg);}
`

const StyledIntroduceSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh - 50px);
  background-color: #3E606F;
  font-family: Roboto;
  overflow: hidden;
  
  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    min-width: 200vw;
    min-height: 200vw;
    background-color: #FFF;
    animation-name: ${rotate};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  
  &:before {
    bottom: 15vh;
    border-radius: 45%;
    animation-duration: 10s;
  }
  
  &:after {
    bottom: 12vh;
    opacity: .5;
    border-radius: 47%;
    animation-duration: 10s;
  }
}

`

