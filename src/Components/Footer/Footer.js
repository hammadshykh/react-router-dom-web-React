import {
    Box,
    chakra,
    Image,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

const Logo = (props) => {
    return (
        <>
            <Box w='100px'>
                <Image src="/logo512.png" boxSize="full" />
            </Box>
        </>
    );
};

const SocialButton = (props) => {
    const { label, children, href, bg } = props;
    return (
        <chakra.button
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            rounded={"full"}
            w={8}
            bgColor={bg}
            h={8}
            cursor={"pointer"}
            as={"a"}
            href={href}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            _hover={{
                bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Footer() {
    return (
        <Box
            bg="#282c34"
            color="white">
            <Box
                as={Stack}
                maxW={"6xl"}
                py={4}
                spacing={4}
                justify={"center"}
                align={"center"}>
                <Logo />
                <Stack direction={"row"} spacing={6}>
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Blog">Blog</Link>
                    <Link to="Contact">Contact</Link>
                </Stack>
            </Box>
            <Box
                borderTopWidth={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.200", "gray.700")}>
                <Box
                    as={Stack}
                    maxW={"6xl"}
                    py={4}
                    direction={{ base: "column", md: "row" }}
                    spacing={4}
                    justify={{ base: "center", md: "space-between" }}
                    align={{ base: "center", md: "center" }}>
                    <Text>© 2022 Chakra Templates. All rights reserved</Text>
                    <Stack direction={"row"} spacing={6}>
                        <SocialButton label={"Twitter"} href="#" bg='skyBlue'>
                            <FaTwitter />
                        </SocialButton>
                        <SocialButton label={"YouTube"} href="#" bg='red'>
                            <FaYoutube />
                        </SocialButton>
                        <SocialButton label={"Instagram"} href="#" bg='orange'>
                            <FaInstagram />
                        </SocialButton>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}
