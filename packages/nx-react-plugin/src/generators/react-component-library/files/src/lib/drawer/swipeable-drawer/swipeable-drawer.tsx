import {
  SwipeableDrawer as MUISwipeableDrawer,
  SwipeableDrawerProps as MUISwipeableDrawerProps,
} from '@mui/material';

export type SwipeableDrawerProps = MUISwipeableDrawerProps;

export function SwipeableDrawer(props: SwipeableDrawerProps) {
  return <MUISwipeableDrawer {...props}></MUISwipeableDrawer>;
}

export default SwipeableDrawer;
