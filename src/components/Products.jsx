import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { ProductCard } from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProductsFetch  } from "../reduxToolkit/productState";
import { Loader } from "./Loader";

export const Products = () => {
    const { isLoading, products, cart } = useSelector((state) => state.data );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsFetch());
    }, [dispatch])

    return (
        <Box py={3}>
            { isLoading && <Loader /> }
            <Typography variant="h3">Products</Typography>
            <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={3} my={3} >
                { products && (
                    products.map((product) => {
                        return <ProductCard key={product.id} {...product} flag={cart.some((item) => item.id === product.id)} />
                    })
                )}
            </Box>
            { !products && <Typography variant="h2" align="center" mt={10}>No Products</Typography> }
        </Box>
    )
}