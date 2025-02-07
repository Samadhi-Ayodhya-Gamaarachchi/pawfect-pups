import { Button, Container, CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { useEffect } from 'react'
import Appbar from './components/appbar/index'  // Ensure correct casing
import theme from './styles/theme/index'
import Banner from './components/banner/banner'
import Promotions from './components/promotions/promotion'

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

       
      </Container>
    </ThemeProvider>
  )
}

export default App
