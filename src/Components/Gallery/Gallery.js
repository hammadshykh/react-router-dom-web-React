import {
    Box,
    Flex,
    Image,
    Img,
    Input,
    InputGroup,
    InputRightAddon,
    SimpleGrid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { default as products } from "../LocalData/LocalData.json";
import { ImCross } from "react-icons/im";
import styled from "@emotion/styled";
import Footer from "../Footer/Footer";

const Gallery = () => {
    const [pic, setPic] = useState("");
    const [viewPic, setViewPic] = useState("");
    const [closePic, setClosePic] = useState(false);

    const onChangeHandler = (e) => {
        setPic(e.target.value);
    };

    const filtered = products.filter((data) =>
        data.category.toLowerCase().includes(pic)
    );
    const viewPics = (img) => {
        setViewPic(img);
    };
    return (
        <>
            <Box maxWidth="1200px" margin="0 auto">
                <div>
                    <Box my="20px">
                        <InputGroup size="sm">
                            <Input
                                w="200px"
                                placeholder="Search"
                                onChange={onChangeHandler}
                            />
                            <InputRightAddon
                                children="search"
                                bg="red"
                                color="white"
                                border="none"

                            />
                        </InputGroup>
                    </Box>
                    <Box>
                        <Box
                            my="20px"
                            position="relative"
                            display={viewPic ? "flex" : "none"}
                            d
                            justifyContent="center">
                            <Box
                                cursor="Pointer"
                                position="absolute"
                                right="30%"
                                top="10px"
                                _hover={{ color: "red" }}>
                                <ImCross />
                            </Box>
                            <Box w="500px" boxShadow="lg">
                                <Img w="100%" src={viewPic} />
                            </Box>
                        </Box>
                        <SimpleGrid minChildWidth="250px" spacing={10}>
                            {filtered.map((data) => (
                                <Box w="250px" height="210px" shadow="md">
                                    <Image
                                        opacity="0.8"
                                        cursor="pointer"
                                        _hover={{ opacity: "1" }}
                                        objectFit="fill"
                                        boxSize="full"
                                        src={data.img}
                                        alt="stock image"
                                        onClick={() => viewPics(data.img)}
                                    />
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Box>
                </div >
            </Box >
            <Box mt='10'>
            </Box>
            <Footer />
        </>
    );
};

export default Gallery;
