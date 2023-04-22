import {
  default as MUITextField,
  TextFieldProps as MUITextFieldProps,
} from '@mui/material/TextField';

export type TextFieldProps = MUITextFieldProps;

export function TextField(props: TextFieldProps) {
  return <MUITextField {...props} variant={'outlined'}></MUITextField>;
}

export default TextField;
