import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

import "../components/Nav.css"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
    useLocation,
  
    
  } from "react-router-dom";

const Container = styled.div`
height: 15vh;
position:fixed;
z-index:100;
width:100%;
background-color: rgba(8, 8, 8, 0.069);

${mobile({height: '75px'})}
`;

const Wrapper = styled.div
`
padding: 40px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({padding: '30px 0px'})}
`;

const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`;

const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display: 'none'})}
`;

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
paddig: 5px;
`

const Input = styled.input`
    border: none;
    ${mobile({width: '50px'})}
`

const Center = styled.div`
flex:1;
text-align: center;

`

const Logo = styled.h1`
    font-weight: bold;
    text-shadow:2px 2px 3px rgb(8,8,8,8);
    ${mobile({fontSize: '24px'})}
`


const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex: 2,justifyContent: 'center'})}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: '8px', marginLeft: '10px'})}
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                
            <Link style={{color:"white"}} className="navLink" to="/">
            <Logo>CFCS</Logo>
            </Link>
             
            
                <Right>
                    <Link className="navLink" exact to="/">
                    <MenuItem>Home</MenuItem>
                    </Link>
                   
                    <Link className="navLink" exact to="/about">
                    <MenuItem>About</MenuItem>
                    </Link>
                    <Link className="navLink" exact to="/productList">
                    <MenuItem>Cars</MenuItem>
                    </Link>
                    <Link style={{textDecoration:"none"}} exact to="/login">
                    <MenuItem  className="navBtn">Sign In</MenuItem>
                    </Link>
                    <MenuItem>
                        <Badge badgeContent={0} color='primary'>
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                    </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
