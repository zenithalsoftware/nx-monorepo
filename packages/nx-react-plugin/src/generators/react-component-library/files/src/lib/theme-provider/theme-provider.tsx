import {
  Theme as MUITheme,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material';
import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface ThemeProviderProps {
  theme: Theme;
  children: ReactNode;
}

export type Theme = MUITheme;

export function ThemeProvider(props: ThemeProviderProps) {
  return <MUIThemeProvider {...props} theme={props.theme}></MUIThemeProvider>;
}

export default ThemeProvider;
