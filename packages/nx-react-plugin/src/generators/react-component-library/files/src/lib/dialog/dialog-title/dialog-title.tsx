import {
  DialogTitle as MUIDialogTitle,
  DialogTitleProps as MUIDialogTitleProps,
} from '@mui/material';
import { DialogTitleTypeMap } from '@mui/material/DialogTitle/DialogTitle';
import * as React from 'react';

/* eslint-disable-next-line */
export type DialogTitleProps<
  D extends React.ElementType = DialogTitleTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = MUIDialogTitleProps<D, P>;

export function DialogTitle(props: DialogTitleProps) {
  return <MUIDialogTitle {...props}>{props.children}</MUIDialogTitle>;
}

export default DialogTitle;
