import React from "react";
import { Formik } from "formik";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    Text,
} from "@chakra-ui/react";

const Basic = () => (
    <div>
        <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
                const errors = {};
                if (!values.email) {
                    errors.email = "Required";
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = "Invalid email address";
                }
                if (!values.password) {
                    errors.password = "Plz Passsword"
                } else if (values.password.length < 6) {
                    errors.password = "6 latters Required "
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}>
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <Box maxW="500px" m="0 auto" mt="10">
                    <form onSubmit={handleSubmit}>
                        <Box
                            w="500px"
                            backgroundColor="skyblue"
                            p="10"
                            borderRadius="15px"
                            boxShadow="dark-lg"
                        >
                            <Heading color="white" textShadow="2px 2px #000" textAlign='start' mb='5'>
                                Formik Form
                            </Heading>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </FormControl>
                            <Text color="red">
                                {errors.email && touched.email && errors.email}
                            </Text>
                            <FormControl mt="5">
                                <FormLabel>password</FormLabel>
                                <Input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                            </FormControl>
                            <Text color="red">
                                {errors.password && touched.password && errors.password}
                            </Text>
                            <Button
                                type="submit"
                                display="flex"
                                justifyContent="start"
                                mt="5"
                                disabled={isSubmitting}
                                bg='yellowgreen'>
                                Submit
                            </Button>
                        </Box>
                    </form>
                </Box>
            )}
        </Formik>
    </div>
);

export default Basic;
