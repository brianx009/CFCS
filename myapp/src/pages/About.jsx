import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';

const Container = styled.div`
    width:100%;
    height:100%;
    

`

const Text = styled.div`
    width:100%;
    height:100vh;
    background-image:url(https://www.ghafari.com/uploads/photos/Serra-Pre-Owned-1-Hero.jpg);
    background-size:cover;
    background-repeat:no-repeat;

`

const AboutText = styled.div`
    width:80%;
    position:relative;
    left:10%;
    top:40vh;
    height:20vh;
    text-align:center;
    display:flex;
    flex-direction:column;
    
    justify-content:space-evenly;

`
    
const Wrapper = styled.div`
    padding: 50px;
    display:flex;
    ${mobile({padding: '10px', flexDirection: 'column'})}
`
//About us
const AboutTitle = styled.div`
text-align:center;
font-size:30px;
font-weight:bold;
color:white;
text-shadow:2px 2px 3px rgba(8, 8, 8, 0.522);
    
`

const AboutSubTitle = styled.div`
text-align:center;
color:white;
text-shadow:2px 2px 3px rgba(8, 8, 8, 0.422);
font-weight:300;
    
`

const AboutButton = styled.div`
background-color:red;
padding:10px 30px;
width:30%;
position:relative;
left:30%;
color:white;
border-radius:10px;
text-align:center;
box-shadow: 3px 3px 3px rgba(8, 8, 8, 0.822);
font-weight:bold;



`
export const Product = () => {
    return (
        <Container>
            <Navbar/>

            <Text>

                <AboutText>
                    <AboutTitle>About US</AboutTitle>
                    <AboutSubTitle>Cars For College Students is a website designed for students who are in the market for the best looking cars at the most affordable price. As a family company we will work with you in order to achieve complete satisfaction and get you out the door driving your new car.</AboutSubTitle>
                    <AboutButton>Learn More</AboutButton>
                    
                </AboutText>

            </Text>
          
            <Footer/>
        </Container>
    )
}

export default Product