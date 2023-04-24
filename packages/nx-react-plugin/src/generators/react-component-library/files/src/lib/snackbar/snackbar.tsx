import {
  Snackbar as MUISnackbar,
  SnackbarProps as MUISnackbarProps,
} from '@mui/material';

/* eslint-disable-next-line */
export interface SnackbarProps extends MUISnackbarProps {}

export function Snackbar(props: SnackbarProps) {
  return <MUISnackbar {...props}></MUISnackbar>;
}

export default Snackbar;
