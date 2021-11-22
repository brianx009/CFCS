import styled from 'styled-components'
import { mobile } from '../responsive'
import Navbar from '../components/Navbar'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
        ), 
        url('https://imagescdn.dealercarsearch.com/DealerImages/ImageLibrary/1920x800/5d8b9f6c.jpg') center;

        background-size: cover;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
`
const Wrapper = styled.div`
        width: 25%;
        padding: 20px;
        background-color: white;
        ${mobile({width: '75%'})}

`
const NavContain = styled.div`
        background-color:red;
        width:100%;
        position:relative;
        bottom:30vh;
        

`
const Title = styled.h1`
        font-size: 24px;
        font-weight: 300;
`
const Form = styled.form`
        display: flex;
        flex-direction: column;
`

const Input = styled.input`
        flex: 1;
        min-width: 40%;
        margin: 10px 0px ;
        padding: 10px;
`

const Button = styled.button`
        width: 40%;
        border: none;
        padding: 15px 20px;
        background-color: red;
        color: white;
        cursor: pointer;
        margin-bottom: 10px;
`
const Link = styled.a`
        margin: 5px 0px;
        font-size: 12px;
        text-decoration: underline;
        cursor: pointer;
`

export const Login = () => {
    return (
            
        <Container>
                 <NavContain>
                         <Navbar/>
                 </NavContain>
                 <Wrapper>
                    

          
                
                <Title>Sign In</Title>
                <Form>
                    <Input placeholder='username'/>
                    <Input placeholder='password'/>
                    <Button>Sign In</Button>
                    <Link>Forgot Password?</Link>
                    <Link exact to="/register">Create New Account</Link>
                </Form>
            </Wrapper>
            
        </Container>
        
    )
}

export default Login
