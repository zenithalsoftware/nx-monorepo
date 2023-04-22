import {
  Switch as MUISwitch,
  SwitchProps as MUISwitchProps,
} from '@mui/material';

/* eslint-disable-next-line */
export interface SwitchProps extends MUISwitchProps {}

export function Switch(props: SwitchProps) {
  return <MUISwitch {...props}></MUISwitch>;
}

export default Switch;
