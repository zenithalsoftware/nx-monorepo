import {
  ClickAwayListener as MUIClickAwayListener,
  ClickAwayListenerProps as MUIClickAwayListenerProps,
} from '@mui/material';

export type ClickAwayListenerProps = MUIClickAwayListenerProps;

export function ClickAwayListener(props: ClickAwayListenerProps) {
  return (
    <MUIClickAwayListener {...props}>{props.children}</MUIClickAwayListener>
  );
}

export default ClickAwayListener;
