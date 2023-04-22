import {
  DialogContentText as MUIDialogContentText,
  DialogContentTextProps as MUIDialogContentTextProps,
} from '@mui/material';
import { DialogContentTextTypeMap } from '@mui/material/DialogContentText/DialogContentText';
import * as React from 'react';

export type DialogContentTextProps<
  D extends React.ElementType = DialogContentTextTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = MUIDialogContentTextProps<D, P>;

export function DialogContentText(props: DialogContentTextProps) {
  return (
    <MUIDialogContentText {...props}>{props.children}</MUIDialogContentText>
  );
}

export default DialogContentText;
