import {
  StepLabel as MUIStepLabel,
  StepLabelProps as MUIStepLabelProps,
} from '@mui/material';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface StepLabelProps extends MUIStepLabelProps {}

const StyledStepLabel = styled.div``;

export function StepLabel(props: StepLabelProps) {
  return <MUIStepLabel {...props}></MUIStepLabel>;
}

export default StepLabel;
