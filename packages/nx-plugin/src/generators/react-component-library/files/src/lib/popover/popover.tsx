import {
  Popover as MUIPopover,
  PopoverProps as MUIPopoverProps,
} from '@mui/material';

export type PopoverProps = MUIPopoverProps;

export function Popover(props: PopoverProps) {
  return <MUIPopover {...props}>{props.children}</MUIPopover>;
}

export default Popover;
