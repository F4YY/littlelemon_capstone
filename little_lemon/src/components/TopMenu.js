import { Heading, VStack, Text, HStack, Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const TopMenu = ({ title, price, subtitle, desc, button, image }) => {
    return (
    <VStack
       color="black"
       backgroundColor="rgb(217,217,217)"
       cursor="pointer"
       borderRadius="xl"
       w={300}
    >
       {/* <Image borderRadius="xl" src={image} alt={title} /> */}
       <VStack spacing={5} p={4} alignItems="flex-start">
         <HStack spacing={90}>
           <Heading as="h3" size="md">
             {title}
           </Heading>
           <Heading as="h4" size="md" color="rgb(238,153,114)" textAlign="right">
             {price}
           </Heading>
         </HStack>
         <Text color="#64748b" fontSize="lg">
           {desc}
         </Text>
         <HStack spacing={2} alignItems="center">
         <Heading
            fontFamily="Karla"
            fontSize="lg"
            color="#333333">{subtitle}
         </Heading>
           <FontAwesomeIcon icon={faArrowRight} size="1x" />
         </HStack>
       </VStack>
     </VStack>
  )
}

export default TopMenu;