import { Box, Button, Container, CssBaseline, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { useEffect } from 'react'
import Appbar from './components/appbar/index'  // Ensure correct casing
import theme from './styles/theme/index'
import Banner from './components/banner/banner'
import Promotions from './components/promotions/promotion'
import Products from './components/product/product'

function App() {
  useEffect(() => {
    document.title = "Pawfect Pups"
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures proper MUI styling */}
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "#fff",
          padding: 2 // Adds spacing
        }}
      >
        <Appbar />
        <Banner/>
        <Promotions/>
        <Box display="flex" justifyContent="center" sx={{p:4}}>
          <Typography variant='h4'>Pawfect Friends💖🐕</Typography>
        </Box>
        <Products/>

       
      </Container>
    </ThemeProvider>
  )
}

export default App
