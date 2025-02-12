import React from 'react';
import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { 
  BannerButton,
    BannerContainer, 
    BannerContent, 
    BannerDescription, 
    BannerImage, 
    BannerShopButton, 
    BannerTitle 
} from '../../styles/banner/bannerIndex';
import banner from '../../assets/back.png'

export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <BannerContainer>
            {/* If BannerImage is an actual image, use <img src={...} /> */}
            <BannerImage src={banner} />

            <BannerContent>
                <BannerTitle variant='h2'>Puwfect Pups</BannerTitle>
                <BannerDescription variant='subtitle1'>
                    Where Happy Paws Meet Happy Hearts!
                </BannerDescription>
                <BannerDescription variant='body1'>
                    Your go-to place for everything puppy-related—cute moments, care tips, and all the wagging tails you love! 🐾💕
                </BannerDescription>
                <BannerShopButton color='secondary'>
                    Show Love
                </BannerShopButton>

            </BannerContent>

        </BannerContainer>
    );
}
