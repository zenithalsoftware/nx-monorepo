import {
  TableHead as MUITableHead,
  TableHeadProps as MUITableHeadProps,
} from '@mui/material';
import { TableHeadTypeMap } from '@mui/material/TableHead/TableHead';
import * as React from 'react';

export type TableHeadProps<
  D extends React.ElementType = TableHeadTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = MUITableHeadProps<D, P>;

export function TableHead(props: TableHeadProps) {
  return <MUITableHead {...props}></MUITableHead>;
}

export default TableHead;
