import {
  MenuItem as MUIMenuItem,
  MenuItemProps as MUIMenuItemProps,
} from '@mui/material';
import { MenuItemTypeMap } from '@mui/material/MenuItem/MenuItem';

export type MenuItemProps<
  D extends React.ElementType = MenuItemTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = MUIMenuItemProps<D, P>;

export function MenuItem(props: MenuItemProps) {
  return <MUIMenuItem {...props}>{props.children}</MUIMenuItem>;
}

export default MenuItem;
