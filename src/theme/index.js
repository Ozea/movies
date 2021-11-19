import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';

const baseTheme = {
  palette,
  typography
};

export const theme = createTheme(baseTheme);
export const themeWithRtl = createTheme({ ...baseTheme, direction: 'rtl' });