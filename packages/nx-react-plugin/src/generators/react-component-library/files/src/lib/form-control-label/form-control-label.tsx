import {
  FormControlLabel as MUIFormControlLabel,
  FormControlLabelProps as MUIFormControlLabelProps,
} from '@mui/material';

/* eslint-disable-next-line */
export interface FormControlLabelProps extends MUIFormControlLabelProps {}

export function FormControlLabel(props: FormControlLabelProps) {
  return <MUIFormControlLabel {...props}></MUIFormControlLabel>;
}

export default FormControlLabel;
