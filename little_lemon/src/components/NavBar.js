import React, { useEffect, useRef } from "react";
import LogoLLheader from "./images/LogoLLheader.png";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Heading, Text, HStack, Image, VStack } from "@chakra-ui/react";

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

  const [toggleMenu, setToggleMenu] = React.useState(false);

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
        <a href="#Home">Home</a>
      </Heading>
      <Heading as="h1" fontSize={{base: "10px", md: "13px", lg:"20px"}} display={{base:"none",md:"flex",lg:"flex"}}>
        <a href="#Specials">Menu</a>
      </Heading>
      <Heading as="h1" fontSize={{base: "10px", md: "13px", lg:"20px"}} display={{base:"none",md:"flex",lg:"flex"}}>
        <a href="#Specials">Order Online</a>
      </Heading>
      <Heading as="h1" fontSize={{base: "10px", md: "13px", lg:"20px"}} display={{base:"none",md:"flex",lg:"flex"}}>
        <a href="#Testimonials">Testimonials</a>
      </Heading>
      <Heading as="h1" fontSize={{base: "10px", md: "13px", lg:"20px"}} display={{base:"none",md:"flex",lg:"flex"}} pr={10}>
        <a href="#About">About</a>
      </Heading>
      <Text as="h1" fontSize={{base: "10px", md: "13px", lg:"20px"}} display={{base:"none",md:"flex",lg:"flex"}} pr={{md:5,lg:12}} shadow="2xl" borderRight="1px solid">
        <a href="#Reservation">Reserve a Table</a>
      </Text>
      <Text as="h1" fontSize={{base: "16px", md: "13px", lg:"20px"}} display={{base:"none",md:"flex",lg:"flex"}}>
        <a href="#Login">Login</a>
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
                  background:"rgb(51,51,51)",
                  justifyContent:"center",
                  alignItems:"center",
                }}
        >
          {/* <img src={bg_overlay} alt="bg_overlay"/> */}
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
                <a href="#Home" onClick={() => setToggleMenu(false)}>Home</a>
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
                <a href="#Specials" onClick={() => setToggleMenu(false)}>Menu</a>
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
                <a href="#Specials" onClick={() => setToggleMenu(false)}>Order Online</a>
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
                <a href="#Testimonials" onClick={() => setToggleMenu(false)}>Testimonials</a>
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
                <a href="#About" onClick={() => setToggleMenu(false)}>About Us</a>
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
                <a href="#Reservation" onClick={() => setToggleMenu(false)}>Reserve a Table</a>
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
                <a href="#Login" onClick={() => setToggleMenu(false)}>Login</a>
              </li>
            </ul>
        </VStack>
      )}
    </HStack>
    //     <nav className="app__navbar"
          // ref={NavBarRef}
          // style={{
          // top:0,
          // left:0,
          // right:0,
          // width:"100%",
          // display:"flex",
          // justifyContent:"space-between",
          // alignItems:"center",
          // backgroundColor:"azure",
          // padding:"1rem 2rem",
          // position:"fixed",
          // translateY:"0",
          // transitionProperty:"transform",
          // transitionDuration:".3s",
          // transitionTimingFunction:"ease-in-out",
          // fontWeight:"bold",
          // fontSize:"18px",
          // color:"rgb(73,94,87)",
    //       }}
    //     >
          // <img src={LogoLLheader} width={170} display="flex" className="app__navbar-logo" alt="app__logo"/>
    //       <ul className="app__navbar-links"
    //           style={{flex: 1,
    //           display:"flex",
    //           justifyContent:"center",
    //           alignItems:"center",
    //           listStyle:"none",
    //            }}
    //           flexDirection={{base:"column",lg:"row"}}
    //       >
    //         <li style={{display:"flex", fontWeight:"bold", fontSize:"larger", marginRight:"3rem"}} className="p__opensans"><a href="#Home" onClick={handleClick("Home")}
    //         >Home</a></li>
    //         <li className="p__opensans"><a href="#Specials"
    //           style={{fontWeight:"bold", fontSize:"larger", marginRight:"3rem"}}
    //         >Menu</a></li>
    //         <li className="p__opensans"><a href="#Specials"
    //           style={{fontWeight:"bold", fontSize:"larger", marginRight:"3rem"}}
    //         >Order Online</a></li>
    //         <li className="p__opensans"><a href="#Testimonials"
    //           style={{fontWeight:"bold", fontSize:"larger", marginRight:"3rem"}}
    //         >Testimonials</a></li>
    //         <li className="p__opensans"><a href="#About"
    //           style={{fontWeight:"bold", fontSize:"larger", marginRight:"3rem"}}
    //         >About</a></li>
    //       </ul>
    //       <div className="app__navbar-login"
    //         style={{
    //           display:"flex",
    //           justifyContent:"flex-end",
    //           alignItems:"center",
    //         }}
    //       >
    //         <a href="#Login" className="p__opensans" style={{fontWeight:"bold", fontSize:"large", marginRight:"1rem"}}
    //           // style={{
    //           //   margin:"0 1rem",
    //           //   textDecoration:"none",
    //           //   transition:".5s ease",
    //           //   borderBottom:"1px solid gold",
    //           // }}
    //         >Login</a>
    //         <div />
    //         <div style={{width:"1px",height:"30px",backgroundColor:"grey", marginRight:"1rem"}}></div>
    //         <a href="#Reservation" className="p__opensans" style={{fontWeight:"bold", fontSize:"large"}}
    //           // style={{
    //           //   margin:"0 1rem",
    //           //   textDecoration:"none",
    //           //   transition:".5s ease",
    //           //   borderBottom:"1px solid gold",
    //           // }}
    //         >Reserve a table</a>
    //       </div>
    //       <div className="app__navbar-smallscreen">
    //         <GiHamburgerMenu color="rgb(51,51,51)" style={{display:{base:"flex",md:"auto",lg:"none"}}} fontSize={27} onClick={() => setToggleMenu(true)} />
    //         {toggleMenu && (
    //           <div className="app__navbar-smallscreen_overlay flex__center slide-bottom"
    //             // style={{
    //             //   position:"fixed",
    //             //   top:"0",
    //             //   left:"0",
    //             //   width:"100%",
    //             //   height:"100vh",
    //             //   transition:".5s ease",
    //             //   flexDirection:"column",
    //             //   zIndex:"5"
    //             // }}
    //           >
    //             <MdOutlineRestaurantMenu fontSize={27} className="overlay__close"
    //               // style={{color:"gold",
    //               //   cursor:"pointer",
    //               //   position:"absolute",
    //               //   top:"20px",
    //               //   right:"20px"}}
    //                 onClick={() => setToggleMenu(false)} />
    //             <ul className="app__navbar-smallscreen_links"
    //               // style={{
    //               //   listStyle:"none"
    //               // }}
    //             >
    //               <li
    //                 // style={{
    //                 //   margin:"2rem",
    //                 //   cursor:"pointer",
    //                 //   color:"gold",
    //                 //   fontSize:"2rem",
    //                 //   textAlign:"center",
    //                 //   fontFamily:"karla"}}
    //               ><a href="#Home" onClick={() => setToggleMenu(false)}>Home</a></li>
    //               <li
    //                 // style={{
    //                 //   margin:"2rem",
    //                 //   cursor:"pointer",
    //                 //   color:"gold",
    //                 //   fontSize:"2rem",
    //                 //   textAlign:"center",
    //                 //   fontFamily:"karla"}}
    //               ><a href="#Specials" onClick={() => setToggleMenu(false)}>Menu</a></li>
    //               <li
    //                 // style={{
    //                 //   margin:"2rem",
    //                 //   cursor:"pointer",
    //                 //   color:"gold",
    //                 //   fontSize:"2rem",
    //                 //   textAlign:"center",
    //                 //   fontFamily:"karla"}}
    //               ><a href="#Specials" onClick={() => setToggleMenu(false)}>Order Online</a></li>
    //               <li
    //                 // style={{
    //                 //   margin:"2rem",
    //                 //   cursor:"pointer",
    //                 //   color:"gold",
    //                 //   fontSize:"2rem",
    //                 //   textAlign:"center",
    //                 //   fontFamily:"karla"}}
    //               ><a href="#Testimonials" onClick={() => setToggleMenu(false)}>Testimonials</a></li>
    //               <li
    //                 // style={{
    //                 //   margin:"2rem",
    //                 //   cursor:"pointer",
    //                 //   color:"gold",
    //                 //   fontSize:"2rem",
    //                 //   textAlign:"center",
    //                 //   fontFamily:"karla"}}
    //               ><a href="#About" onClick={() => setToggleMenu(false)}>About</a></li>
    //               <li
    //                 // style={{
    //                 //   margin:"2rem",
    //                 //   cursor:"pointer",
    //                 //   color:"gold",
    //                 //   fontSize:"2rem",
    //                 //   textAlign:"center",
    //                 //   fontFamily:"karla"}}
    //               ><a href="#Login" onClick={() => setToggleMenu(false)}>Login</a></li>
    //               <li
    //                 // style={{
    //                 //   margin:"2rem",
    //                 //   cursor:"pointer",
    //                 //   color:"gold",
    //                 //   fontSize:"2rem",
    //                 //   textAlign:"center",
    //                 //   fontFamily:"markazi text"}}
    //               ><a href="#Reservation" onClick={() => setToggleMenu(false)}>Reservation</a></li>
    //         </ul>
    //       </div>
    //     )}
    //   </div>
    // </nav>
  );
};

export default NavBar;