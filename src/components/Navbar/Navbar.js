import styled from 'styled-components'
import { useEffect, useState } from 'react'

const StyledNav = styled.nav`
    position: fixed;
    display: flex;
    justify-content: center;
    top: 0;
    width: 100%;
    color: white;
    background-color: rgba(51, 51, 51, ${({ scrolled }) => (scrolled ? 1 : 0)});
    transition: background-color 0.3s ease;
    z-index: 1;
`
const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1300px;
`
const StyledUl = styled.ul`
    display: flex;
    list-style-type: none;
    text-transform: uppercase;
    gap: 30px;
    font-weight: 500;
`
const StyledA = styled.a`
    &:hover{
        color: #ffc800;
        cursor: pointer;
    }
`

const Navbar = ({scrollToSection, home, about, portifolio, curriculum, contact}) => {
    const [scrolled, setscrolled] = useState(false)
    
    useEffect( () => {
        const handleScroll = () => {
            if(window.scrollY > 50){
                setscrolled(true)
            } else{
                setscrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return() => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return(
        <StyledNav scrolled={scrolled}>
            <StyledDiv>
            <StyledA onClick={ () => scrollToSection(home)}><h2>Home</h2></StyledA>
                <StyledUl>
                    <StyledA onClick={ () => scrollToSection(about)}><li>Sobre mim</li></StyledA>
                    <StyledA onClick={ () => scrollToSection(portifolio)}><li>Portifolio</li></StyledA>
                    <StyledA onClick={ () => scrollToSection(curriculum)}><li>Currículo</li></StyledA>
                    <StyledA onClick={ () => scrollToSection(contact)}><li>Contato</li></StyledA>
                </StyledUl>
            </StyledDiv>
        </StyledNav>
    )
}

export { Navbar }