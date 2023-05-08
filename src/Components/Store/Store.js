import React, { useEffect, useState } from "react";
import ParchaseCart from "../ParchaseCart/ParchaseCart";
import { useNavigate } from "react-router-dom";
import Main from "../Main/Main";
import { default as product } from "../LocalData/LocalData.json";

const Store = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        let data = localStorage.getItem("card")
        console.log(data)
        if (data == null) {
            setCartItems([])
        }
        else {

            setCartItems(JSON.parse(data))
        }

    }, [])
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));

        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
            // localStorage.setItem("card", JSON.stringify(cartItems))
        }
        localStorage.setItem("card", JSON.stringify(cartItems))
    };

    console.log(cartItems);
    return (
        <>
            <ParchaseCart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
        </>
    );
};

export default Store;
