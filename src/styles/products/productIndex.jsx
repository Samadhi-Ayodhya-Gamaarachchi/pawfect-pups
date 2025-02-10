import { Colors } from "../../styles/theme";
import { Box, Button, IconButton, styled } from "@mui/material";
import { motion } from "framer-motion";

// Styled Components with Motion
export const Product = styled(motion.div)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    position: "relative",
  },
}));

export const ProductImage = styled(motion.img)(({ theme }) => ({
  width: '600px',

  
  height: "400px",
 // padding: "10px",
  [theme.breakpoints.up("md")]: {
    width: "50%",
    //padding: "24px",
  },
}));

export const ProductActionButton = styled(motion(IconButton))(() => ({
  background: "#fff",
  margin: 4,
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

export const ProductFavButton = styled(motion(ProductActionButton))(
  ({ isFav, theme }) => ({
    color: isFav ? Colors.secondary : Colors.primary,
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      right: 0,
      top: 0,
    },
  })
);

export const ProductAddToCart = styled(motion(Button))(({ theme }) => ({
  width: "120px",
  fontSize: "12px",
  background: Colors.text,
  opacity: 0.9,
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    bottom: "2%",
    width: "300px",
    padding: "10px 5px",
  },
}));

export const ProductMetaWrapper = styled(motion(Box))(({ theme }) => ({
  padding: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  opacity: 0,
  transform: "translateY(10px)",
  transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
  "&:hover": {
    opacity: 1,
    transform: "translateY(0)",
  },
}));

export const ProductActionWrapper = styled(motion.div)(({ show, theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: show ? "block" : "none",
    position: "absolute",
    right: 0,
    top: "20%",
    opacity: show ? 1 : 0,
    scale: show ? 1 : 0.8,
    transition: {
      opacity: { duration: 0.3 },
      scale: { duration: 0.3 },
    },
  },
}));
