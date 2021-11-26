import { colors } from '@mui/material';

const white = '#fff';

const palette = {
  primary: {
    contrastText: white,
    dark: '#262E40',
    main: '#1f2739',
    light: '#1d2539b0'
  },
  secondary: {
    contrastText: white,
    dark: '#101820',
    main: '#1f2739',
    light: '#1d2539b0'
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: white,
    secondary: '#F2AA4Cff',
    link: colors.blue[600],
    hover: '#1C2331'
  },
  orange: "#F2AA4Cff",
  movieMask: 'linear-gradient(to right, #2F3B52CF, #2F3B52A1, #8080807d)',
  shadow: '2px 4px 15px -5px #000000',
  link: colors.blue[800],
  icon: '#fff',
  transition: '.5s all ease',
  background: {
    default: '#F4F6F8',
    paper: white
  },
  divider: colors.grey[200],
  closeModal: {
    primary: colors.grey[200],
    secondary: colors.grey[300]
  }
};

export default palette;
