import {
  Typography as MUITypography,
  TypographyProps as MUITypographyProps,
} from '@mui/material';
import { TypographyTypeMap } from '@mui/material/Typography/Typography';
import * as React from 'react';

export type TypographyProps<
  D extends React.ElementType = TypographyTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = MUITypographyProps<D, P>;

export function Typography(props: TypographyProps) {
  return <MUITypography {...props}>{props.children}</MUITypography>;
}

export default Typography;
