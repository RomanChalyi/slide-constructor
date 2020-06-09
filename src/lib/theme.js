import { createMuiTheme } from '@material-ui/core/styles'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const breakpoints = createBreakpoints({})
// Create a theme instance.

const globalFontSize = 'Montserrat, sans-serif'
const secondaryFontSize = 'Montserrat Alternates, sans-serif'
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#38928B',
    },
    secondary: {
      main: '#38928B',
    },
    error: {
      main: '#EB4646',
    },
    background: {
      default: '#fff',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      xsm: 480,
      sm: 640,
      md: 980,
      lg: 1160,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: globalFontSize,
    fontSize: 14,
    lineHeight: '22px',
    color: '#3F4243',
    useNextVariants: true,
    button: {
      fontWeight: 'bold',
      fontSize: 18,
      textTransform: 'none',
      [breakpoints.down('sm')]: {
        fontSize: 14,
      },
      [breakpoints.down('xs')]: {
        fontSize: 12,
      },
    },
  },
  overrides: {
    MuiLink: {
      root: {
        fontWeight: 700,
        color: '#3F4243',
        fontSize: 16,
        lineHeight: '20px',
        textDecoration: 'none',
        '&:hover': {
          color: '#7ccdc7',
          cursor: 'pointer',
        },
        '&.is-active': {
          color: '#3EB961',
        },
      },
      underlineHover: {
        '&:hover': {
          textDecoration: 'none',
        },
      },
    },
    MuiPaper: {
      elevation8: {
        boxShadow: '10px 9px 28px rgba(19, 31, 49, 0.08)',
      },
      rounded: {
        borderRadius: 10,
      },
    },
    MuiExpansionPanel: {
      root: {
        background: 'antiquewhite',
        color: '#38928b',
        '& p': {
          fontWeight: 600,
        },
      },
    },
  },
})

export default theme
