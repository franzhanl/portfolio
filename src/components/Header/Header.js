import homeImage from '../../assets/images/home.jpg'
import styled from 'styled-components'
import { Button } from '../Button/Button'
import { forwardRef } from 'react'

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 768px;
    justify-content: center;
    background-image: url(${homeImage});
    background-size: cover;
    background-position: center center;
    width: 100%;
    gap: 50px;
    color: white;
`
const StyledTitle = styled.div`
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: 900;
`
const StyledSubtitle = styled.div`
    font-size: 2.5rem;
    font-style: italic;
    font-family: serif;
`

const Header = forwardRef((props, ref) => {
    return(
        <StyledHeader ref={ref}>
            <StyledSubtitle>Seja Bem Vindo(a)!</StyledSubtitle>
            <StyledTitle>É um prazer te receber</StyledTitle>
            <Button>Saber mais</Button>
        </StyledHeader>
    )
})

export { Header }