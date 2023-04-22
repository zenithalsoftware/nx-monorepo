import { Box as MUIBox, BoxProps as MUIBoxProps } from '@mui/material';
import { BoxTypeMap } from '@mui/system';

export type BoxProps<
  D extends React.ElementType = BoxTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = MUIBoxProps<D, P>;

export function Box(props: BoxProps) {
  return <MUIBox {...props}></MUIBox>;
}

export default Box;
