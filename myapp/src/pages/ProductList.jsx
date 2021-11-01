import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from '../responsive';
import React, { useState } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
    useLocation,
  
    
  } from "react-router-dom";

const Container = styled.div``

const Title = styled.h1`
    margin: 20px;

`

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({margin: '0px 20px', display:'flex', flexDirection:'column'})}
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    marigin-right: 20px;
    ${mobile({marginRight: '0px'})}
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin: '10px 0px'})}
`
const Option = styled.option``

const ProductList = () => {
    const location = useLocation();
    const cat = (location.pathname.split("/"[2]));
    const[filters,setFilters] = useState({});
    const[sort,setSort] = useState("newest");

    const handleFilters =(e) =>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

    console.log(filters);
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Title>Inventory</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="size" onChange ={handleFilters}> 
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Grey</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                    </Select>
                    <Select name="cat">
                        <Option>Sports Cars</Option>
                        <Option>Economic Cars</Option>
                        <Option>Trucks</Option>
                    </Select>
                </Filter>
                <Filter>    
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={e => setSort(e.target.value)}>
                        <Option value="newest" >Recently Added</Option>
                        <Option value="asc" >Price (Low to High)</Option>
                        <Option value="desc">Price (High to Low)</Option>

                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort}/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}


export default ProductList