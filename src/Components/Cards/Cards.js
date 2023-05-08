import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";

const Cards = (props) => {
    const { product, onAdd } = props;
    const navigate = useNavigate();

    const ViewCart = (img, title, price, cutPrice, id) => {
        try {
            navigate("/ViewCart", {
                state: {
                    image: img,
                    title: title,
                    price: price,
                    cutPrice: cutPrice,
                    id: id,
                },
            }); // Omit optional second argument
        } catch (error) {
            alert(error);
        }
    };

    return (
        <Box maxWidth="1200px" margin="0 auto" mt="10%">
            <Box
                p={5}
                boxShadow="lg"
                borderRadius={20}
                textAlign="start"
                key={product?.id}>
                <Box w="200px" height="210px">
                    <Image
                        objectFit="fill"
                        boxSize="full"
                        src={product?.img}
                        alt="stock image"
                    />
                </Box>
                <Flex alignItems="center" mt="10px">
                    <Heading
                        noOfLines={1}
                        fontWeight="bold"
                        me="10px"
                        fontSize="14px"
                        textDecoration="line-through">
                        {product?.cutPrice}
                    </Heading>
                    <Text>{product?.title}</Text>
                </Flex>
                <Flex alignItems="center" mt="5px">
                    <Heading
                        noOfLines={1}
                        fontWeight="bold"
                        me="10px"
                        fontSize="14px"
                        color="red">
                        {product?.price}
                    </Heading>
                    <Text>Current Price</Text>
                    <Button
                        size="xs"
                        ms="2"
                        variant="unstyled"
                        color="blue"
                        _hover={{ textDecoration: "underline" }}
                        onClick={() =>
                            ViewCart(
                                product?.img,
                                product?.title,
                                product?.price,
                                product?.cutPrice,
                                product.id
                            )
                        }>
                        ViewCart
                    </Button>
                </Flex>
                <Button my="5px" size="sm" onClick={() => onAdd(product)}>
                    Parchase
                </Button>
            </Box>
        </Box>
    );
};

export default Cards;
