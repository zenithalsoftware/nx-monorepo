import {
  DialogContent as MUIDialogContent,
  DialogContentProps as MUIDialogContentProps,
} from '@mui/material';

/* eslint-disable-next-line */
export interface DialogContentProps extends MUIDialogContentProps {}

export function DialogContent(props: DialogContentProps) {
  return <MUIDialogContent {...props}>{props.children}</MUIDialogContent>;
}

export default DialogContent;
