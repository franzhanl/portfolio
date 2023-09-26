import { Header } from '../components/Header/Header';
import { About } from '../components/About/About';
import { Portifolio } from '../components/Portifolio/Portifolio';
import styled from 'styled-components';

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


function Home() {
  return (
    <StyledHome>
      <Header />
      <About />
      <Portifolio />
    </StyledHome>
  )
}

export { Home }
