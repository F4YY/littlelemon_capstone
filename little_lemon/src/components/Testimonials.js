import React from 'react';
import Testi01 from "./images/Testi01.jpg";
import Testi02 from "./images/Testi02.jpeg";
import Testi03 from "./images/Testi03.jpg";
import Testi04 from "./images/Testi04.jpg";
import Testi05 from "./images/Testi05.png";
import { Heading, Box, Image, VStack, HStack } from "@chakra-ui/react";
import './styles/Testimonials.css';

const Testimonials = () => {
  const scrollRef = React.useRef(null);
  return(
    <Box backgroundColor="rgb(73,94,87)"
          justifyContent="center"
          alignItems="flex-start"
          display="flex"
          pt={5}
          pb={8}
    >
      <VStack
          display="flex"
          justifyContent="space-between"
          ml={{ base: "1rem",sm: "1rem", md: "2rem", lg: "2rem" }}
          mr={{ base: "1rem",sm: "1rem", md: "2rem", lg: "2rem" }}
          flexDirection="column"
          zIndex={0}
        >
          <Heading as="h1" id="Testimonials-section" fontSize={{base: "25px", md: "30px", lg:"36px"}} color="white" pb={4}>
            Testimonials
          </Heading>
          <HStack display="flex" className='testimony'
            flex={1}
            alignItems="center"
            justifyContent="flex-start"
            flexDirection="row"
            position="relative"
            overflowX="scroll"
            gap={5}
            ref={scrollRef}
          >
            <Image
              width={{base: "90%", md: "60%", lg:"30%"}}
              borderRadius={30}
              src={Testi01}
              alt="Testi01"
              _hover={{opacity:"80%"}}
              cursor="pointer"
                />
            <Image
              width={{base: "90%", md: "60%", lg:"30%"}}
              borderRadius={30}
              src={Testi02}
              alt="Testi02"
              _hover={{opacity:"80%"}}
              cursor="pointer"
            />
            <Image
              width={{base: "90%", md: "60%", lg:"30%"}}
              borderRadius={30}
              src={Testi03}
              alt="Testi03"
              _hover={{opacity:"80%"}}
              cursor="pointer"
                />
            <Image
              width={{base: "90%", md: "60%", lg:"30%"}}
              borderRadius={30}
              src={Testi04}
              alt="Testi04"
              _hover={{opacity:"80%"}}
              cursor="pointer"
            />
            <Image
              width={{base: "90%", md: "60%", lg:"30%"}}
              borderRadius={30}
              src={Testi05}
              alt="Testi05"
              _hover={{opacity:"80%"}}
              cursor="pointer"
            />
          </HStack>
        </VStack>
      </Box>
    )
}
export default Testimonials;