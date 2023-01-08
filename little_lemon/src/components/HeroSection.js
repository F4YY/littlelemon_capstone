import React from 'react';
import LL_homepage from "./images/LL_homepage.png";
import { Box, HStack, Image } from "@chakra-ui/react";
import Features from './Features';

const HeroSection = () => {
  return (
    <Box
      backgroundColor="rgb(73,94,87)"
      zIndex={-1}
    >
      <HStack
        id="Home-section"
        display="flex"
        mt={{ base: "4rem", md: '4rem', lg: '1rem'}}
        mb={{ base: "1rem", md: '2rem', lg: '2rem'}}
        ml={{ base: "1rem",sm: "1rem", md: "7rem", lg: "15rem" }}
        mr={{ base: "1rem",sm: "1rem", md: "7rem", lg: "15rem" }}
        sizes={{base: '100%',md: '80%',xl: '50%'}}
        gap={5}
        pt={{base:3,md:5,lg:20}}
        pb={5}
        flexDirection={{base:"column", md:"row", lg:"row"}}
        justifyContent="space-between"
      >
        <Features
          title='Little Lemon'
          subtitle="Chicago"
          desc='We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. Hello my name is Riki Wendri and I am Software Engineer, specialized in React Native'
          button="Reserve a Table"
        />
        <Image
            display="flex"
            position={{base:"auto", md:"auto",lg:"absolute"}}
            top="100px"
            left="750px"
            height={{base: 350, md: "auto", lg:430}}
            w={300}
            borderRadius={20}
            src={LL_homepage}
            alt="homepage"
          />
      </HStack>
    </Box>
  );
};

export default HeroSection;