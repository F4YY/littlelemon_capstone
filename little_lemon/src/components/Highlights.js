import TopMenu from "./TopMenu";
import croffle from "./images/croffle.jpg";
import BGimage from "./images/BGimage.jpg";
import open from "./images/open.jpeg";
import { Heading, Center, Image, Button, VStack, HStack } from "@chakra-ui/react";
import FullScreenLL from "./FullScreenLL";

const highlightings = [
  {
    title: "Greek Salad",
    desc:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    getImageSrc: () => require("./images/open.jpeg"),
    price: "S12.99"
  },
  {
    title: "Bruschetta",
    desc:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with chopped tomatoes, oregano and fresh bazil.",
    getImageSrc: () => require("./images/croffle.jpg"),
    price: "S7.99"
  },
  {
    title: "Pasta",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.",
    getImageSrc: () => require("./images/reserved.jpg"),
    price: "S18.99"
  },
];

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

function Highlights() {
  return (
    <FullScreenLL
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Center backgroundColor="white" id="Specials">
      <VStack>
        <HStack spacing={20} verticalAlign="auto">
          <Heading mt={2} mb={3} color="#333333">
            This Weeks Specials!
          </Heading>
          <a href="#Specials" onClick={handleClick("Button Order Online")}>
            <Button color="#333333" fontWeight="bold" backgroundColor="rgb(244,206,20)" w={200} borderRadius={10} id="Order Online">Order Online</Button>
          </a>
        </HStack>
        <HStack spacing={5} mt={5}>
          <VStack borderRadius={16} backgroundColor="rgb(217,217,217)" w="300px">
            <Image
              w={300}
              h={325}
              borderRadius={16}
              src={croffle}
              alt="croffle"
            />
            <TopMenu
            title='Greek Salad'
            subtitle="Order a delivery"
            desc='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
            price="$12.99"
          />
          </VStack>
          <VStack borderRadius={16} backgroundColor="rgb(217,217,217)" w="300px">
            <Image
              w={300}
              h={300}
              borderRadius={16}
              src={BGimage}
              alt="croffle"
            />
          <TopMenu
            title='Bruschetta'
            subtitle="Order a delivery"
            desc='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with chopped tomatoes, oregano and fresh bazil.'
            price="$7.99"
          />
          </VStack>
          <VStack borderRadius={16} backgroundColor="rgb(217,217,217)" w="300px">
            <Image
              w={300}
              h={300}
              borderRadius={16}
              src={open}
              alt="croffle"
            />
          <TopMenu
            title='Pasta'
            subtitle="Order a delivery"
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare and Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.'
            price="$18.99"
          />
          </VStack>
          {/* <Box
            spacing={8}
            direction='row'
            display='flex'
            mt='5'
            alignItems='center'
            gridGap={8}
            gridTemplateColumns="repeat(2,minmax(0,1fr))"
          >
            {highlightings.map((highlighting) => (
              <TopMenu
                imageSrc={highlighting.getImageSrc()}
                title={highlighting.title}
                price={highlighting.price}
                desc={highlighting.desc}
                subtitle={highlighting.subtitle}
              />
            ))}
          </Box> */}
        </HStack>
      </VStack>
    </Center>
    </FullScreenLL>
)}

export default Highlights;