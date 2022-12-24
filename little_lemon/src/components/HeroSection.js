import React from "react";
import { Avatar, Heading, VStack, HStack, Box, Button} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Riki from "./images/Riki.jpg";
import croffle from "./images/croffle.jpg";

const greeting = "Hello, I am Riki!";
const Text1 = "Little Lemon";
const Text2 = "Chicago";
const Text3 = "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.";

const HeroSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#739487"
  >
    <Box
        display="grid"
        gridTemplateColumns="(2,minmax(0.8fr))"
        gridGap={8}
        maxWidth="800px"
        alignItems="center"
        justifyContent= 'center'
        textAlignVertical='top'
        flex="3"
    >
        <HStack textAlignVertical='top' flex="3">
            <VStack spacing={2} textAlignVertical='top' textAlign="left" flexDirection="column" flex="3">
                <Heading as="h1" size="2xl" noOfLines={1}
                    width="400px"
                    height="45px"
                    font-family="Markazi Text"
                    font-style="normal"
                    font-weight="500"
                    font-size="64px"
                    line-height="7px"
                    color="#F4CE14"
                    flex="none"
                    order="0"
                    flex-grow="0"
                    margin="5px 0px"
                    textAlignVertical="top"
                    >
                    {Text1}
                </Heading>
                <Heading as="h2" size="xl" noOfLines={1}
                    flex="none"
                    width="400px"
                    order="0"
                    height="50px"
                    flex-grow="0"
                    margin="0px 0px"
                    textAlign="left"
                    paddingBottom={20}
                    >
                    {Text2}
                </Heading>
                <article as="h3" size="l" noOfLines={2}
                    margin="10px 0px"
                    width="200px"
                    flexDirection="row-reverse"
                >
                    {Text3}
                </article>
                <Button color="black" backgroundColor="yellow">Reserve a Table</Button>
            </VStack>
        <Avatar
            src={croffle} alt=""
            size="m"
            name="Riki Wendri"
            width="400px"
            height="495px"
            borderRadius='16px'
            position="static"
        />
        </HStack>
    </Box>
  </FullScreenSection>
);

export default HeroSection;
