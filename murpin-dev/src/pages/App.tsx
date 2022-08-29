import MainHeader from "../components/Header/MainHeader";
import IntroduceSection from "../section/IntroduceSection";
import ProfileSection from "../section/ProfileSection";
import MainFooter from "../components/Footer/MainFooter";
import styled from "styled-components";
import './App.css';

function App() {
  return (
   <Main>
    <MainHeader/>
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
