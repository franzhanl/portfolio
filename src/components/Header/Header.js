import homeImage from '../../assets/images/home.jpg'
import styled from 'styled-components'
import { Button } from '../Button/Button'

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
const StyledNav = styled.nav`
    position: fixed;
    display: flex;
    justify-content: space-between;
    top: 0;
    width: 80%;

`
const StyledUl = styled.ul`
    display: flex;
    list-style-type: none;
    text-transform: uppercase;
    gap: 30px;
    font-weight: 500;
    
`
const StyledLi = styled.li`
    &:hover{
        color: #ffc800;
    }
`


const Header = () => {
    return(
        <StyledHeader>
            <StyledNav>
                <h2>Olá</h2>
                <StyledUl>
                    <StyledLi>Sobre mim</StyledLi>
                    <StyledLi>Portifolio</StyledLi>
                    <StyledLi>Curriculo</StyledLi>
                    <StyledLi>Contato</StyledLi>
                </StyledUl>
            </StyledNav>
            <StyledSubtitle>Seja Bem Vindo(a)!</StyledSubtitle>
            <StyledTitle>É um prazer te receber</StyledTitle>
            <Button>Saber mais</Button>
        </StyledHeader>
    )
}

export { Header }