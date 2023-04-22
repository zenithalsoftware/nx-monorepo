import { Table as MUITable, TableProps as MUITableProps } from '@mui/material';
import { TableTypeMap } from '@mui/material/Table/Table';
import * as React from 'react';

export type TableProps<
  D extends React.ElementType = TableTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = MUITableProps<D, P>;

export function Table(props: TableProps) {
  return <MUITable {...props}></MUITable>;
}

export default Table;
