import styled from 'styled-components'

const StyledButton = styled.a`
    font-size: 1.5rem;
    text-transform: uppercase;
    background-color: #ffc800;
    border-radius: 5px;
    padding: 20px;

    &:hover{
        background-color: #d9aa00;
    }
`

const Button = (props) => {
    return <StyledButton> {props.children} </StyledButton>
}

export { Button }