import styled from 'styled-components'

const StyledButton = styled.a`
    font-size: 1.5rem;
    text-transform: uppercase;
    background-color: #ffc800;
    border-radius: 5px;
    padding: 20px;
    cursor: pointer;
    text-decoration: none;
    color: inherit;

    &:hover{
        background-color: #d9aa00;
    }
`

const Button = ({onClick, href, target, children}) => {
    return <StyledButton onClick={onClick} href={href} target={target}> {children} </StyledButton>
}

export { Button }