import { Heading, Box, Text, Button, Image } from "@chakra-ui/react";

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
const Features = ({ title, subtitle, desc, button, image }) => {
    return (
        <Box
        p={3}
        shadow='lg'
        display="grid"
        columns={{ sm: 2, md: 4 }}
        w="sm" h="sm"
        >
        <Heading fontFamily="Markazi Text" fontSize="5xl" color="rgb(244,206,20)">{title}</Heading>
        <Heading fontFamily="Markazi Text" fontSize="3xl" color="white">{subtitle}</Heading>
        <Text mt={8} color="white">{desc}</Text>
        <a href="#Reservation" onClick={handleClick("Button Reserve a Table")}>
          <Button mt={12} color="#333333" backgroundColor="rgb(244,206,20)" w={200} borderRadius={10}>{button}</Button>
        </a>
        <Image>{image}</Image>
        </Box>
  )
}

export default Features;