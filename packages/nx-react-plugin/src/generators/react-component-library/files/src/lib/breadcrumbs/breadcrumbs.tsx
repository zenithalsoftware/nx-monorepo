import {
  Breadcrumbs as MUIBreadcrumbs,
  BreadcrumbsProps as MUIBreadcrumbsProps,
} from '@mui/material';
import { BreadcrumbsTypeMap } from '@mui/material/Breadcrumbs/Breadcrumbs';
import * as React from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export type BreadcrumbsProps<
  D extends React.ElementType = BreadcrumbsTypeMap['defaultComponent'],
  /* eslint-disable-next-line */
  P = {}
> = MUIBreadcrumbsProps<D, P>;

const StyledBreadcrumbs = styled.div`
  color: pink;
`;

export function Breadcrumbs(props: BreadcrumbsProps) {
  return (
    <StyledBreadcrumbs>
      <MUIBreadcrumbs {...props}></MUIBreadcrumbs>
    </StyledBreadcrumbs>
  );
}

export default Breadcrumbs;
