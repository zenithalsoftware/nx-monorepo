import {
  StepContent as MUIStepContent,
  StepContentProps as MUIStepContentProps,
} from '@mui/material';

/* eslint-disable-next-line */
export interface StepContentProps extends MUIStepContentProps {}

export function StepContent(props: StepContentProps) {
  return <MUIStepContent {...props}></MUIStepContent>;
}

export default StepContent;
