import styled from "styled-components"
import { forwardRef } from "react"
import { StyledTitle } from '../../styles/StyledGlobal'
import { DownloadCurriculum } from "./DownloadCurriculum/DownloadCurriculum"

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 80px 0;
    gap: 20px;
`
const StyledCurriculum = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 400px;
    background-color: #f8f9fa;

`
const StyledCurriculumTitle = styled.div`
    width: 100px;
    height: 20px;
    background-color: rgb(145, 145, 145);
    border-radius: 5px;
    margin: 20px;
`
const StyledCurriculumContent = styled.div`
    width: 60%;
    height: 15px;
    background-color: rgb(210, 210, 210);
    border-radius: 5px;
    position: relative;
    margin-bottom: 55px;

    &::before,
    &::after {
        content: '';
        height: 15px; 
        border-radius: 5px;
        position: absolute;
        background-color: rgb(210, 210, 210);
    }

    &::before {
        top: 150%; 
        width: 103%;
    }

    &::after {
        top: 300%; 
        width: 97%;
    }
`

const Curriculum = forwardRef((props, ref) => {
    return(
        <StyledSection ref={ref}>
            <StyledTitle>Currículo</StyledTitle>
            <StyledCurriculum>
                <StyledCurriculumTitle />
                <StyledCurriculumContent />
                <StyledCurriculumContent />
                <StyledCurriculumContent />
                <StyledCurriculumContent />
            </StyledCurriculum>
            <DownloadCurriculum />
        </StyledSection>
    )
})

export { Curriculum }