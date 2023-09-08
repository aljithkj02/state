import { Box, Button, Typography } from "@mui/material"
import { useDispatch } from "react-redux";
import { addProductToCart } from "../reduxToolkit/productState";

export const ProductCard = (props) => {
    const { thumbnail, title, price, id, flag } = props;
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addProductToCart(props));
    }

    return (
        <Box boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius="10px" overflow="hidden"
            sx={{ ":hover": { bgcolor: 'rgba(0, 0, 0, 0.05)', transition: ".3s ease"}}} 
        >
            <Box height="250px">
                <img src={thumbnail} style={{ width: "100%", height: "100%"}} />
            </Box>

            <Box p={3}>
                <Typography>{ title }</Typography>
                <Typography>${ price }</Typography>
            </Box>

            <Box p={3}>
                <Button variant="contained" color="success" sx={{ padding: "10px 20px", width: "100%"}}
                    onClick={addToCart} disabled={flag}
                >
                    Add to cart
                </Button>
            </Box>
        </Box>
    )
}