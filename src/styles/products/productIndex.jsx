import { Colors } from "../../styles/theme";
import { Box, Button, IconButton, styled } from "@mui/material";
import { motion } from "framer-motion";
import { fadeIn, fadeScale, buttonHover } from "./animations"; // Import animations

// Styled Components with Motion
export const Product = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    position: 'relative'
  }
}));

export const ProductImage = styled(motion.img)(({ theme }) => ({
  width: '100%',
  padding: '10px',
  [theme.breakpoints.up('md')]: {
    width: '80%',
    padding: '24px'
  }
}));

export const ProductActionButton = styled(motion(IconButton))(() => ({
  background: '#fff',
  margin: 4
}));

export const ProductFavButton = styled(ProductActionButton)(({ isFav, theme }) => ({
  color: isFav ? Colors.secondary : Colors.primary,
  [theme.breakpoints.up('md')]: {
    position: "absolute",
    right: 0,
    top: 0
  }
}));

export const ProductAddToCart = styled(motion(Button))(({ theme }) => ({
  width: '120px',
  fontSize: '12px',
  background: Colors.text,
  opacity: 0.9,
  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    bottom: '2%',
    width: '300px',
    padding: '10px 5px'
  }
}));
