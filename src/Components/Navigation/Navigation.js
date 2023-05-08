import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import About from "../about/About";
import Services from "../Services/Services";
import Navbar from "../NavBar/Navbar";
import ViewCart from "../ViewCart/ViewCart";
import Store from "../Store/Store";
import { Box } from "@chakra-ui/react";
import Footer from "../Footer/Footer";

const Navigation = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route
                    path="*"
                    element={
                        <div>
                            <h1>404</h1>
                        </div>
                    }
                />
                <Route path="/" element={<Home />} />
                <Route path="/Store" element={<Store />} />
                <Route path="/ViewCart" element={<ViewCart />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/About" element={<About />} />
                <Route path="/Gallery" element={<Gallery />} />
                <Route path="/Services" element={<Services />} />
            </Routes>
        </>
    );
};

export default Navigation;
