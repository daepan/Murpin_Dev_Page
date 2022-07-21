import React from 'react';
import styled from 'styled-components';
import { useIntersection } from 'use-intersection';

const IntroduceSection = () => {
  const introduceRef = React.useRef(null)
  const introduceIntersecting = useIntersection(introduceRef);
  return(<StyledIntroduceSection>
    <div ref={introduceRef}>요게 사라지면?</div>
    {!introduceIntersecting && '자기소개가보여'}
  </StyledIntroduceSection>);
};


export default IntroduceSection;


const StyledIntroduceSection = styled.div`
  width: 100vw;
  height: 80vh;
  font-size: 100px;
  text-align: center;
`