import Features from "./Features";
import croffle from "./images/croffle.jpg";
import { Stack, Center, Image, Box } from "@chakra-ui/react";

function HeroSection() {
    return (
      <Center backgroundColor="rgb(73,94,87)" id="Home">
          <Stack
          spacing={8}
          display="flex"
          direction="row"
          mt={20}
          alignItems='center'
          height={{
            base: '100%', // 0-48em
            md: '50%', // 48em-80em,
            xl: '25%', // 80em+
          }}
        >
            <Features
            title='Little Lemon'
            subtitle="Chicago"
            desc='We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. Hello my name is Riki Wendri and I am Software Engineer, specialized in React Native'
            button="Reserve a Table"
          />
          <Box>
            <Image
              w={350}
              h={370}
              borderRadius={20}
              src={croffle}
              alt="croffle"
            />
          </Box>
          </Stack>
      </Center>
    )
  }

  export default HeroSection;