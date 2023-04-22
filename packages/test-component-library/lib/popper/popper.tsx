import {
  Popper as MUIPopper,
  PopperProps as MUIPopperProps,
} from '@mui/material';

export type PopperProps = MUIPopperProps;

export function Popper(props: PopperProps) {
  return <MUIPopper {...props}>{props.children}</MUIPopper>;
}

export default Popper;
