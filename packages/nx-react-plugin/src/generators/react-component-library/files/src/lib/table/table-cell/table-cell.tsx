import {
  TableCell as MUITableCell,
  TableCellProps as MUITableCellProps,
} from '@mui/material';

/* eslint-disable-next-line */
export interface TableCellProps extends MUITableCellProps {}

export function TableCell(props: TableCellProps) {
  return <MUITableCell {...props}></MUITableCell>;
}

export default TableCell;
