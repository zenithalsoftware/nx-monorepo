import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TestComponentLibrary3Props {}

const StyledTestComponentLibrary3 = styled.div`
  color: pink;
`;

export function TestComponentLibrary3(props: TestComponentLibrary3Props) {
  return (
    <StyledTestComponentLibrary3>
      <h1>Welcome to TestComponentLibrary3!</h1>
    </StyledTestComponentLibrary3>
  );
}

export default TestComponentLibrary3;
