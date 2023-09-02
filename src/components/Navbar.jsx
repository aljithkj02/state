import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <Box display="flex" justifyContent="space-between" px={10} py={3} bgcolor="darkgrey"

        >
            <Box>
                <Typography variant="h5">Flipkart</Typography>
            </Box>
            <Box display="flex" gap={4} alignItems="center">
                <Link to="">
                    <Typography variant="h5">Products</Typography>
                </Link>
                <Link to="cart">
                    <Typography variant="h5">Cart</Typography>
                </Link>
            </Box>
        </Box>
    )
}