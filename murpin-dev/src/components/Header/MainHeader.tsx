import styled from 'styled-components';


const MainHeader = () => {
  return(
  <StyledMainHeader>
    <HeaderTitle>Murpin-dev-test-page</HeaderTitle>
  </StyledMainHeader>
  );
};


export default MainHeader;


const StyledMainHeader = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const HeaderTitle = styled.div`
  font-family: 'Ignoto';
  font-size: 50px;
`