import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FloatingActionButtonProps {}

const StyledFloatingActionButton = styled.div`
  color: pink;
`;

export function FloatingActionButton(props: FloatingActionButtonProps) {
  return (
    <StyledFloatingActionButton>
      <h1>Welcome to FloatingActionButton!</h1>
    </StyledFloatingActionButton>
  );
}

export default FloatingActionButton;
