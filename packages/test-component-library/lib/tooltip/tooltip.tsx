import {
  Tooltip as MUITooltip,
  TooltipProps as MUITooltipProps,
} from '@mui/material';

/* eslint-disable-next-line */
export interface TooltipProps extends MUITooltipProps {}

export function Tooltip(props: TooltipProps) {
  return <MUITooltip {...props}>{props.children}</MUITooltip>;
}

export default Tooltip;
