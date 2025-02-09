import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import "@fontsource/baloo-2";
import { Colors } from "../../styles/theme"; // Ensure Colors is correctly defined

export const BannerContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%', // Full screen height
    padding: '0px',
    background: Colors.primary, // Ensure Colors.primary is defined

    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

export const BannerImage = styled('img')(({ theme }) => ({
    width: '600px',
    height:'400px',

    [theme.breakpoints.down('md')]: {
        width: '320px',
        height:'250px'
    },

    [theme.breakpoints.down('sm')]: {
        width: '300px',
        height: '250px',
    }
}));

export const BannerContent = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    
    maxWidth: 420,
    padding: '30px',
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
    lineHeight: 1.5,
    fontSize: '50px',
    color: Colors.text2, // Ensure Colors.text2 is defined
    marginBottom: '20px',
    fontFamily: '"Baloo 2", cursive',

    [theme.breakpoints.down('sm')]: {
        fontSize: '35px',
    }
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
    lineHeight: 1.5,
    letterSpacing: 1.25,
    marginBottom: '3em',
    color: Colors.text2, // Ensure Colors.text2 is defined

    [theme.breakpoints.down('md')]: {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBottom: '1.5em',
    }
}));

export const BannerButton = styled(Button)(({ theme }) => ({
    backgroundColor: Colors.text2, // Set your preferred color
    color: "#fff", // Text color
    fontSize: "25px",
    fontWeight: "bold",
    padding: "10px 10px",
    borderRadius: "20px",
    textTransform: "none", // Prevents uppercase text
    transition: "0.3s ease-in-out",
    
    "&:hover": {
        backgroundColor: Colors.secondaryDark, // Slightly darker shade on hover
    },

    [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
        padding: "10px 10px",
    },
}));
