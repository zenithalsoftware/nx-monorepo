import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavigationProps {}

const StyledNavigation = styled.div`
  width: 250px;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: start;
  padding-top: 20px;
`;

const StyledLink = styled.div`
  padding-left: 30px;
`;

export function Navigation(props: NavigationProps) {
  return (
    <StyledNavigation>
      <StyledLink>
        <Link to="/flow-management">Flow Management</Link>
      </StyledLink>
      <StyledLink>
        <Link to="/flow-management/flow/list">Flow List</Link>
      </StyledLink>
      <StyledLink>
        <Link to="/flow-management/property/create-property-wizard">
          Create Property Wizard
        </Link>
      </StyledLink>
      <StyledLink>
        <Link to="/flow-management/login">Login</Link>
      </StyledLink>
    </StyledNavigation>
  );
}

export default Navigation;
