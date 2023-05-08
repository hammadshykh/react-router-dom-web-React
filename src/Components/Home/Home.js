import {
    Box,
    Button,
    Flex,
    SimpleGrid,
    Tab,
    TabList,
    Tabs,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { default as product } from "../LocalData/LocalData.json";
import ParchaseCart from "../ParchaseCart/ParchaseCart";
import { Route, Router, Routes } from "react-router-dom";
import Main from "../Main/Main";
import Header from "../Header/Header";
import SimpleSlider from "../Slick/Slick";
import Footer from "../Footer/Footer";

const Home = () => {
    const [cartItems, setCartItems] = useState([]);
    const [category, setCtegory] = useState(product);
    useEffect(() => {
        let data = localStorage.getItem("card");
        console.log(data);
        if (data == null) {
            setCartItems([]);
        } else {
            setCartItems(JSON.parse(data));
        }
    }, []);

    const filterResult = (cartItem) => {
        const result = product.filter((curData) => {
            return curData.category === cartItem;
        });
        setCtegory(result);
    };

    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
            localStorage.setItem("card", JSON.stringify(cartItems));
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
            localStorage.setItem("card", JSON.stringify(cartItems));
        }
    };
    console.log(cartItems);
    return (
        <>
            <Box>
                <SimpleSlider />
                <Flex alignItems="center" justifyContent="center" mt="10">
                    <Header countCartItems={cartItems.length}></Header>
                    <Tabs
                        variant="unstyled"
                        justifyContent="space-between"
                        w="400px"
                        display="flex"
                        flexDirection={["column", "column", "row", "row", "row"]}>
                        <Tab
                            _selected={{ color: "white", bg: "green.400" }}
                            bg="blue.400"
                            color="white"
                            size="xs"
                            onClick={() => setCtegory(product)}>
                            All
                        </Tab>
                        <Tab
                            bg="blue.400"
                            color="white"
                            p="2"
                            onClick={() => filterResult("bag")}
                            _selected={{ color: "white", bg: "green.400" }}>
                            Bags
                        </Tab>
                        <Tab
                            _selected={{ color: "white", bg: "green.400" }}
                            bg="blue.400"
                            color="white"
                            size="xs"
                            onClick={() => filterResult("Shoes")}>
                            Shoes
                        </Tab>
                        <Tab
                            _selected={{ color: "white", bg: "green.400" }}
                            bg="blue.400"
                            color="white"
                            size="xs"
                            onClick={() => filterResult("T-shirts")}>
                            T-shirts
                        </Tab>
                        <Tab
                            _selected={{ color: "white", bg: "green.400" }}
                            bg="blue.400"
                            color="white"
                            size="xs"
                            onClick={() => filterResult("Pants")}>
                            Pants
                        </Tab>
                    </Tabs>
                </Flex>
                <Main products={category} onAdd={onAdd}></Main>
                <Box mt="10">
                    <Footer />
                </Box>
            </Box>
        </>
    );
};

export default Home;
