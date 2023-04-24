import {
  Stepper as MUIStepper,
  StepperProps as MUIStepperProps,
} from '@mui/material';
import { StepperTypeMap } from '@mui/material/Stepper/Stepper';
import * as React from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */

export type StepperProps<
  D extends React.ElementType = StepperTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = MUIStepperProps<D, P>;

const StyledStepper = styled.div`
  flex: 1 1 auto;
  justify-content: space-evenly;
`;

export function Stepper(props: StepperProps) {
  return (
    <StyledStepper>
      <MUIStepper {...props} sx={{ flex: '1 1 auto' }}></MUIStepper>
    </StyledStepper>
  );
}

export default Stepper;
