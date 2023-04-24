/* eslint-disable-next-line */
import { useTheme } from '@mui/material';
import { ReactNode } from 'react';
import styled from 'styled-components';

export interface AppContainerProps {
  children: ReactNode;
}

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex: 1 1 auto;
  background: ${(props) => props.theme.palette.background.default};
`;

export function AppContainer(props: AppContainerProps) {
  const theme = useTheme();

  return (
    <StyledAppContainer theme={theme}>{props.children}</StyledAppContainer>
  );
}

export default AppContainer;
