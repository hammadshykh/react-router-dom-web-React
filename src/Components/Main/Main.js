import React from "react";
import Cards from "../Cards/Cards";
import { Box, SimpleGrid } from "@chakra-ui/react";

const Main = (props) => {
    const { products, onAdd } = props;
    return (
        <>
            <Box>
                <SimpleGrid minChildWidth="250px" spacing={10}>
                    {products?.map((product) => (
                        <Cards key={product.id} product={product} onAdd={onAdd} />
                    ))}
                </SimpleGrid>
            </Box>
        </>
    );
};
export default Main;
