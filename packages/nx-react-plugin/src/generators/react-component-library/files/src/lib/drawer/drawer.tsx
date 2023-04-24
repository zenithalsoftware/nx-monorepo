import {
  Drawer as MUIDrawer,
  DrawerProps as MUIDrawerProps,
} from '@mui/material';

export type DrawerProps = MUIDrawerProps;

export function Drawer(props: DrawerProps) {
  return <MUIDrawer {...props}></MUIDrawer>;
}

export default Drawer;
