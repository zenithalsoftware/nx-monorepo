import {
  FormGroup as MUIFormGroup,
  FormGroupProps as MUIFormGroupProps,
} from '@mui/material';

/* eslint-disable-next-line */
export interface FormGroupProps extends MUIFormGroupProps {}

export function FormGroup(props: FormGroupProps) {
  return <MUIFormGroup {...props}>{props.children}</MUIFormGroup>;
}

export default FormGroup;
