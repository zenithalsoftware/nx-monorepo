import {
  Select as MuiSelect,
  SelectProps as MUISelectProps,
} from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SelectProps<T = unknown> extends MUISelectProps<T> {}

export function Select(props: SelectProps) {
  return <MuiSelect {...props}>{props.children}</MuiSelect>;
}

export default Select;
