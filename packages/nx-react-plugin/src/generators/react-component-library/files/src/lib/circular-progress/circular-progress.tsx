import {
  CircularProgress as MUICircularProgress,
  CircularProgressProps as MUICircularProgressProps,
} from '@mui/material';

/* eslint-disable-next-line */
export interface CircularProgressProps extends MUICircularProgressProps {}

export function CircularProgress(props: CircularProgressProps) {
  return <MUICircularProgress {...props}></MUICircularProgress>;
}

export default CircularProgress;
