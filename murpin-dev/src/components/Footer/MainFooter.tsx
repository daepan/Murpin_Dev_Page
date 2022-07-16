import styled from 'styled-components';


const MainFooter = () => {
  return(<StyledMainFooter>
    <FooterTitle>Director : KIMMurPin</FooterTitle>
    <FooterContent>
        <FooterFacebookLink>FaceBook</FooterFacebookLink>
        <FooterBlogLink>Blog</FooterBlogLink>
        <FooterGoogleEmailLink>Google</FooterGoogleEmailLink>
    </FooterContent>
  </StyledMainFooter>);
};


export default MainFooter;


const StyledMainFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position : relative;
    transform : translateY(-100%);
`
const FooterTitle = styled.div`
    font-size: 27px;
`
const FooterContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    margin-top: 20px;
`
const FooterLink = styled.div`
    margin-left: 5px;
`
const FooterFacebookLink = styled(FooterLink)`
`
const FooterBlogLink =  styled(FooterLink)``

const FooterGoogleEmailLink =  styled(FooterLink)``