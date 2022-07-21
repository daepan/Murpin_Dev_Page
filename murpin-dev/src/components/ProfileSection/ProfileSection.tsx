import React, { useRef} from 'react';
import { useIntersection } from 'use-intersection';
import styled from 'styled-components';


const ProfileSection = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  const profileIntersecting = useIntersection(profileRef);

  return(<StyledProfileSection
  ref={profileRef}>
    {profileIntersecting ? 'invisibleProfile': 'visibleProfile'}
  </StyledProfileSection>);
};


export default ProfileSection;


const StyledProfileSection = styled.div`
  width: 100vw;
  height: 80vh;
  font-size: 100px;
  text-align: center;
`