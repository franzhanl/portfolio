import styled from "styled-components"

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 200px;
    height: 250px;
    gap: 30px;
`
const StyledIcon = styled.div`
    font-size: 4rem;
`
const StyledTitle = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`

const Card = ({icon, title, description}) => {
    return(
        <StyledCard>
            <StyledIcon>{icon}</StyledIcon>
            <StyledTitle>{title}</StyledTitle>
            <div>{description}</div>
        </StyledCard>
    )
}

export { Card }