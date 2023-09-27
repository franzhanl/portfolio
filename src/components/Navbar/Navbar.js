import styled from 'styled-components'
import { useEffect, useState } from 'react'

const StyledNav = styled.nav`
    position: fixed;
    display: flex;
    justify-content: center;
    top: 0;
    width: 100%;
    color: white;
    background-color: rgba(51, 51, 51, ${({ isScrolled }) => (isScrolled ? 1 : 0)});
    transition: background-color 0.3s ease;
`
const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1400px;
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
    }
`

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect( () => {
        const handleScroll = () => {
            if(window.scrollY > 50){
                setIsScrolled(true)
            } else{
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return() => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return(
        <StyledNav isScrolled={isScrolled}>
            <StyledDiv>
            <StyledA><h2>Home</h2></StyledA>
                <StyledUl>
                    <StyledA><li>Sobre mim</li></StyledA>
                    <StyledA><li>Portifolio</li></StyledA>
                    <StyledA><li>Curriculo</li></StyledA>
                    <StyledA><li>Contato</li></StyledA>
                </StyledUl>
            </StyledDiv>
        </StyledNav>
    )
}

export { Navbar }