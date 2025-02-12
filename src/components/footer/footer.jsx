import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import { FooterTitle } from "../../styles/footer/footerIndex";
import { Colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <Box
      sx={{
        background: Colors.text,
        color: Colors.background,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: "10px", md: "14px" },
      }}
    >
     <Grid container spacing={3} justifyContent="space-between">
  {/* About Us */}
  <Grid item xs={12} md={3} lg={3}>
    <FooterTitle variant="body1">About Us</FooterTitle>
    <Typography variant="caption">
      At Pawfect Friends, we believe that every pup deserves a loving home,
      and every pet parent deserves a pawfect companion. Our mission is to
      connect you with the most adorable, healthy, and well-cared-for puppies.
    </Typography>
    <Box sx={{ mt: 4, color: Colors.primary }}>
      <FacebookIcon sx={{ mr: 1 }} />
      <InstagramIcon sx={{ mr: 1 }} />
      <YouTubeIcon sx={{ mr: 1 }} />
    </Box>
  </Grid>

  {/* Information */}
  <Grid item xs={12} md={3} lg={3}>
    <FooterTitle variant="body1">Information</FooterTitle>
    <List>
      <ListItem><Typography variant="caption">About Us</Typography></ListItem>
      <ListItem><Typography variant="caption">Privacy & Policy</Typography></ListItem>
      <ListItem><Typography variant="caption">Terms & Conditions</Typography></ListItem>
    </List>
  </Grid>

  {/* My Account */}
  <Grid item xs={12} md={3} lg={3}>
    <FooterTitle variant="body1">My Account</FooterTitle>
    <List>
      <ListItem><Typography variant="caption">Login</Typography></ListItem>
      <ListItem><Typography variant="caption">My Cart</Typography></ListItem>
      <ListItem><Typography variant="caption">Wishlist</Typography></ListItem>
    </List>
  </Grid>

  {/* Contact Us */}
  <Grid item xs={12} md={3} lg={3}>
    <FooterTitle variant="body1">📍 Visit Us | Contact Us</FooterTitle>
    <List>
      <ListItem><Typography variant="caption">📧 Email: pawfectpups@gmail.com</Typography></ListItem>
      <ListItem><Typography variant="caption">📞 Phone: 011-557-8963</Typography></ListItem>
    </List>
  </Grid>
</Grid>

    </Box>
  );
}
