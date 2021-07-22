import { createTheme } from '@material-ui/core';
import palette from './palette';
import typography from './typography';

const baseTheme = {
  palette,
  typography
};

export const theme = createTheme(baseTheme);
export const themeWithRtl = createTheme({ ...baseTheme, direction: 'rtl' });