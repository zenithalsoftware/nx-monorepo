import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TestComponentLibrary2Props {}

const StyledTestComponentLibrary2 = styled.div`
  color: pink;
`;

export function TestComponentLibrary2(props: TestComponentLibrary2Props) {
  return (
    <StyledTestComponentLibrary2>
      <h1>Welcome to TestComponentLibrary2!</h1>
    </StyledTestComponentLibrary2>
  );
}

export default TestComponentLibrary2;
