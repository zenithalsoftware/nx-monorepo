import { Step as MUIStep, StepProps as MUIStepProps } from '@mui/material';
import { StepTypeMap } from '@mui/material/Step/Step';
import * as React from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export type StepProps<
  D extends React.ElementType = StepTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = MUIStepProps<D, P>;

const StyledStep = styled.div`
  flex: 1 1 auto;
`;

export function Step(props: StepProps) {
  return <MUIStep {...props}></MUIStep>;
}

export default Step;
