import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../Footer/Footer";
const Services = () => {
    return (
        <>
            <Box textAlign='start' maxW='1200px' m='0 auto'>
                <h1>Services</h1>
                <Text>
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
                    aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                    quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                    fugiat sit in iste officiis commodi quidem hic quas.
                </Text>
                <Flex justifyContent='space-between'>
                    <Box w='20%' mt='20'>
                        <Box>
                            <Heading>Lorem ipsum</Heading>
                            <Text mt='5'>
                                Voluptatum deleniti atque corrupti quos dolores et quas molestias
                                excepturi sint occaecati cupiditate non provident
                            </Text>
                        </Box>
                    </Box>
                    <Box w='20%' mt='20'>
                        <Box>
                            <Heading>Lorem ipsum</Heading>
                            <Text mt='5'>
                                Voluptatum deleniti atque corrupti quos dolores et quas molestias
                                excepturi sint occaecati cupiditate non provident
                            </Text>
                        </Box>
                    </Box>
                    <Box w='20%' mt='20'>
                        <Box>
                            <Heading>Lorem ipsum</Heading>
                            <Text mt='5'>
                                Voluptatum deleniti atque corrupti quos dolores et quas molestias
                                excepturi sint occaecati cupiditate non provident
                            </Text>
                        </Box>
                    </Box>
                    <Box w='20%' mt='20'>
                        <Box>
                            <Heading>Lorem ipsum</Heading>
                            <Text mt='5'>
                                Voluptatum deleniti atque corrupti quos dolores et quas molestias
                                excepturi sint occaecati cupiditate non provident
                            </Text>
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <Box mt='10'>
            </Box>
            <Footer />
        </>
    );
};

export default Services;
