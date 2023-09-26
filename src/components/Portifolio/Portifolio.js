import styled from "styled-components"
import huddleImage from "../../assets/images/portifolio-huddle.png"
import pokedexImage from "../../assets/images/portifolio-pokedex.png"
import gitHubImage from "../../assets/images/portifolio-github.png"
import emBreveImage from "../../assets/images/em-breve.jpg"

const StyledSection = styled.section`
    background-color: #f8f9fa;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-bottom: 50px;
`
const StyledTitle = styled.h2`
    font-size: 3rem;
    text-transform: uppercase;
`
const StyledList = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style-type: none;
    gap: 30px;
    width: 1400px;
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
    height: 255px;

`
const StyledSubTitle = styled.span`
    font-style: italic;
    color: grey;
    padding-bottom: 30px;
`
const Portifolio = () => {
    return(
        <StyledSection>
            <StyledTitle>Portifólio</StyledTitle>
            <StyledList>
                <StyledLi>
                    <StyledImage src={huddleImage} />
                    <h2>Huddle</h2> 
                    <StyledSubTitle>Uma home page simples</StyledSubTitle>
                </StyledLi>
                <StyledLi>
                    <StyledImage src={pokedexImage} />
                    <h2>Pokedéx</h2>
                    <StyledSubTitle>Simulador de Pokedex</StyledSubTitle>
                </StyledLi>
                <StyledLi>
                    <StyledImage src={gitHubImage} />
                    <h2>GitHub Profile</h2>
                    <StyledSubTitle>Pesquisador de profiles</StyledSubTitle>
                </StyledLi>
                <StyledLi>
                    <StyledImage src={emBreveImage} />
                    <h2>Em breve</h2>
                    <StyledSubTitle>Projetos futuros</StyledSubTitle>
                </StyledLi>
                <StyledLi>
                    <StyledImage src={emBreveImage} />
                    <h2>Em breve</h2>
                    <StyledSubTitle>Projetos futuros</StyledSubTitle>
                </StyledLi>
                <StyledLi>
                    <StyledImage src={emBreveImage} />
                    <h2>Em breve</h2>
                    <StyledSubTitle>Projetos futuros</StyledSubTitle>                    
                </StyledLi>
            </StyledList>
        </StyledSection>
    )
}

export { Portifolio }