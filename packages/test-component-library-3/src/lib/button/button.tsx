import {
  ButtonProps as MUIButtonProps,
  default as MUIButton,
} from '@mui/material/Button';

/* eslint-disable-next-line */
export interface ButtonProps extends MUIButtonProps {}

export function Button(props: ButtonProps) {
  return <MUIButton {...props}></MUIButton>;
}

export function PrimaryButton(props: ButtonProps) {
  return <MUIButton {...props} variant={'contained'}></MUIButton>;
}

export function SecondaryButton(props: ButtonProps) {
  return <MUIButton {...props} variant={'text'}></MUIButton>;
}

export default Button;
