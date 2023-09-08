import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"
import { CartItem } from "./CartItem";
import { changeQtyHandler } from "../reduxToolkit/productState";

export const Cart = () => {
    const { cart } = useSelector((state) => state.data);

    const dispatch = useDispatch();

    const addQuanity = (value, id) => {
        dispatch(changeQtyHandler({value, id}))
    }
    return (
        <Box my={5}>
            <Typography variant="h3">Cart</Typography>
            <Box display="flex" flexDirection="column" gap={5} mt={2}>
                { cart[0] && cart.map((prod) => {
                    return <CartItem key={prod.id} {...prod} addQuanity={addQuanity} />
                })}
            </Box>
            { !cart[0] && <Typography variant="h2" align="center" mt={10}>No Items</Typography> }

            {cart[0] && (
                <Typography mt={3} variant="h4">
                    Total: {cart.reduce((acc, item) => acc + (item.price * item.qty), 0)}
                </Typography>
            )}
        </Box>
    )
}