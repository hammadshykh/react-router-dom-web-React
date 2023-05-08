import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";

const ViewCart = () => {
    const loc = useLocation();
    console.log(loc);
    const { id, image, price, cutPrice, title } = loc.state;
    return (
        <>
            <Box>
                <Heading>ViewCart</Heading>
                <Box
                    p={5}
                    boxShadow="lg"
                    borderRadius={20}
                    textAlign="start"
                    display="flex"
                    alignItems="center">
                    <Box w="300px">
                        <Image
                            objectFit="fill"
                            boxSize="full"
                            src={image}
                            alt="stock image"
                        />
                    </Box>
                    <Box>
                        <Flex alignItems="center" mt="10px">
                            <Heading
                                noOfLines={1}
                                fontWeight="bold"
                                me="10px"
                                fontSize="14px"
                                textDecoration="line-through">
                                {price}
                            </Heading>
                            <Text>{title}</Text>
                        </Flex>
                        <Flex alignItems="center" mt="5px">
                            <Heading
                                noOfLines={1}
                                fontWeight="bold"
                                me="20px"
                                fontSize="14px"
                                color="red">
                                {cutPrice}
                            </Heading>
                            <Text>Current Price</Text>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default ViewCart;
