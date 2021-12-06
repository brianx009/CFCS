import styled from 'styled-components'
import { categories } from '../data'
import { mobile } from '../responsive'
import CategoryItem from './CategoryItem'


const Container = styled.div`
    display: flex;
    padding: 5vh;
    justify-content: space-between;
    ${mobile({padding: '0px', flexDirection:'column'})}
`
const ButtonCat = styled.div`
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


 const Categories = () => {
    return( 

        <div>
            <Container>
        {categories.map(item=> (
                <CategoryItem item={item} key={item.id}/>
            ))}

        
        </Container>

        <h1 style={{textDecoration:"none", color:'Grey'}}>Featured Products</h1>


        </div>
    
    

    )

        
      
}

export default Categories