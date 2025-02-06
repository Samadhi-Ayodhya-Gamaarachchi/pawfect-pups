import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import banner from '../../assets/banner.jpg';

export const BannerContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%', // Adjust as needed
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center'
    }
}));

export const BannerContent =styled(Box)(()=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    maxWidth:420,
    padding:'300px'
 
}))

export const BannerTitle= styled(Typography)(({theme})=>({
    lineHeight:1.5,
    fontSize:'72px',
    marginBottom:'20px',
    [theme.breakpoints.down('sm')]: {
        fontSize:'42px'
    }
}))
