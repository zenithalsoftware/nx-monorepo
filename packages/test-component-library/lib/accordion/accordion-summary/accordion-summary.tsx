import {
  AccordionSummary as MUIAccordionSummary,
  AccordionSummaryProps as MUIAccordionSummaryProps,
} from '@mui/material';

/* eslint-disable-next-line */
export interface AccordionSummaryProps extends MUIAccordionSummaryProps {}

export function AccordionSummary(props: AccordionSummaryProps) {
  return <MUIAccordionSummary {...props}>{props.children}</MUIAccordionSummary>;
}

export default AccordionSummary;
