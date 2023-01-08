import React, { useEffect, useRef } from "react";
import LogoLLheader from "./images/LogoLLheader.png";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Heading, Text, HStack, Image, VStack } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

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

  const [toggleMenu, setToggleMenu] = React.useState(false);
  const navigate = useNavigate();

  return (
    <HStack
      ref={NavBarRef}
      top='0'
      left='0'
      right='0'
      width='100%'
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="azure"
      padding="0.5rem 2.5rem"
      position="fixed"
      translateY="0"
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      fontWeight="bold"
      fontSize="18px"
      color="rgb(73,94,87)"
      zIndex={5}
    >
      <Image src={LogoLLheader} alt="app__logo" display="flex" width={{base:"150px",md:"160px",lg:"180px"}}/>
      <Heading as="h1" fontSize={{base: "10px", md: "13px", lg:"20px"}} display={{base:"none",md:"flex",lg:"flex"}}>
        <a href="#Home" onClick={handleClick("Home")}>
          Home
        </a>
      </Heading>
      <Heading as="h1" fontSize={{base: "10px", md: "13px", lg:"20px"}} display={{base:"none",md:"flex",lg:"flex"}}>
        <a href="#Menu"  onClick={handleClick("Menu")}>
          Menu
        </a>
      </Heading>
      <Heading as="h1" fontSize={{base: "10px", md: "13px", lg:"20px"}} display={{base:"none",md:"flex",lg:"flex"}}>
        <a href="#OrderOnline" onClick={handleClick("Menu")}>
          Order Online
        </a>
      </Heading>
      <Heading as="h1" fontSize={{base: "10px", md: "13px", lg:"20px"}} display={{base:"none",md:"flex",lg:"flex"}}>
        <a href="#Testimonials-section" onClick={handleClick("Testimonials")}>
          Testimonials
        </a>
      </Heading>
      <Heading as="h1" fontSize={{base: "10px", md: "13px", lg:"20px"}} display={{base:"none",md:"flex",lg:"flex"}} pr={10}>
        <a href="#About-section" onClick={handleClick("About")}>
          About
        </a>
      </Heading>
      <Text as="h1" fontSize={{base: "10px", md: "13px", lg:"20px"}} display={{base:"none",md:"flex",lg:"flex"}} pr={{md:5,lg:12}} shadow="2xl" borderRight="1px solid">
        <a href="#Reservation-section" onClick={handleClick("Reservation")}>
          Reserve a Table
        </a>
      </Text>
      <Text as="h1" fontSize={{base: "16px", md: "13px", lg:"20px"}} display={{base:"none",md:"flex",lg:"flex"}}>
        <a href="#Login-section" onClick={handleClick("Login")}>
          Login
        </a>
      </Text>
      <Heading display={{base:"flex",md:"none",lg:"none"}}>
        <GiHamburgerMenu color="rgb(73,94,87)"  fontSize={27} onClick={() => setToggleMenu(true)} />
      </Heading>
      {toggleMenu && (
        <VStack
          style={{
                  position:"fixed",
                  top:"0",
                  left:"0",
                  width:"100%",
                  height:"100vh",
                  transition:".5s ease",
                  flexDirection:"column",
                  zIndex:"5",
                  background:"black",
                  justifyContent:"center",
                  alignItems:"center",
                }}
        >
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close"
            style={{color:"azure",
                    cursor:"pointer",
                    position:"absolute",
                    top:"15px",
                    right:"40px"}}
                    onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links"
                  style={{
                    display:"fixed",
                    listStyle:"none",
                  }}
            >
              <li
                style={{
                margin:"2rem",
                cursor:"pointer",
                color:"azure",
                fontSize:"2rem",
                textAlign:"center",
                fontFamily:"calibri"
              }}
              >
                <a href="#Home-section" onClick={()=>{
                  setToggleMenu(false);
                  navigate("/Home")
                }}
                >
                  Home
                </a>
              </li>
              <li
                style={{
                margin:"2rem",
                cursor:"pointer",
                color:"azure",
                fontSize:"2rem",
                textAlign:"center",
                fontFamily:"calibri"}}
              >
                <a href="#Menu-section" onClick={() => {
                  setToggleMenu(false);
                  navigate("/Menu")
                  }}
                >
                  Menu
                </a>
              </li>
              <li
                style={{
                margin:"2rem",
                cursor:"pointer",
                color:"azure",
                fontSize:"2rem",
                textAlign:"center",
                fontFamily:"calibri"}}
              >
                <a href="#Menu-section" onClick={() => {
                  setToggleMenu(false);
                  navigate("/Menu")
                  }}
                >
                  Order Online
                </a>
              </li>
              <li
                style={{
                margin:"2rem",
                cursor:"pointer",
                color:"azure",
                fontSize:"2rem",
                textAlign:"center",
                fontFamily:"calibri"}}
              >
                <a href="#Testimonials-section" onClick={() => {
                  setToggleMenu(false);
                  navigate("/Testimonials")
                  }}
                >
                  Testimonials
                </a>
              </li>
              <li
                style={{
                margin:"2rem",
                cursor:"pointer",
                color:"azure",
                fontSize:"2rem",
                textAlign:"center",
                fontFamily:"calibri"}}
              >
                <a href="#About-section" onClick={() => {
                  setToggleMenu(false);
                  navigate("/About")
                  }}
                >
                  About Us
                </a>
              </li>
              <li
                style={{
                margin:"2rem",
                cursor:"pointer",
                color:"azure",
                fontSize:"2rem",
                textAlign:"center",
                fontFamily:"calibri"}}
              >
                <a href="#Reservation-section" onClick={() => {
                  setToggleMenu(false);
                  navigate("/Reservation")
                  }}
                >
                  Reserve a Table
                </a>
              </li>
              <li
                style={{
                margin:"2rem",
                cursor:"pointer",
                color:"azure",
                fontSize:"2rem",
                textAlign:"center",
                fontFamily:"calibri"}}
              >
                <a href="#Login-section" onClick={() => {
                  setToggleMenu(false);
                  navigate("/Login")
                  }}
                >
                  Login
                </a>
              </li>
            </ul>
        </VStack>
      )}
    </HStack>
  );
};

export default NavBar;