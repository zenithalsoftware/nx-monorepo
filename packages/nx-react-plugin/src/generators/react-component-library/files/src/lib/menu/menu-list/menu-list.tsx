import {
  MenuList as MUIMenuList,
  MenuListProps as MUIMenuListProps,
} from '@mui/material';
import { MenuListTypeMap } from '@mui/material/MenuList/MenuList';
import * as React from 'react';

export type MenuListProps<
  D extends React.ElementType = MenuListTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = MUIMenuListProps<D, P>;

export function MenuList(props: MenuListProps) {
  return <MUIMenuList {...props}>{props.children}</MUIMenuList>;
}

export default MenuList;
