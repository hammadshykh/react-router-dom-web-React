import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
    const navigate = useNavigate();
    return (
        <header className="block row center">
            <Flex mt="10px" p="10px">
                <Button
                    color="black"
                    fontSize="22px"
                    size="sm"
                    variant="unstyled"
                    _hover={{ color: "red" }}
                    onClick={() => navigate("/Store")}>
                    <FaShoppingCart />
                </Button>
                {props.countCartItems ? <Text>{props.countCartItems}</Text> : ""}
            </Flex>
        </header>
    );
}
