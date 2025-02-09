import { styled, Typography } from "@mui/material";
import { Colors } from "../theme";
import "@fontsource/montez";
import { Box } from "@mui/system";

export const PromotionContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    background: Colors.secondary,
    

    [theme.breakpoints.up('md')]: {
        padding: '10px 0px', // Fixed padding property with correct lowercase
    },
}));

export const MessageText = styled(Typography)(({ theme }) => ({
    fontFamily: '"Montez", "cursive"',
    color: Colors.text2,
    fontSize: '1.5rem', // Default size for mobile

    [theme.breakpoints.up('md')]: {
        fontSize: '2rem', // Larger size for medium screens and up
    },
}));
