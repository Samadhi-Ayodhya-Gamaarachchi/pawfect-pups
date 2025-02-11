import React, { useState } from "react";
import { FitScreen, Favorite as HeartIcon, Share } from "@mui/icons-material";
import { IconButton, Box, Stack } from "@mui/material";
import ProductMeta from "../../data/productMeta.jsx";
import {
  Product,
  ProductActionButton,
  ProductActionWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
} from "../../styles/product/productIndex.jsx";

export default function SingleProductDesktop({ product, matches }) {
  const [showOptions,setShowOptions]=useState(false);

  const handleMouseEnter=()=>{
    setShowOptions(true);
  }
  const handleMouseLeave=()=>{
    setShowOptions(false);
  }
  return (
    <>
      <Product
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center content
          width: "100%", // Make it responsive
          maxWidth: "250px", // Set a max width for proper alignment
          margin: "0 auto", // Centering in grid layout
        }}
      >
        {/* Product Image */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "350px", // Keep height fixed
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ProductImage
            src={product.image}
            alt={product.name}
            style={{
              width: "250px",
              height: "350px",
              objectFit: "cover", // Ensure uniform image sizing
            }}
          />
          <ProductFavButton isFav={0}>
            <HeartIcon />
          </ProductFavButton>
          
            {showOptions && <ProductAddToCart show={showOptions} variant="outlined">
            Pawfect Picks 🐾
            </ProductAddToCart>}
          
        </Box>

        {/* Product Meta & Name */}
       
        {/* Action Buttons */}
        <ProductActionWrapper show={showOptions}>
          <Stack direction="column">
          <ProductActionButton>
              <Share color="primary" />
            </ProductActionButton>
            <ProductActionButton>
              <FitScreen color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionWrapper>

        {/* Add to Cart Button (Centered) */}
        
      </Product>
      <ProductMeta product={product} matches={matches} />

    </>
  );
}
