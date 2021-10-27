import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

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
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    marigin-right: 20px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`
const Option = styled.option``

const ProductList = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Title>Inventory</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select> 
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Grey</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                    </Select>
                    <Select>
                        <Option>Sports Cars</Option>
                        <Option>Economic Cars</Option>
                        <Option>Trucks</Option>
                    </Select>
                </Filter>
                <Filter>    
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option selected>Recently Added</Option>
                        <Option>Price (Low to High)</Option>
                        <Option>Price (High to Low)</Option>

                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}


export default ProductList