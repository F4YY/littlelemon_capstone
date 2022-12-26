import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Center, Avatar, SimpleGrid } from "@chakra-ui/react";
import LogoLLheader from "./images/LogoLLheader.png"

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: rikiwendri@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/F4YY",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/rikiwendri/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const NavBar = () => {
    const NavBarRef = useRef(null);

    useEffect(() => {
        let prevScrollPos = window.scrollY;

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const NavBarElement = NavBarRef.current;
            if (!NavBarElement) {
                return;
            }
            if (prevScrollPos > currentScrollPos) {
                NavBarElement.style.transform = "translateY(0)";
            } else {
                NavBarElement.style.transform = "translateY(-200px)";
            }
            prevScrollPos = currentScrollPos;
        }
        window.addEventListener('scroll', handleScroll)

        return() => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[]);

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

  return (
    <Box
      // display="fixed"
      // top={0}
      // left={0}
      // right={0}
      // translateY={0}
      // transitionProperty="transform"
      // transitionDuration=".3s"
      // transitionTimingFunction="ease-in-out"
      // columns={{ sm: 2, md: 3, lg: 4 }}
      // spacing='10'
      // p='0'
      // textAlign='center'
      // rounded='lg'
      // color='#333333'
      // fontWeight="bold"
      // backgroundColor="azure"
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="azure"
      color='#333333'
      ref={NavBarRef}
    >
      <Center>
        <Box color="#333333" maxWidth="1280px" margin="0 auto">
          <HStack
            px={16}
            py={4}
            justifyContent="space-between"
            align="center"
          >
            <nav>
              <HStack spacing={8}>
                <Avatar
                  src={LogoLLheader} alt=""
                  width={180}
                  name="Logo LL"
              />
                <a href="#Home" onClick={handleClick("Home")}>
                  Home
                </a>
                <a href="#About" onClick={handleClick("About")}>
                  About
                </a>
                <a href="#Specials" onClick={handleClick("Menu")}>
                  Menu
                </a>
                <a href="#Reservation" onClick={handleClick("Reservation")}>
                  Reservation
                </a>
                <a href="#Specials" onClick={handleClick("Order Online")}>
                  Order Online
                </a>
                <a href="#Login" onClick={handleClick("Login")}>
                  Login
                </a>
              </HStack>
            </nav>
          </HStack>
        </Box>
      </Center>
    </Box>
  );
};

export default NavBar;