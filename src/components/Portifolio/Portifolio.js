import styled from "styled-components"
import huddleImage from "../../assets/images/portfolio/portifolio-huddle.png"
import pokedexImage from "../../assets/images/portfolio/portifolio-pokedex.png"
import gitHubImage from "../../assets/images/portfolio/portifolio-github.png"
import responsiveHuddle from "../../assets/images/portfolio/responsive-huddle.png"
import responsivePokedex from "../../assets/images/portfolio/responsive-pokedex (2).png"
import responsiveGithub from "../../assets/images/portfolio/responsive-github.png"
import emBreveImage from "../../assets/images/em-breve.jpg"
import { forwardRef, useState } from "react"
import { StyledTitle } from '../../styles/StyledGlobal'
import { Modal } from "../Modal/Modal"
import { Button } from "../Button/Button"

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
const StyledModalImage = styled.img`
    width: 100%;
`
const StyledModalTitle = styled.h2`
    text-transform: uppercase;
`
const StyledModalButtons = styled.p`
    display: flex;
    gap: 30px;

    a {
        font-size: 14px;
        font-weight: 500;
        
    }
`
const Portifolio = forwardRef((props, ref) => {

    const [showModal1, setShowModal1] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    const [showModal3, setShowModal3] = useState(false)

    const openModal = (modalNumber) => {
        switch (modalNumber) {
          case 1:
            setShowModal1(true);
            break
          case 2:
            setShowModal2(true);
            break
          case 3:
            setShowModal3(true);
            break
          default:
            break
        }
      }

      const closeModal = (modalNumber) => {
        switch (modalNumber) {
          case 1:
            setShowModal1(false);
            break
          case 2:
            setShowModal2(false);
            break
          case 3:
            setShowModal3(false);
            break
          default:
            break;
        }
      }

    return(
        <StyledSection ref={ref}>
            <StyledTitle>Portfólio</StyledTitle>
            <StyledList>
                <StyledLi>
                    <StyledLink onClick={() => openModal(1)}><StyledImage src={huddleImage} /></StyledLink>
                    <h2>Huddle</h2> 
                    <StyledSubTitle>Uma home page simples</StyledSubTitle>
                </StyledLi>
                <StyledLi>
                    <StyledLink onClick={() => openModal(2)}><StyledImage src={pokedexImage} /></StyledLink>
                    <h2>Pokedéx</h2>
                    <StyledSubTitle>Simulador de Pokedex</StyledSubTitle>
                </StyledLi>
                <StyledLi>
                    <StyledLink onClick={() => openModal(3)}><StyledImage src={gitHubImage} /></StyledLink>
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

            {/* Modals */}
            <>
                <Modal isOpen={showModal1} onClose={() => closeModal(1)}>
                    <StyledModalTitle>Huddle</StyledModalTitle>
                    <StyledModalImage src={responsiveHuddle}/>
                    {/* <StyledModalDescription>
                         É uma pagina com um layout simples, o objetivo desse site foi
                        exclusivamente reforçar meu conhecimento sobre responsividade utilizando HTML e CSS.
                    </StyledModalDescription> */}
                    <p><strong>Tecnologias</strong>: HTML | CSS</p>
                    <StyledModalButtons>
                        <Button href="https://franzhanl.github.io/quest-html-css/" target="_blank">Acessar site</Button>
                        <Button href="https://github.com/franzhanl/quest-html-css" target="_blank">Acessar repositório</Button>
                    </StyledModalButtons>
                </Modal>

                <Modal isOpen={showModal2} onClose={() => closeModal(2)}>
                    <StyledModalTitle>Pokédex</StyledModalTitle>
                    <StyledModalImage src={responsivePokedex}/>
                    {/* <StyledModalDescription>
                        Um site cujo o objetivo é simular uma pokedex, desse modo trazendo todos os pokemons 
                        com suas informações que podem ser acessadas de modo individualmente.
                    </StyledModalDescription> */}
                    <p><strong>Tecnologias</strong>: ReactJS | HTML | CSS | JavaScript | Styled-Components | ContextAPI</p>
                    <StyledModalButtons>
                        <Button href="https://pokedex-api-franz.vercel.app/" target="_blank">Acessar site</Button>
                        <Button href="https://github.com/franzhanl/pokedex-api" target="_blank">Acessar repositório</Button>
                    </StyledModalButtons>
                </Modal>

                <Modal isOpen={showModal3} onClose={() => closeModal(3)}>
                    <StyledModalTitle>Github Profile</StyledModalTitle>
                    <StyledModalImage src={responsiveGithub}/>
                    {/* <StyledModalDescription>
                        O site possui o intuito de retornar informações de usuarios do GitHub a partir 
                        do nome pesquisado.
                    </StyledModalDescription> */}
                    <p><strong>Tecnologias</strong>: HTML | CSS | JavaScript | GitHubAPI</p>
                    <StyledModalButtons>
                        <Button href="https://github-api-nine-blush.vercel.app/" target="_blank">Acessar site</Button>
                        <Button href="https://github.com/franzhanl/github-api" target="_blank">Acessar repositório</Button>
                    </StyledModalButtons>
                    
                </Modal>
            </>
        </StyledSection>
    )
})

export { Portifolio }