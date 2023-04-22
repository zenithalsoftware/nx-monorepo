import {
  Divider as MUIDivider,
  DividerProps as MUIDividerProps,
} from '@mui/material';
import { DividerTypeMap } from '@mui/material/Divider/Divider';
import * as React from 'react';

export type DividerProps<
  D extends React.ElementType = DividerTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = MUIDividerProps<D, P>;

export function Divider(props: DividerProps) {
  return <MUIDivider {...props}></MUIDivider>;
}

export default Divider;
