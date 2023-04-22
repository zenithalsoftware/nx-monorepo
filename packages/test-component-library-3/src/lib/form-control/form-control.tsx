import {
  FormControl as MUIFormControl,
  FormControlProps as MUIFormControlProps,
} from '@mui/material';
import { FormControlTypeMap } from '@mui/material/FormControl/FormControl';
import * as React from 'react';

export type FormControlProps<
  D extends React.ElementType = FormControlTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = MUIFormControlProps<D, P>;

export function FormControl(props: FormControlProps) {
  return <MUIFormControl {...props}>{props.children}</MUIFormControl>;
}

export default FormControl;
