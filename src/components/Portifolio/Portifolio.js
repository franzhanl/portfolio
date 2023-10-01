import styled from "styled-components"
import huddleImage from "../../assets/images/portifolio-huddle.png"
import pokedexImage from "../../assets/images/portifolio-pokedex.png"
import gitHubImage from "../../assets/images/portifolio-github.png"
import emBreveImage from "../../assets/images/em-breve.jpg"
import { forwardRef } from "react"
import { StyledTitle } from '../../styles/StyledGlobal'

const StyledSection = styled.section`
    background-color: #f8f9fa;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 80px 0;
`
const StyledList = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style-type: none;
    gap: 30px;
    max-width: 1300px;
    padding: 0;
`
const StyledLi = styled.li`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 400px;
    text-align: center;
    background-color: white;

    
`
const StyledImage = styled.img`
    width: 100%;
    height: 255px;
    transition: all 0.4s ease;

    &:hover{
        opacity: 5%;
    }
`
const StyledLink = styled.a`
    height: 255px;    
    position: relative;

    &:hover{
        background-color: rgb(255, 200, 0);
        
        // Plus icon ( + )
        &::before,
        &::after {
            content: ''; /* O conteúdo será uma linha */
            position: absolute;
            background-color: #fff; /* Cor da linha */
            border-radius: 10px;
            pointer-events: none;
        }

        &::before {
            width: 50px; 
            height: 8px; 
            top: 48%; 
            left: 0; 
            transform: translate(334%, -50%); 
        }

        &::after {
            width: 8px; 
            height: 50px; 
            top: 0; 
            left: 48%; 
            transform: translate(-50%, 195%); 
        }
    }
`
const StyledSubTitle = styled.span`
    font-style: italic;
    color: grey;
    padding-bottom: 30px;
`
const Portifolio = forwardRef((props, ref) => {
    return(
        <StyledSection ref={ref}>
            <StyledTitle>Portifólio</StyledTitle>
            <StyledList>
                <StyledLi>
                    <StyledLink><StyledImage src={huddleImage} /></StyledLink>
                    <h2>Huddle</h2> 
                    <StyledSubTitle>Uma home page simples</StyledSubTitle>
                </StyledLi>
                <StyledLi>
                    <StyledLink><StyledImage src={pokedexImage} /></StyledLink>
                    <h2>Pokedéx</h2>
                    <StyledSubTitle>Simulador de Pokedex</StyledSubTitle>
                </StyledLi>
                <StyledLi>
                    <StyledLink><StyledImage src={gitHubImage} /></StyledLink>
                    <h2>GitHub Profile</h2>
                    <StyledSubTitle>Pesquisador de profiles</StyledSubTitle>
                </StyledLi>
                <StyledLi>
                    <StyledLink><StyledImage src={emBreveImage} /></StyledLink>
                    <h2>Em breve</h2>
                    <StyledSubTitle>Projetos futuros</StyledSubTitle>
                </StyledLi>
                <StyledLi>
                    <StyledLink><StyledImage src={emBreveImage} /></StyledLink>
                    <h2>Em breve</h2>
                    <StyledSubTitle>Projetos futuros</StyledSubTitle>
                </StyledLi>
                <StyledLi>
                    <StyledLink><StyledImage src={emBreveImage} /></StyledLink>
                    <h2>Em breve</h2>
                    <StyledSubTitle>Projetos futuros</StyledSubTitle>                    
                </StyledLi>
            </StyledList>
        </StyledSection>
    )
})

export { Portifolio }