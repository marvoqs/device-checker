import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EE5B2F',
    },
    secondary: {
      main: '#909090',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F2F2F2',
    },
  },
});

export default theme;
