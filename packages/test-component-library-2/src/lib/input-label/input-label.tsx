import {
  InputLabel as MUIInputLabel,
  InputLabelProps as MUIInputLabelProps,
} from '@mui/material';
import { InputLabelTypeMap } from '@mui/material/InputLabel/InputLabel';
import * as React from 'react';

export type InputLabelProps<
  D extends React.ElementType = InputLabelTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = MUIInputLabelProps<D, P>;

export function InputLabel(props: InputLabelProps) {
  return <MUIInputLabel {...props}>{props.children}</MUIInputLabel>;
}

export default InputLabel;
