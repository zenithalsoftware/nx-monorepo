import {
  Accordion as MUIAccordion,
  AccordionProps as MUIAccordionProps,
} from '@mui/material';

/* eslint-disable-next-line */
export interface AccordionProps extends MUIAccordionProps {}

export function Accordion(props: AccordionProps) {
  return <MUIAccordion {...props}>{props.children}</MUIAccordion>;
}

export default Accordion;
