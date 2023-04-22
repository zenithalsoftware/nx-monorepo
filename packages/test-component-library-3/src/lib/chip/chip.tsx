import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ChipProps {}

const StyledChip = styled.div`
  color: pink;
`;

export function Chip(props: ChipProps) {
  return (
    <StyledChip>
      <h1>Welcome to Chip!</h1>
    </StyledChip>
  );
}

export default Chip;
