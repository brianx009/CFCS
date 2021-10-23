import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`



const Announcement = () => {
    return (
        <Container>
              CARS FOR COLLEGE STUDENTS, BUY YOUR DREAM VEHICLE AT A DREAM PRICE
        </Container>
    )
}

export default Announcement
