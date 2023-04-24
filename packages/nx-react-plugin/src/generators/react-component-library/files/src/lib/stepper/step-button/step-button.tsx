import {
  StepButton as MUIStepButton,
  StepButtonProps as MUIStepButtonProps,
} from '@mui/material';
import { ButtonBaseTypeMap } from '@mui/material/ButtonBase';
import * as React from 'react';

export type StepButtonProps<
  D extends React.ElementType = ButtonBaseTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = MUIStepButtonProps<D, P>;

export function StepButton(props: StepButtonProps) {
  return <MUIStepButton {...props}></MUIStepButton>;
}

export default StepButton;
