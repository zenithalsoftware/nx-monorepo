import { Paper as MUIPaper, PaperProps as MUIPaperProps } from '@mui/material';
import { PaperTypeMap } from '@mui/material/Paper/Paper';
import * as React from 'react';

export type PaperProps<
  D extends React.ElementType = PaperTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = MUIPaperProps<D, P>;

export function Paper(props: PaperProps) {
  return <MUIPaper {...props}>{props.children}</MUIPaper>;
}

export default Paper;
