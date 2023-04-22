import { Menu as MUIMenu, MenuProps as MUIMenuProps } from '@mui/material';

/* eslint-disable-next-line */
export interface MenuProps extends MUIMenuProps {}

export function Menu(props: MenuProps) {
  return <MUIMenu {...props}>{props.children}</MUIMenu>;
}

export default Menu;
