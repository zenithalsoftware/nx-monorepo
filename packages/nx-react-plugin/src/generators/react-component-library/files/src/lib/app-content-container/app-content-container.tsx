import { ReactNode } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AppContentContainerProps {
  children: ReactNode;
}

const StyledAppContentContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  width: 1270px;
  padding: 20px 40px 40px 40px;

  @media (max-width: 1270px) {
    width: 100vw;
  }
`;

export function AppContentContainer(props: AppContentContainerProps) {
  return (
    <StyledAppContentContainer>{props.children}</StyledAppContentContainer>
  );
}

export default AppContentContainer;
