import { List as MUIList, ListProps as MUIListProps } from '@mui/material';
import { ListTypeMap } from '@mui/material/List/List';
import * as React from 'react';

export type ListProps<
  D extends React.ElementType = ListTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = MUIListProps<D, P>;

export function List(props: ListProps) {
  return <MUIList {...props}></MUIList>;
}

export default List;
