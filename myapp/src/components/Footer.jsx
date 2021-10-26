import { Email, Facebook, Instagram, PhoneAndroid, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";

  
const Container = styled.div`
    display: flex;
  `;
  
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
const Logo = styled.h1``;
  
const Desc = styled.p`
    margin: 20px 0px;
  `;
  
const SocialContainer = styled.div`
    display: flex;
  `;
  
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
const Center = styled.div`
    flex: 1;
    padding: 20px;
  `;
  
const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
const Right = styled.div`
    flex: 1;
    padding: 20px;
  `;
 
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 100%;

`

  
const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>CFCS.</Logo>
          <Desc>
          Cars For College Students is a website designed for students who are in the market for the best
            looking cars at the most affordable price. As a family company we will work with you in order to 
            achieve complete satisfaction and get you out the door driving your new car.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Sports Cars</ListItem>
            <ListItem>Economic Cars</ListItem>
            <ListItem>Trucks</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Favorites</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight: '10px'}}/>
            5500 University Pkwy, San Bernardino, CA 92407
            </ContactItem>
            <ContactItem><PhoneAndroid style={{marginRight: '10px'}}/>
            1-(909)-888-CFCS
            </ContactItem>
            <ContactItem><Email style={{marginRight: '10px'}}/>
            CFCS@gmail.com
            </ContactItem>
            <Payment src= 'https://cdn11.bigcommerce.com/s-x7habvccrj/product_images/uploaded_images/payment-methods.png'/>;
        </Right>
      </Container>
    );
  };
  
  export default Footer;













