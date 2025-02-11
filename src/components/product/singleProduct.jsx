import React from "react";
import { FitScreen, Favorite as HeartIcon, Share } from "@mui/icons-material";
import { IconButton, Box, Stack } from "@mui/material";
import ProductMeta from "../../data/productMeta";
import {
  Product,
  ProductActionButton,
  ProductActionWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
} from "../../styles/product/productIndex.jsx";
import { Colors } from "../../styles/theme";
import { Share as ShareIcon } from "@mui/icons-material";

export default function SingleProduct({ product, matches }) {
  return (
    <>
      <Product
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: 250,
            height: 350, // Set a fixed height
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Product Image */}
          <ProductImage
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Ensures uniform image sizing
            }}
          />

          {/* Heart Button Positioned on Top */}
        </Box>

        {/* Product Meta & Name */}
        <ProductMeta product={product} matches={matches} />
        
        <ProductActionWrapper>
          <Stack direction="row">
            <ProductFavButton isFav={0}>
              <HeartIcon />
            </ProductFavButton>
            <ProductActionButton>
              <Share color="primary" />
            </ProductActionButton>
            <ProductActionButton>
              <FitScreen color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionWrapper>
      </Product>
      <ProductAddToCart variant="container">Pawfect Picks 🐾</ProductAddToCart>
    </>
  );
}
