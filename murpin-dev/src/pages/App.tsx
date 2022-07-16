import MainHeader from "../components/Header/MainHeader";
import MainFooter from "../components/Footer/MainFooter";
import styled from "styled-components";

function App() {
  return (
   <div>
    <MainContent/>
    <MainFooter/>
   </div>
  );
}

const MainContent = styled.div`
  display: flex;
  height: 100vh;
`
export default App;
