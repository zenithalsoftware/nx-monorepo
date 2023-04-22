import styled from 'styled-components';

/* eslint-disable-next-line */
export interface RadioGroupProps {}

const StyledRadioGroup = styled.div`
  color: pink;
`;

export function RadioGroup(props: RadioGroupProps) {
  return (
    <StyledRadioGroup>
      <h1>Welcome to RadioGroup!</h1>
    </StyledRadioGroup>
  );
}

export default RadioGroup;
