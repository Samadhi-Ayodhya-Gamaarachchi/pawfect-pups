import { Box, styled, TextField } from "@mui/material";
import { Colors } from "../theme";

export const SearchBoxContainer = styled(Box)(({ theme }) => ({
    position: 'fixed', 
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: Colors.secondary, 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99999,
    opacity: 0.9
}));

export const SearchField = styled(TextField)(({ theme }) => ({
    ".MuiInputLabel-root": {
        color: Colors.text
    },
    ".MuiInput-root": {
        fontSize: '1rem',
        color: Colors.text,
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem'
        }
    },
    ".MuiInput-root::before": {
        borderBottom: `1px solid ${Colors.text}`
    },
    padding: '0px 0px 0px 40px'
}));
