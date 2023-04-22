import {
  Dialog as MUIDialog,
  DialogProps as MUIDialogProps,
} from '@mui/material';

/* eslint-disable-next-line */
export interface DialogProps extends MUIDialogProps {}

export function Dialog(props: DialogProps) {
  return <MUIDialog {...props}>{props.children}</MUIDialog>;
}

export default Dialog;
