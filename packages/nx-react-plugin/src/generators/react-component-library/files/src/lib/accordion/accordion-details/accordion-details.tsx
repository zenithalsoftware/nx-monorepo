import {
  AccordionDetails as MUIAccordionDetails,
  AccordionDetailsProps as MUIAccordionDetailsProps,
} from '@mui/material';

/* eslint-disable-next-line */
export interface AccordionDetailsProps extends MUIAccordionDetailsProps {}

export function AccordionDetails(props: AccordionDetailsProps) {
  return <MUIAccordionDetails {...props}>{props.children}</MUIAccordionDetails>;
}

export default AccordionDetails;
