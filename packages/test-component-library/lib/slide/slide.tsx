import { Slide as MUISlide, SlideProps as MUISlideProps } from '@mui/material';

/* eslint-disable-next-line */
export interface SlideProps extends MUISlideProps {}

export function Slide(props: SlideProps) {
  return <MUISlide {...props}>{props.children}</MUISlide>;
}

export default Slide;
