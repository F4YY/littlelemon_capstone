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
  Select,
  Textarea,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenLL from "./FullScreenLL";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const ReserveTable = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
        firstName: "",
        email: "",

        timepicker: "20:00",
        notes: "",
    },
    onSubmit: (values) => {
        submit('https://example.com/contactme', values);
    },
    validationSchema: Yup.object({
        firstName: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        notes: Yup.string()
        .min(20, "Must be 20 characters at minimum")
        .required("Required"),
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
    <FullScreenLL
      isDarkBackground
      backgroundColor="rgb(238,153,114)"
      color="#333333"
      py={0}
      alignItems="flex-start"
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="center">
        <Heading as="h1" id="Reservation">
          Reserve a Table
        </Heading>
        <Box p={5} rounded="xl" w="50%" backgroundColor="azure">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={6}>
              <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="datepicker">Choose date</FormLabel>
                <input type="date" id="res-date" name="date"
                    minDate={new Date()}
                    required
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="timepicker">Choose time</FormLabel>
                    <Select id="res-time" w="60%">
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    {/* <option value="hireMe" color="black" backgroundColor="grey">Fulltime remote project proposal</option>
                    <option value="openSource" color="black" backgroundColor="grey">Open source consultancy session</option>
                    <option value="other" color="black" backgroundColor="grey">Other</option> */}
                    </Select>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="guests">Number of guests</FormLabel>
                <Select id="guests" w="60%">
                    <option>1 - 2 persons</option>
                    <option>3 - 4 persons</option>
                    <option>5 - 6 persons</option>
                    <option>7 - 8 persons</option>
                    <option>9 - 10 persons</option>
                    <option>more than 11 persons</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select id="occasion" w="60%">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                    <option>Corporate event</option>
                    <option>Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.notes && formik.touched.notes}>
                <FormLabel htmlFor="notes">Add notes</FormLabel>
                <Textarea
                  id="notes"
                  name="notes"
                  height={100}
                  {...formik.getFieldProps("notes")}
                />
                <FormErrorMessage>{formik.errors.notes}</FormErrorMessage>
              </FormControl>
              <Button type="submit" disabled={!(formik.isValid && formik.dirty)} colorScheme="purple" width="full" isLoading={isLoading} loadingText='Submitting'>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenLL>
  );
};

export default ReserveTable;