import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Box, Heading, HStack, VStack } from "@chakra-ui/react";
import LL_Footer from "./images/LL_Footer.png";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: info@littlelemon.com",
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
    icon: faInstagram,
    url: "https://www.instagram.com/fays.dalgona",
  },
  {
    icon: faTwitter,
    url: "https://www.twitter.com",
  },
];

const FootNav = () => {
  return (
      <Box color="lightgrey" maxWidth="auto" padding="1rem 4rem"
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#18181b"
      >
          <footer>
            <HStack
              justifyContent="space-between"
              display="flex"
              flexDirection={{base:"column", sm: "column",md:"row", lg:"row"}}
              flexWrap={{base:"wrap", sm: "column",md:"row", lg:"auto"}}
              gap={8}
            >
              <VStack spacing={2} display="flex">
                <p>Visit our social media</p>
                <HStack display="flex">
                  {socials.map(({icon, url}) => (
                    <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={icon} size="2x" key={url} />
                    </a>
                  ))}
                </HStack>
              </VStack>
              <VStack spacing={1} alignItems="left">
                <Heading as="h1" fontSize={{base: "16px", md: "20px", lg:"22px"}} display={{base:"none",md:"flex",lg:"flex"}} color="azure">
                    Contact :
                </Heading>
                <p>Address : St James Park, Chicago</p>
                <p>Phone Number : 0251-8577-346</p>
                <p>e-mail : info@littlelemon.com</p>
              </VStack>
              <VStack spacing={1} alignItems="left">
                <Heading as="h2" fontSize={{base: "16px", md: "20px", lg:"22px"}} color="azure">
                    Open hours :
                </Heading>
                <p>Monday-Friday : 09:00 - 20:00</p>
                <p>Saturday-Sunday : 11:00 - 22:00</p>
                <p>National Holiday : Close</p>
              </VStack>
              <HStack spacing={2}>
                <p>• Little Lemon ©2022 •</p>
                <img src={LL_Footer} alt="LL_Footer"/>
              </HStack>
            </HStack>
          </footer>
      </Box>
  );
};
export default FootNav;
