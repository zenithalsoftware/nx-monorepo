import {
  AlertProps as MUIAlertProps,
  default as MUIAlert,
} from '@mui/material/Alert';

/* eslint-disable-next-line */
export interface AlertProps extends MUIAlertProps {}

export function Alert(props: AlertProps) {
  return <MUIAlert {...props}></MUIAlert>;
}

export default Alert;
