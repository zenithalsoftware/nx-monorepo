import styled from 'styled-components';
import Paper from '../paper/paper';
import Typography from '../typography/typography';

/* eslint-disable-next-line */
export interface HeaderProps {
  children: React.ReactNode;
}

const StyledHeader = styled.div`
  flex: 0 0 auto;
  margin: 0;
  padding: 0;
`;

const StyledH1 = styled.h1`
  padding: 12px 20px;
  margin: 0 0 12px 0;
`;

export function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <Paper sx={{ padding: '12px 20px', margin: '0' }}>
        <Typography variant={'h4'}>{props.children}</Typography>
      </Paper>
    </StyledHeader>
  );
}

export default Header;
