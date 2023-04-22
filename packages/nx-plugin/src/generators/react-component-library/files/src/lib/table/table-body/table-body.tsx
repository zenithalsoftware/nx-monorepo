import {
  TableBody as MUITableBody,
  TableBodyProps as MUITableBodyProps,
} from '@mui/material';
import { TableBodyTypeMap } from '@mui/material/TableBody/TableBody';
import * as React from 'react';

export type TableBodyProps<
  D extends React.ElementType = TableBodyTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = MUITableBodyProps<D, P>;

export function TableBody(props: TableBodyProps) {
  return <MUITableBody {...props}></MUITableBody>;
}

export default TableBody;
