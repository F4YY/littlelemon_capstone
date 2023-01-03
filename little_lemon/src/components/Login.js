import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import useSubmit from "../hooks/useSubmit";
import resvdata from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
import axios from "axios";

const Login = () => {
  const {isLoading, response, login} = useSubmit();
  const { onOpen } = useAlertContext();
  let guestdata = document.getElementById("root")
  let formik = useFormik({
    initialValues: {
      Name: "",
      email: "",
    },
    onSubmit: (value) => {
        login(value);
      axios.get('http://localhost:3001/Reservation_guest?formik.email=email', value)
      .then(res=>res.json())
      .then(json=>{
        json.map(guestdata=>{return resvdata.append(guestdata) });})
    },
    validationSchema: Yup.object({
        Name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
    }),
  });
    useEffect(() => {
        if (response) {
            onOpen(response.type, response.message);
            if(response.type === 'success'){
                formik.resetForm();
            }
        }
    }, [response]);

  return (
    <Box
      backgroundColor="rgb(251,218,187)"
      justifyContent="center"
      alignItems="flex-start"
      display="flex"
    >
        <VStack alignItems="center" width={{base: "95%", md: "50%", lg:"50%"}}
            display="flex"
            justifyContent="center"
            flexDirection="column"
            mt={{ base: "0.5rem", md: '1rem', lg: '2rem'}}
            mb={{ base: "0.5rem", md: '1rem', lg: '1rem'}}
            ml={{ base: "1rem",sm: "1rem", md: "5rem", lg: "7rem" }}
            mr={{ base: "1rem",sm: "1rem", md: "5rem", lg: "7rem" }}
            pb={6}
            zIndex={0}
        >
          <Heading as="h3" p={2} id="Login" fontSize={{base: "25px", md: "30px", lg:"34px"}}>
            Login to check your reservation data
          </Heading>
          <Box p={5} rounded="xl" backgroundColor="azure">
            <form onSubmit={formik.handleSubmit}>
              <HStack display="flex"
                      flexDirection="column"
              >
                <VStack spacing={4}>
                  <FormControl isInvalid={!!formik.errors.Name && formik.touched.Name}>
                      <FormLabel htmlFor="Name">Name</FormLabel>
                      <Input
                      id="Name"
                      name="Name"
                      {...formik.getFieldProps("Name")}
                      />
                      <FormErrorMessage>{formik.errors.Name}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                      <FormLabel htmlFor="email">email</FormLabel>
                      <Input
                      id="email"
                      name="email"
                      type="email"
                      {...formik.getFieldProps("email")}
                      />
                      <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                  </FormControl>
                  <Button type="login" disabled={!(formik.isValid && formik.dirty)} colorScheme="blue" width="full" isLoading={isLoading} loadingText='Logging in'>
                      Login
                  </Button>
                </VStack>
                <Box
                    p={3}
                    shadow='lg'
                    display="grid"
                    columns={{ sm: 2, md: 4 }}
                    w="sm" h="auto"
                    >
                    <Heading fontFamily="Markazi Text" fontSize="xl" color="black">{guestdata.Name}</Heading>
                    <Heading fontFamily="Markazi Text" fontSize="xl" color="black">{guestdata.email}</Heading>
                    <Text mt={0} color="white">{formik.date}</Text>
                </Box>
            </HStack>
          </form>
        </Box>
      </VStack>
    </Box>
  );
};

export default Login;