import React from "react";
import { Favorite as HeartIcon } from "@mui/icons-material";
import { IconButton, Box } from "@mui/material";
import ProductMeta from "../../data/productMeta";
import { Product, ProductImage } from "../../styles/products/productIndex";
import { Colors } from "../../styles/theme";

export default function SingleProduct({ product, matches }) {
  return (
    <Product style={{ position: "relative" }}>
      <Box sx={{ position: "relative", display: "inline-block" }}>
        {/* Product Image */}
        <ProductImage src={product.image} alt={product.name} />

        {/* Heart Button Positioned on Top */}
        <IconButton
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
          }}
        >
          <HeartIcon sx={{ color: Colors.primary }} />
        </IconButton>
      </Box>

      {/* Product Meta & Name */}
      <ProductMeta product={product} matches={matches} />
      <h5>{product.name}</h5>
    </Product>
  );
}
