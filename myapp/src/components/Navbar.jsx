import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Container = styled.div
`
height: 100px;
width:100%;
background-color:none;
position fixed;
z-index:100;
`;

const Wrapper = styled.div
`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`;

const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`;

const Language = styled.span`
font-size: 14px;
cursor: pointer;
`;

const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
paddig: 5px;
`

const Input = styled.input`
    border: none;
`

const Center = styled.div`
flex:1;
text-align: center;

`

const Logo = styled.h1`
    font-weight: bold;
`


const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
    return (

        <Router>
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer> 
                        <Input/>
                        <Search style = {{color:'gray', fontSize:16}}/>
                    </SearchContainer>                
                </Left>
                <Center><Logo>CFCS.</Logo></Center>
                <Right>
                    <MenuItem>HOME</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color='primary'>
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                    </Right>
            </Wrapper>
        </Container>
        </Router>
        
    )
}

export default Navbar
