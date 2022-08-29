import styled, { keyframes } from 'styled-components';


const IntroduceSection = () => {
  return(<StyledIntroduceSection>
    <Hello>안녕하세요 김대관입니다.</Hello>
  </StyledIntroduceSection>);
};


export default IntroduceSection;


const Hello = styled.div`
  z-index: 4;
  font-size: 30px;
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
  min-height: calc(100vh - 350px);
  background-color: #3E606F;
  font-family: Roboto;
  overflow: hidden;
  
  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    min-width: 300vw;
    min-height: 300vw;
    background-color: #FCFFF5;
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

