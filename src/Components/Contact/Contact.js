import React from "react";
import { useNavigate } from "react-router-dom";
import Basic from "../Formik/Formik";
import { Box } from "@chakra-ui/react";
import Footer from "../Footer/Footer";

const Contact = () => {
    return (
        <>
            <Basic />
            <Box mt='10'>
            </Box>
            <Footer />
        </>
    );
};

export default Contact;
