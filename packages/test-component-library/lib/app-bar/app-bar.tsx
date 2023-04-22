import {
  AppBar as MUIAppBar,
  AppBarProps as MUIAppBarProps,
} from '@mui/material';
import { AppBarTypeMap } from '@mui/material/AppBar/AppBar';
import * as React from 'react';

export type AppBarProps<
  D extends React.ElementType = AppBarTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = MUIAppBarProps<D, P>;

export function AppBar(props: AppBarProps) {
  return <MUIAppBar {...props}></MUIAppBar>;
}

export default AppBar;
