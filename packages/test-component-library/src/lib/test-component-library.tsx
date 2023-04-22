import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TestComponentLibraryProps {}

const StyledTestComponentLibrary = styled.div`
  color: pink;
`;

export function TestComponentLibrary(props: TestComponentLibraryProps) {
  return (
    <StyledTestComponentLibrary>
      <h1>Welcome to TestComponentLibrary!</h1>
    </StyledTestComponentLibrary>
  );
}

export default TestComponentLibrary;
