import { Box, Button, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const ParchaseCart = (props) => {
    const { cartItems, onAdd, onRemove } = props;
    return (
        <>
            <Box pt="5%" maxWidth="1200px" m="0 auto">
                <Text>ParchaseCart</Text>
                <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
                <SimpleGrid minChildWidth='250px' spacing={10}>
                    {cartItems?.map((product,) => {
                        return (
                            <Box
                                p={5}
                                boxShadow="lg"
                                borderRadius={20}
                                textAlign="start"
                            >
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
                                </Flex>
                                <Box>
                                    <Button onClick={() => onRemove(product)} className="remove">
                                        -
                                    </Button>{" "}
                                    <Button onClick={() => onAdd(product)} className="add">
                                        +
                                    </Button>
                                </Box>
                            </Box>
                        );
                    })}
                </SimpleGrid>

            </Box>
        </>
    );
};

export default ParchaseCart;
