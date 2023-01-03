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
} from "@chakra-ui/react";
import * as Yup from 'yup';
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
import axios from "axios";

const ReserveTable = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      Name: "",
      email: "",
      date: "",
      time: "17:00",
      no_of_guests: "1 - 2 persons",
      occasion:"Birthday",
      notes:"",
    },
    onSubmit: (value) => {
      axios.post('http://localhost:3001/Reservation_guest', value)
      submit(value);
    },
    validationSchema: Yup.object({
        Name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        notes: Yup.string()
        .min(10, "Must be 10 characters at minimum")
        .required("Required"),
        date: Yup.string().required("Please select reservation date"),
        time: Yup.string().required("Please select available time"),
        no_of_guests: Yup.string().required("Please select number of quests"),
        occasion: Yup.string().required("Please select occasion"),
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
    <Box backgroundColor="rgb(238,153,114)"
          justifyContent="center"
          alignItems="flex-start"
          display="flex"
    >
      <VStack w="1024px" p={10} zIndex={0}>
        <Heading as="h1" id="Reservation" fontSize={{base: "25px", md: "30px", lg:"36px"}} pb={4}>
          Reserve a Table
        </Heading>
        <Box p={4} rounded="xl" width={{base: "100%", md: "50%", lg:"50%"}} backgroundColor="azure">
          <form onSubmit={formik.handleSubmit} display="flex">
            <VStack spacing={6}>
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
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.date && formik.touched.date}>
                <FormLabel htmlFor="datepicker">Choose date</FormLabel>
                <input type="date" id="res-date" name="date"
                    minDate={new Date()}
                    {...formik.getFieldProps("date")}
                    required
                />
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.time && formik.touched.time}>
                <FormLabel htmlFor="timepicker">Choose time</FormLabel>
                    <Select id="res-time" name="time" w="60%" {...formik.getFieldProps("time")} required>
                        <option disabled>--select time--</option>
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </Select>
                    <FormErrorMessage>{formik.errors.time},</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.no_of_guests && formik.touched.no_of_guests}>
                <FormLabel htmlFor="guests">Number of guests</FormLabel>
                <Select id="guests" name="no_of_guests" w="60%" {...formik.getFieldProps("no_of_guests")} required>
                    <option disabled>--select no of guests--</option>
                    <option>1 - 2 persons</option>
                    <option>3 - 4 persons</option>
                    <option>5 - 6 persons</option>
                    <option>7 - 8 persons</option>
                    <option>9 - 10 persons</option>
                    <option>more than 11 persons</option>
                    <FormErrorMessage>{formik.errors.no_of_guests}</FormErrorMessage>
                </Select>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.occasion && formik.touched.occasion}>
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select id="occasion" name="occasion" w="60%" {...formik.getFieldProps("occasion")} required>
                    <option disabled>--select occasion--</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                    <option>Family Gathering</option>
                    <option>Corporate event</option>
                    <option>Other</option>
                    <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
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
    </Box>
  );
};

export default ReserveTable;