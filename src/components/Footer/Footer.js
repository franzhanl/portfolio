import styled from "styled-components"

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px 0;
`

const Footer = () => {
    return(
        <StyledFooter>
            <p>&copy; 2023 Franz Richard Hanl Neto. Todos os direitos reservados.</p>
        </StyledFooter>
    )
}

export { Footer }