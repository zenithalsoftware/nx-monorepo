import {
  TableRow as MUITableRow,
  TableRowProps as MUITableRowProps,
} from '@mui/material';
import { TableRowTypeMap } from '@mui/material/TableRow/TableRow';
import * as React from 'react';

export type TableRowProps<
  D extends React.ElementType = TableRowTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = MUITableRowProps<D, P>;
export function TableRow(props: TableRowProps) {
  return <MUITableRow {...props}></MUITableRow>;
}

export default TableRow;
