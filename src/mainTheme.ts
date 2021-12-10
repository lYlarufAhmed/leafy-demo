import {ThemeOptions} from "@material-ui/core/styles";

export const themeOptions: ThemeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: '#2e7d32',
        },
        secondary: {
            main: '#f50057',
        },
    },
    spacing: 8,
    props: {
        MuiButtonBase: {
            disableRipple: true,
        },
        MuiList: {
            dense: true,
        },
        MuiMenuItem: {
            dense: true,
        },
        MuiTable: {
            size: 'small',
        },
        MuiTooltip: {
            arrow: true,
        },
    },
    transitions: {}
};