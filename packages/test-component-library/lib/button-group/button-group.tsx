import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonGroupProps {}

const StyledButtonGroup = styled.div`
  color: pink;
`;

export function ButtonGroup(props: ButtonGroupProps) {
  return (
    <StyledButtonGroup>
      <h1>Welcome to ButtonGroup!</h1>
    </StyledButtonGroup>
  );
}

export default ButtonGroup;
