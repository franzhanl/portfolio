import { StyledTitle } from "../../styles/StyledGlobal"
import styled from "styled-components"
import { forwardRef } from "react"
import { Card } from "../Card/Card"

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: rgb(33, 37, 41);
    width: 100%;
    padding: 80px 0;
    gap: 20px;
`
const StyledContent = styled.div`
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 500px;
    gap: 30px;
`
const StyledLink = styled.a`
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
        opacity: 0.7;
    }
`

const Contact = forwardRef((props, ref) => {
    return(
        <StyledSection ref={ref}>
            <StyledTitle>Contato</StyledTitle>
            <StyledContent>
                <Card icon={<i class="fab fa-whatsapp-square fa-lg"></i>} title={"Fone"} description={"+55 (18) 9 8135-6266"} />
                <StyledLink href="https://www.linkedin.com/in/franz-hanl/"><Card icon={<i class="fab fa-linkedin fa-lg"></i>} title={"Linkedin"} description={"Perfil"} /></StyledLink>
                <StyledLink href="https://github.com/franzhanl"><Card icon={<i class="fab fa-github-square fa-lg"></i>} title={"GitHub"} description={"Projetos"} /></StyledLink>
                <Card icon={<i class="fas fa-envelope-square fa-lg"></i>} title={"Email"} description={"franz.hanl@hotmail.com"} />
            </StyledContent>
        </StyledSection>
    )
})

export { Contact }