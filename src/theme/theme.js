'use client';

import { createTheme } from '@mui/material';

let theme = createTheme({
    cssVariables: true,
    typography: {
        fontFamily: 'var(--font-figtree)'
    },
    palette: {
        primary: {
            main: '#1D1F1E',
            light: '#63666D'
        },
        secondary: {
            main: '#0C6825',
        },
        tertiary: {
            main: '#00C068'
        },
    },
    shape: {
        borderRadius: 8
    }
});

theme = createTheme(theme, {
    typography: {
        h1: {
            color: theme.palette.primary.main,
            fontSize: '2.5rem',
            [theme.breakpoints.up('md')]: {
                fontSize: '3.5rem',
            }
        },
        h2: {
            color: theme.palette.primary.main,
            fontSize: '1.75rem',
            [theme.breakpoints.up('md')]: {
                fontSize: '3rem',
            }
        },
        h3: {
            color: theme.palette.primary.main,
            fontSize: '1.125rem',
            fontWeight: 600
        },
        subtitle1: {
            color: theme.palette.primary.light,
            fontSize: '1rem',
        },
        body1: {
            color: theme.palette.primary.light,
            fontSize: '1.125rem',
            [theme.breakpoints.up('md')]: {
                fontSize: '1rem',
            }
        },
        body2: {
            color: theme.palette.primary.light,
            fontSize: '1rem',
            [theme.breakpoints.up('md')]: {
                fontSize: '1rem',
            }
        },
        button: {
            color: 'white',
            textTransform: 'none',
            fontSize: '1.125rem',
        }
    },
})

export default theme;