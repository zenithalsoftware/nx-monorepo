import {
  AccordionActions as MUIAccordionActions,
  AccordionActionsProps as MUIAccordionActionProps,
} from '@mui/material';

/* eslint-disable-next-line */
export interface AccordionActionsProps extends MUIAccordionActionProps {}

export function AccordionActions(props: AccordionActionsProps) {
  return <MUIAccordionActions {...props}>{props.children}</MUIAccordionActions>;
}

export default AccordionActions;
