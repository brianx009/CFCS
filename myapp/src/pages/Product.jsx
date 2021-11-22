import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';
import axios from 'axios'



const Container = styled.div`



`
const Wrapper = styled.div`
    padding: 50px;
    display:flex;
    ${mobile({padding: '10px', flexDirection: 'column'})}
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: '30vh'})}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding: '10px'})}
`

const Title = styled.h1`
    font-weight: 200;
    

`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`


const AddContainer = styled.div`
    width: 125%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width: '100%'})}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;

`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid black;
    display: flex;
    align-intems: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 5px;
    border: 2px solid black;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`;

export const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src='https://www.thegroupnc.com/wp-content/uploads/2017/12/Honda.png'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>2017 Honda Accord</Title>
                    <Desc>The 2021 Honda Accord does most everything well and finishes near the top of our midsize car rankings.
                         Its standout attributes include its engaging driving dynamics and upscale interior.
                    </Desc>
                    <Price>$9,999</Price>

                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product