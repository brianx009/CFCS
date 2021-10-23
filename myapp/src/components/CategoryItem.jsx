import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    `

const Title = styled.h1``
const Button = styled.button``

export default function CategoryItem({item}) {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>Shop</Button>
            </Info>
        </Container>
    )
}
