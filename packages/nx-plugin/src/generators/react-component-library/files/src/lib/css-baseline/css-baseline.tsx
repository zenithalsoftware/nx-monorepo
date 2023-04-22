import {
  CssBaseline as MUICssBaseline,
  CssBaselineProps as MUICssBaselineProps,
} from '@mui/material';

/* eslint-disable-next-line */
export interface CssBaselineProps extends MUICssBaselineProps {}

export function CssBaseline(props: CssBaselineProps) {
  return <MUICssBaseline {...props}></MUICssBaseline>;
}

export default CssBaseline;
