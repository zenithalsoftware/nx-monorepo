import {
  ListItemButton as MUIListItemButton,
  ListItemButtonProps as MUIListItemButtonProps,
} from '@mui/material';
import { ListItemButtonTypeMap } from '@mui/material/ListItemButton/ListItemButton';
import * as React from 'react';

export type ListItemButtonProps<
  D extends React.ElementType = ListItemButtonTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = MUIListItemButtonProps<D, P>;

export function ListItemButton(props: ListItemButtonProps) {
  return <MUIListItemButton {...props}></MUIListItemButton>;
}

export default ListItemButton;
