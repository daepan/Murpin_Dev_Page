import React, { useEffect } from 'react';
import  styles from './IntroduceSection.module.css';
import * as THREE from 'three';
import styled from 'styled-components';
import { useIntersection } from 'use-intersection';
import { useTyping } from '../../utils/hooks/useTyping';
import { Canvas } from '@react-three/fiber';

import { useScrollEffect } from '../../utils/hooks/useScrollEffect';

const IntroduceSection = () => {
  const introduceRef = React.useRef<HTMLDivElement>(null);
  const introduceIntersecting = useIntersection(introduceRef);
  const PHRASE =['안녕하세요. 김대관입니다.'];

  const text = useTyping({phrases : PHRASE});

  return(
  <div className={styles.section} ref={introduceRef}>
    <div> {text}</div>
  </div>);
};


export default IntroduceSection;


const StyledIntroduceSection = styled.div`

`

const StyledIntroduceAnnounce = styled.div`
`