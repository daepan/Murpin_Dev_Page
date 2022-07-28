import React, { useRef} from 'react';
import { useIntersection } from 'use-intersection';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';

const ProfileSection = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  const profileIntersecting = useIntersection(profileRef);


  return(<StyledProfileSection
  >
    <div ref={profileRef}>{profileIntersecting ? 
    <Canvas>
      <pointLight position={[10, 10, 10]} />
    <mesh>
      <sphereBufferGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
    </Canvas>
    : 'visibleProfile'}</div>
   

  </StyledProfileSection>);
};


export default ProfileSection;


const StyledProfileSection = styled.div`
  width: 100vw;
  height: 80vh;
  font-size: 100px;
  text-align: center;
`