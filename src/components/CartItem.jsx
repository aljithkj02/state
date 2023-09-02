import { Box, Button, Typography } from "@mui/material"

export const CartItem = ({ thumbnail, title, price, addToCart, qty, addQuanity, id }) => {

    return (
        <Box boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius="10px" overflow="hidden"
            sx={{ ":hover": { bgcolor: 'rgba(0, 0, 0, 0.05)', transition: ".3s ease"}}} 
            display="flex" gap={6}
        >
            <Box height="180px" width="300px">
                <img src={thumbnail} style={{ width: "100%", height: "100%"}} />
            </Box>

            <Box>
                <Box p={3}>
                    <Typography variant="h5">{ title }</Typography>
                    <Typography variant="h5" color="red">$ { price * qty }</Typography>
                </Box>

                <Box display="flex" alignItems="center" gap={3}>
                    <Button variant="contained" color="primary" sx={{ padding: "5px", width: "30px", fontSize: "30px"}}
                        onClick={() => addQuanity(-1, id)}
                    >
                        -
                    </Button>
                    <Typography variant="h5">{ qty }</Typography>
                    <Button variant="contained" color="primary" sx={{ padding: "5px", width: "40px", fontSize: "30px"}}
                        onClick={() => addQuanity(1, id)}
                    >
                        +
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}