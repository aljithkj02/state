import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { Products } from './components/Products'
import { Cart } from './components/Cart'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
      <Box>
        <Navbar />
        <Box width="90%" mx="auto">
          <Routes>
            <Route path="/" element={<Products />}/>
            <Route path="/cart" element={<Cart />}/>
          </Routes>
        </Box>
      </Box>
    </>
  )
}

export default App
