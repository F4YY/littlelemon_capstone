import React from 'react';
import LL_AboutUs from "./images/LL_AboutUs.jpeg";
import { Text, Heading, Box, HStack, VStack, Image } from "@chakra-ui/react";

const About = () => {
  return (
    <Box
      backgroundColor="rgb(51,51,51)"
    >
        <VStack
            pt={5} pb={5}
            justifyContent="center"
        >
            <Heading as="h1" id="About-section" fontSize={{base: "25px", md: "30px", lg:"36px"}} color="white">
                About Us
            </Heading>
            <HStack
                display="flex"
                mt={{ base: "4rem", md: '4rem', lg: '1rem'}}
                mb={{ base: "1rem", md: '2rem', lg: '2rem'}}
                ml={{ base: "auto",sm: "1rem", md: "auto", lg: "auto"}}
                mr={{ base: "auto",sm: "1rem", md: "auto", lg: "auto"}}
                flexDirection={{base:"column", md:"row", lg:"row"}}
                justifyContent="center"
                padding={10}
                spacing={15}
                gap={6}
            >
                <Image
                    display="flex"
                    height={{base: 300, md: 360, lg:440}}
                    w="auto"
                    borderRadius={20}
                    src={LL_AboutUs}
                    alt="About"
                />
                <VStack alignItems="left">
                    <Heading fontFamily="Markazi Text" color="rgb(244,206,20)" size={{base: "md", md: "lg", lg:"lg"}}>Little Lemon</Heading>
                    <Heading fontFamily="Markazi Text" color="white" size={{base: "sm", md: "md", lg:"md"}}>Chicago</Heading>
                    <Text pt={4} w={{base:"auto", md:"auto", lg:"400px"}} color="white" textAlign="justify">
                        Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes
                        served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of
                        12–15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices,
                        making it a popular place for a meal any time of the day.
                        Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared
                        dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.
                        Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to 
                        incorporate additional cuisines from the Mediterranean region.
                    </Text>
                </VStack>
            </HStack>
        </VStack>
    </Box>
  );
};

export default About;
