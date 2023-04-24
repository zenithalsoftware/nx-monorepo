import {
  Toolbar as MUIToolbar,
  ToolbarProps as MUIToolbarProps,
} from '@mui/material';
import { ToolbarTypeMap } from '@mui/material/Toolbar/Toolbar';
import * as React from 'react';

export type ToolbarProps<
  D extends React.ElementType = ToolbarTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = MUIToolbarProps<D, P>;

export function Toolbar(props: ToolbarProps) {
  return <MUIToolbar {...props}></MUIToolbar>;
}

export default Toolbar;
