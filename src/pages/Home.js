import { Header } from '../components/Header/Header';
import { About } from '../components/About/About';
import styled from 'styled-components';

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const StyledTitle = styled.h2`
    font-size: 3rem;
    text-transform: uppercase;
`
const StyledSubTitle = styled.span`
    font-style: italic;
    color: grey;
`
function Home() {
  return (
    <StyledHome>
      <Header />
      <StyledTitle>Sobre Mim</StyledTitle>
      <About />
    </StyledHome>
  )
}

export { Home }
