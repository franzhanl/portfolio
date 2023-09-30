import styled from 'styled-components'
import profileImage from '../../assets/images/perfil1.jpg'
import { forwardRef } from 'react'
import { StyledTitle } from '../../styles/StyledGlobal'

const StyledProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: 100%;
    padding: 80px;
`
const StyledAbout = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
`
const StyledText = styled.p`
    display: flex;
    color: grey;
    width: 500px;  
`
const StyledPicture = styled.img`
    background-image: url(${profileImage});
    background-size: cover;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    border: 10px solid rgb(215, 215, 215); 
`
const StyledSpan = styled.span`
    font-style: italic;
    color: grey;

`
const StyledName = styled.h2`
    text-transform: capitalize;
`
const StyledIcon = styled.a`
    i{
        color: white;
        background-color: #222326;
        border-radius: 50%;
        border: 1px solid rgb(215, 215, 215); 
        padding: 10px;
    }
`
const StyledContacts = styled.div`
    display: flex;
    margin-top: 15px;
    gap: 20px;
`

const About = forwardRef((props, ref) => {
    return(
        <section ref={ref}>
            <StyledProfile>
                <StyledTitle>Sobre Mim</StyledTitle>
                <StyledSpan>Oi! como vai você?</StyledSpan>

                <StyledAbout>
                    <StyledPicture></StyledPicture>
                    <StyledText>
                        Me chamo Franz, sou um desenvolvedor frontend em busca de oportunidades para expandir 
                        minhas habilidades e conhecimentos em desenvolvimento web. Com formação em Análise e 
                        Desenvolvimento de Sistemas, estou comprometido em crescer e contribuir para projetos 
                        desafiadores. Meu entusiasmo pela programação e minha vontade de aprender me motivam a 
                        enfrentar novos desafios e a desenvolver interfaces de usuário eficazes e atraentes. Sou 
                        dedicado, autodidata e estou ansioso para fazer parte de uma equipe de desenvolvimento.
                    </StyledText>
                </StyledAbout>

                <StyledName>Franz Richard Hanl Neto</StyledName>
                <StyledSpan>Frontend Developer</StyledSpan>

                <StyledContacts>
                    <StyledIcon href='https://www.linkedin.com/in/franz-hanl/'><i class="fab fa-linkedin-in fa-lg"></i></StyledIcon>
                    <StyledIcon href='https://github.com/franzhanl'><i class="fab fa-github-alt fa-lg"></i></StyledIcon>
                </StyledContacts>
            </StyledProfile>
        </section>
        
    )
})

export { About }