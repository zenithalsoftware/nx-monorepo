import {
  DialogActions as MUIDialogActions,
  DialogActionsProps as MUIDialogActionsProps,
} from '@mui/material';

/* eslint-disable-next-line */
export interface DialogActionsProps extends MUIDialogActionsProps {}

export function DialogActions(props: DialogActionsProps) {
  return <MUIDialogActions {...props}>{props.children}</MUIDialogActions>;
}

export default DialogActions;
