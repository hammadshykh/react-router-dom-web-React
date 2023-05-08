import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Heading,
    Image,
    Input,
    InputGroup,
    InputRightAddon,
    MenuButton,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    return (
        <>
            <Box shadow="2xl">
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    bg="gray.900"
                    p="10px">
                    <Box display={["none", "none", "flex", "flex", "flex"]} alignItems="center">
                        <Box w="50px" me="20px">
                            <Image src="/logo192.png" boxSize="full" />
                        </Box>
                        <Heading color="white">React Router Dom</Heading>
                    </Box>
                    <Button
                        ref={btnRef} colorScheme="teal" onClick={onOpen}
                        size="sm"
                        fontSize="22px"
                        variant="unstyled"
                        color='white'
                        _hover={{ color: "red" }}>
                        <AiOutlineMenu />
                    </Button>

                    <Box color="gray.300" p="10px" display={["none", "none", "none", "block", "block"]}>
                        <Breadcrumb
                            fontWeight="medium"
                            fontSize="sm"
                            separator=""
                            spacing="30px"
                            margin="0 20px">
                            <BreadcrumbItem>
                                <Button
                                    variant="unstyled"
                                    onClick={() => navigate("/")}
                                    _hover={{ color: "white" }}
                                    size="sm">
                                    Home
                                </Button>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Button
                                    variant="unstyled"
                                    onClick={() => navigate("/About")}
                                    _hover={{ color: "white" }}
                                    size="sm">
                                    About
                                </Button>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Button
                                    variant="unstyled"
                                    onClick={() => navigate("/Contact")}
                                    _hover={{ color: "white" }}
                                    size="sm">
                                    Contact
                                </Button>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Button
                                    variant="unstyled"
                                    onClick={() => navigate("/Gallery")}
                                    _hover={{ color: "white" }}
                                    size="sm">
                                    Gallery
                                </Button>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Button
                                    variant="unstyled"
                                    onClick={() => navigate("/Services")}
                                    _hover={{ color: "white" }}
                                    size="sm">
                                    Services
                                </Button>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Box>
                    <Box>
                        <InputGroup size="sm">
                            <Input
                                w="200px"
                                variant="flushed"
                                placeholder="Search"
                                color="white"
                            />
                            <InputRightAddon
                                children={<BiSearch />}
                                fontSize="20px"
                                bg="skyblue"
                                color="white"
                                border="none"
                            />
                        </InputGroup>
                    </Box>
                </Flex>
                <>

                    <Drawer
                        isOpen={isOpen}
                        placement="left"
                        onClose={onClose}
                        finalFocusRef={btnRef}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerBody bg="gray.900">
                                <Box >
                                    <Box display={"flex"} alignItems="center">
                                        <Box w="50px" me="20px">
                                            <Image src="/logo192.png" boxSize="full" />
                                        </Box>
                                        <Heading color="white" fontSize='23px'>React Router Dom</Heading>
                                    </Box>
                                    <Box color="gray.300" p="10px"
                                        display='flex'
                                        flexDirection={"column"}
                                        alignItems='start'>

                                        <Button
                                            variant="unstyled"
                                            onClick={() => navigate("/")}
                                            _hover={{ color: "white" }}
                                            size="sm">
                                            Home
                                        </Button>
                                        <Button
                                            variant="unstyled"
                                            onClick={() => navigate("/About")}
                                            _hover={{ color: "white" }}
                                            size="sm">
                                            About
                                        </Button>
                                        <Button
                                            variant="unstyled"
                                            onClick={() => navigate("/Contact")}
                                            _hover={{ color: "white" }}
                                            size="sm">
                                            Contact
                                        </Button>
                                        <Button
                                            variant="unstyled"
                                            onClick={() => navigate("/Gallery")}
                                            _hover={{ color: "white" }}
                                            size="sm">
                                            Gallery
                                        </Button>
                                        <Button
                                            variant="unstyled"
                                            onClick={() => navigate("/Services")}
                                            _hover={{ color: "white" }}
                                            size="sm">
                                            Services
                                        </Button>
                                    </Box>
                                    <Box mt='10'>
                                        <InputGroup size="sm">
                                            <Input
                                                w="200px"
                                                variant="flushed"
                                                placeholder="Search"
                                                color="white"
                                            />
                                            <InputRightAddon
                                                children={<BiSearch />}
                                                fontSize="20px"
                                                bg="skyblue"
                                                color="white"
                                                border="none"
                                            />
                                        </InputGroup>
                                    </Box>
                                </Box>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </>
            </Box>
        </>
    );
};

export default Navbar;
