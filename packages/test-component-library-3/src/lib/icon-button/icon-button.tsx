import {
  IconButton as MUIIconButton,
  IconButtonProps as MUIIconButtonProps,
} from '@mui/material';
import { IconButtonTypeMap } from '@mui/material/IconButton/IconButton';
import * as React from 'react';

export type IconButtonProps<
  D extends React.ElementType = IconButtonTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = MUIIconButtonProps<D, P>;

export function IconButton(props: IconButtonProps) {
  return <MUIIconButton {...props}></MUIIconButton>;
}

export default IconButton;
