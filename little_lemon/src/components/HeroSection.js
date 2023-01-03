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
        id="Home"
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
            top="80px"
            left="750px"
            height={{base: 350, md: "auto", lg:430}}
            w={300}
            borderRadius={20}
            src={LL_homepage}
            alt="homepage"
          />
      </HStack>
    </Box>
      // <div className="app__header app__wrapper section__padding" id="Home">
      //   <div className="app__wrapper_info">
      //     <h1 className="app__header-h1">Little Lemon</h1>
      //     <h2 className="app__header-h2">Chicago</h2>
      //     <p className="p__desc" style={{ margin: '2rem 0' }}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. Hello my name is Riki Wendri and I am Software Engineer, specialized in React Native </p>
      //     <a href="#Reservation" onClick={handleClick("Reservation")}>
      //       {/* <button type="button" className="custom__button">Reserve a Table</button> */}
      //       <Button color="#333333" fontWeight="bold" backgroundColor="rgb(244,206,20)" w={200} borderRadius={10} id="Order Online">Reserve a Table</Button>
      //     </a>
      //   </div>
      //   <div className="app__wrapper_img">
      //     <img src={LL_homepage} alt="header_img"/>
      //   </div>
      // </div>
  );
};

export default HeroSection;

// import Features from "./Features";
// import croffle from "./images/croffle.jpg";
// import { HStack, Center, Image, Box } from "@chakra-ui/react";

// function HeroSection() {
//     return (
//       <Center backgroundColor="rgb(73,94,87)" id="Home" alignItems="center"
//         sizes={{
//         base: '100%',
//         md: '80%',
//         xl: '50%',
//       }}
//       >
//           <HStack
//           spacing={8}
//           display="flex"
//           mt={20}
//           alignItems='center'
//           height={{
//             base: '100%',
//             md: '50%',
//             xl: '25%',
//           }}
//         >
//             <Features
//             display="flex"
//             sizes={{
//               base: '100%',
//               md: '80%',
//               xl: '50%',
//             }}
//             title='Little Lemon'
//             subtitle="Chicago"
//             desc='We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. Hello my name is Riki Wendri and I am Software Engineer, specialized in React Native'
//             button="Reserve a Table"
//           />
//           <Box>
//             <Image
//                display="flex"
//                sizes={{
//                 base: '100%',
//                 md: '80%',
//                 xl: '50%',
//               }}
//               w={350}
//               h={370}
//               borderRadius={20}
//               src={croffle}
//               alt="croffle"
//             />
//           </Box>
//           </HStack>
//       </Center>
//     )
//   }

//   export default HeroSection;