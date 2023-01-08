import { Heading, Box, Text, Button, Image } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const Features = ({ title, subtitle, desc, button, image }) => {
  const navigate = useNavigate();
  const handleClick = (anchor) => () => {
    navigate(anchor)
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        });
        }
      };

    return (
        <Box
          p={3}
          shadow='lg'
          display="flex"
          flexDirection="column"
          size={{base: "sm", md: "md", lg:"md"}}
        >
        <Heading fontFamily="Markazi Text"
                fontSize="7xl"
                color="rgb(244,206,20)"
                size={{base: "3xl", md: "4xl", lg:"7xl"}}>
            {title}
        </Heading>
        <Heading fontFamily="Markazi Text"
                fontSize="5xl"
                color="white"
                size={{base: "2xl", md: "3xl", lg:"5xl"}}>
            {subtitle}
        </Heading>
        <Text mt={8} maxWidth="350px"
              color="white">
            {desc}
        </Text>
        <a href="#Reservation-section" onClick={handleClick("Reservation")}>
          <Button zIndex={0} mt={12}
                  color="#333333"
                  backgroundColor="rgb(244,206,20)"
                  fontSize={{base: "16px", md: "19px", lg:"22px"}}
                  borderRadius={10}>{button}
          </Button>
        </a>
        <Image>{image}</Image>
        </Box>
  )
}

export default Features;