import MainHeader from "../components/Header/MainHeader";
import IntroduceSection from "../components/IntroduceSection/IntroduceSection";
import ProfileSection from "../components/ProfileSection/ProfileSection";
import Earth from "../components/Earth/Earth";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import MainFooter from "../components/Footer/MainFooter";
import styled from "styled-components";
import './App.css';

function App() {
  return (
   <Main>
    <MainHeader/>
    <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
      <MainContent>
        <IntroduceSection/>
        <ProfileSection/>
      </MainContent>
    <MainFooter/>
   </Main>
  );
}

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 200px - 45px);
`

const Main = styled.div`
`

export default App;
