import {
  ListItemText as MUIListItemText,
  ListItemTextProps as MUIListItemTextProps,
} from '@mui/material';

/* eslint-disable-next-line */
export interface ListItemTextProps extends MUIListItemTextProps {}

export function ListItemText(props: ListItemTextProps) {
  return <MUIListItemText {...props}></MUIListItemText>;
}

export default ListItemText;
