import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  position: relative;  
  width: 100%;
  max-width: 600px;
  margin:10px;
`

const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
  position: relative;
  :before {
    content: '';
    position: absolute;
    background: #d1d1d1;
    height: 3px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
  :after {
    content: '';
    position: absolute;
    background:  #FF133B;
    height: 3px;
    width: ${({ width }) => width};
    top: 50%;
    transition: 0.8s ease;
    transform: translateY(-50%);
    left: 0;
  }
`

const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
`
const StepsLabelContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translate(-50%, -50%);
`
const StepLabel = styled.span`
  font-size: 19px;
  color: #4a154b;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -15px;
  margin-top: 100px;
`
const ButtonStyle = styled.button`
  border-radius: 4px;
  border: 0;
  background: #4a154b;
  color: #ffffff;
  cursor: pointer;
  padding: 8px;
  width: 90px;
  :active {
    transform: scale(0.98);
  }
  :disabled {
    background: #f3e7f3;
    color: #000000;
    cursor: not-allowed;
  }
`

const steps = [
    {
        label: '',

    },
    {
        label: '',

    },
    {
        label: '',

    },
]

const ProgressBar = ({activeTab}) => {
    const [activeStep, setActiveStep] = useState(activeTab)
    console.log(activeTab)


 

    const totalSteps = steps.length

    const width = `${(100 / (totalSteps )) * (activeStep )}%`

    useEffect(() => {
      setActiveStep(activeTab);
    }, [activeTab])

    return (
        <MainContainer>
            <StepContainer width={width}>
                {steps.map(( step,ix ) => (
                    <StepWrapper key={ix}>
                        <StepsLabelContainer key={ix}>
                            <StepLabel key={ix}></StepLabel>
                        </StepsLabelContainer>
                    </StepWrapper>
                ))}
            </StepContainer>
        </MainContainer>
    )
}

export default ProgressBar
