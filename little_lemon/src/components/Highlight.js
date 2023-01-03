import React from 'react';
import LL_greeksalad from "./images/LL_greeksalad.png";
import LL_bruschetta from "./images/LL_bruschetta.png";
import LL_pasta from "./images/LL_pasta.png";
import { Heading, Box, Button, Image, VStack, HStack } from "@chakra-ui/react";
import TopMenu from './TopMenu';

const Highlight = () => {
    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

const scrollRef = React.useRef(null);

    return(
        <Box>
            <HStack
                display="flex"
                justifyContent="space-between"
                ml={{ base: "1rem",sm: "1rem", md: "7rem", lg: "10rem" }}
                mr={{ base: "1rem",sm: "1rem", md: "7rem", lg: "10rem" }}
                flexDirection={{base:"column", md:"row", lg:"row"}}
                p={4}
            >
                <Heading as="h1" id="Specials" fontSize={{base: "25px", md: "30px", lg:"36px"}} color="rgb(51,51,51)">
                    This Weeks Specials!
                </Heading>
                <a href="#Specials" onClick={handleClick("Button Order Online")}>
                    <Button zIndex={0} fontSize={{base: "16px", md: "19px", lg:"22px"}} color="#333333" fontWeight="bold" backgroundColor="rgb(244,206,20)" w={200} borderRadius={10} id="Order Online">Order Online</Button>
                </a>
            </HStack>
            <HStack
                mt={{ base: "auto", md: '1rem', lg: '2rem'}}
                mb={{ base: "auto", md: '1rem', lg: '2rem'}}
                ml={{ base: "auto",sm: "1rem", md: "4rem", lg: "10rem" }}
                mr={{ base: "auto",sm: "1rem", md: "4rem", lg: "10rem" }}
                flexDirection={{base:"column", sm: "column",md:"row", lg:"row"}}
                justifyContent="flex-start"
                spacing={{base:'auto', md:"auto", lg:2}}
                gap={7}
                display="flex"
                flex={1}
                cursor="pointer"
                position="relative"
                overflowX="scroll"
                ref={scrollRef}
                zIndex={0}
            >
                <VStack
                    backgroundColor="rgb(217,217,217)"
                    borderRadius={20}
                    display="flex"
                    alignItems="center"
                    _hover={{opacity:"80%"}}
                >
                    <Image
                        display="flex"
                        size={{base: "auto", md: "auto", lg:"auto"}}
                        borderRadius={30}
                        src={LL_greeksalad}
                        alt="Greek Salad"
                    />
                    <TopMenu
                        title='Greek Salad'
                        subtitle="Order a delivery"
                        desc='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
                        price="$12.99"
                    />
                </VStack>
                <VStack
                    backgroundColor="rgb(217,217,217)"
                    borderRadius={20}
                    display="flex"
                    alignItems="center"
                    _hover={{opacity:"80%"}}
                >
                    <Image
                        size={{base: "auto", md: "auto", lg:"auto"}}
                        borderRadius={30}
                        src={LL_bruschetta}
                        alt="bruschetta"
                        />
                    <TopMenu
                        title='Bruschetta'
                        subtitle="Order a delivery"
                        desc='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with choptomatoes,bazil.'
                        price="$7.99"
                    />
                </VStack>
                <VStack
                    backgroundColor="rgb(217,217,217)"
                    borderRadius={20}
                    display="flex"
                    alignItems="center"
                    _hover={{opacity:"80%"}}
                >
                    <Image
                        size={{base: "auto", md: "auto", lg:"auto"}}
                        borderRadius={30}
                        src={LL_pasta}
                        alt="pasta"
                        />
                    <TopMenu
                        title='Pasta'
                        subtitle="Order a delivery"
                        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare and Lorem ipsumconsectetur adipiscing elit. Aliquet nec in ornare.'
                        price="$18.99"
                    />
                </VStack>
            </HStack>
        </Box>
    )
}

export default Highlight;