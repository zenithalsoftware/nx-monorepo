import {
  ListItem as MUIListItem,
  ListItemProps as MUIListItemProps,
} from '@mui/material';
import * as React from 'react';

export type ListItemProps<
  D extends React.ElementType = 'li',
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = MUIListItemProps<D, P>;

export function ListItem(props: ListItemProps) {
  return <MUIListItem {...props}></MUIListItem>;
}

export default ListItem;
