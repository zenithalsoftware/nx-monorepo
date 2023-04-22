import {
  TableContainer as MUITableContainer,
  TableContainerProps as MUITableContainerProps,
} from '@mui/material';
import { TableContainerTypeMap } from '@mui/material/TableContainer/TableContainer';
import * as React from 'react';

export type TableContainerProps<
  D extends React.ElementType = TableContainerTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = MUITableContainerProps<D, P>;

export function TableContainer(props: TableContainerProps) {
  return <MUITableContainer {...props}></MUITableContainer>;
}

export default TableContainer;
