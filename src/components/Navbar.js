import React, { useState } from "react";
import {
  Center,
  Flex,
  Spacer,
  HStack,
  Text,
  Button,
  Heading,
  Link,
  Box,
  VStack,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { RiMenu4Line, RiCloseFill } from "react-icons/ri";
import ReactTypingEffect from "react-typing-effect";
import { Fade } from 'react-awesome-reveal'

function Navbar() {
  //Navbar config
  const [navbarChange, setNavbarchange] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const [homeActive, setHomeActive] = useState(true);
  const [aboutActive, setAboutActive] = useState(false);
  const [projectsActive, setProjectsActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 20) {
      setNavbarchange(true);
    } else {
      setNavbarchange(false);
    }
  };

  const handleActive = () => {
    if (window.scrollY > 600 && window.scrollY < 1200) {
      setAboutActive(true);
      setHomeActive(false);
      setProjectsActive(false);
      setContactActive(false);
    } else if (window.scrollY < 600) {
      setAboutActive(false);
      setHomeActive(true);
      setProjectsActive(false);
      setContactActive(false);
    } else if (window.scrollY > 1200 && window.scrollY < 2300) {
      setAboutActive(false);
      setHomeActive(false);
      setProjectsActive(true);
      setContactActive(false);
    } else if (window.scrollY > 2300) {
      setAboutActive(false);
      setHomeActive(false);
      setProjectsActive(false);
      setContactActive(true);
    }
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("scroll", handleActive);

  function handleMenu() {
    setMenuActive(!menuActive);
  }

  if (menuActive) {
    return (
      <Box
        p={4}
        pr="10vw"
        pl="10vw"
        bg=" rgba(23,25,35,0.6)"
        h="100vh"
        zIndex="105"
        position="fixed"
        w="100vw"
        style={{ backdropFilter: "blur(10px)" }}
      >
    <Fade>
        <HStack>
          <Box textAlign="left">
            <Heading fontFamily="Inter" color="brand.200">
              <span id='initial'>J</span>ugal <span id='initial'>L</span>ad
            </Heading>
            <Text fontFamily="Ubuntu Mono" color="brand.300" opacity="0.7">
              <ReactTypingEffect
                speed="100"
                eraseDelay="1000"
                eraseSpeed="50"
                typingDelay="0"
                text={[
                  "Web Developer 💻",
                  "Open-Source Enthusiast 🚀",
                  "UI/UX Designer 📱",
                  "CSE Undergrad 👨‍🎓",
                  "Team Player 💪",
                ]}
              />
            </Text>
          </Box>
          <Spacer />
          <Center position="absolute" right="7" opacity="1">
            <RiCloseFill fontSize="35px" onClick={handleMenu} color='brand.300' opacity='0.8'/>
          </Center>
        </HStack>
        <VStack spacing={50} mt="50%">
          <Link
            _hover={{ textDecoration: "none" }}
            textDecoration="none"
            href="#home"
            onClick={handleMenu}
          >
            <Heading fontFamily="Inter" fontSize="35px">
              <span id="initial">H</span>ome
            </Heading>
          </Link>
          <Link
            href="#about"
            _hover={{ textDecoration: "none" }}
            textDecoration="none"
            onClick={handleMenu}
          >
            <Heading fontFamily="Inter" fontSize="35px">
              <span id="initial">A</span>bout
            </Heading>
          </Link>
          <Link
            href="#projects"
            _hover={{ textDecoration: "none" }}
            textDecoration="none"
            onClick={handleMenu}
          >
            <Heading fontFamily="Inter" fontSize="35px">
              <span id="initial">P</span>rojects
            </Heading>
          </Link>
          <Link
            href="#getintouch"
            _hover={{ textDecoration: "none" }}
            textDecoration="none"
            onClick={handleMenu}
          >
            <Heading fontFamily="Inter" fontSize="35px">
              <span id="initial">G</span>et In Touch
            </Heading>
          </Link>
        </VStack>
        <Center>
        <Text fontFamily='Inter' position='absolute' bottom='20' color='brand.300' opacity='0.5'>©2021 Designed and Built by Jugal Lad</Text>
      </Center>
      </Fade>
      </Box>
    );
  }

  return (
    <>
      <Flex
        position="absolute"
        zIndex="101"
        w="100%"
        p={4}
        pr="10vw"
        bg="rgba(23,25,35,0.4)"
        pl="10vw"
        flexWrap="nowrap"
        position="fixed"
        display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: "flex",
          xl: "flex",
        }}
        style={{ backdropFilter: "blur(10px)" }}
      >
        <HStack position="absolute" spacing="67px" zIndex="105" pt="3px">
          <Link href="#home" _hover={{ textDecoration: "none" }}>
            <Center
              href="#sec2"
              textDecoration="none"
              _hover={{
                textDecoration: "none",
                color: "brand.200",
                opacity: "1",
                cursor: "pointer",
              }}
              fontFamily="Ubuntu Mono"
              fontSize="18px"
              opacity={homeActive ? "1" : "0.5"}
              color={homeActive ? "brand.200" : ""}
            >
              &lt;home&gt;
            </Center>
          </Link>
          <Link href="#about" _hover={{ textDecoration: "none" }}>
            <Center
              _hover={{ color: "brand.200", opacity: "1", cursor: "pointer" }}
              fontFamily="Ubuntu Mono"
              fontSize="18px"
              color={aboutActive ? "brand.200" : ""}
              opacity={aboutActive ? "1" : "0.5"}
            >
              &lt;about&gt;
            </Center>
          </Link>
          <Link href="#projects" _hover={{ textDecoration: "none" }}>
            <Center
              _hover={{ color: "brand.200", opacity: "1", cursor: "pointer" }}
              fontFamily="Ubuntu Mono"
              fontSize="18px"
              opacity={projectsActive ? "1" : "0.5"}
              color={projectsActive ? "brand.200" : ""}
            >
              &lt;projects&gt;
            </Center>
          </Link>
        </HStack>
        <Spacer />
        <HStack spacing="67px">
          <Center
            fontSize="18px"
            opacity="0.5"
            _hover={{ color: "brand.200", opacity: "1", cursor: "pointer" }}
          >
            <FaGithub />
          </Center>
          <Center
            fontSize="18px"
            opacity="0.5"
            _hover={{ color: "brand.200", opacity: "1", cursor: "pointer" }}
          >
            <FaLinkedin />
          </Center>
          <Center
            fontSize="18px"
            opacity="0.5"
            _hover={{ color: "brand.200", opacity: "1", cursor: "pointer" }}
          >
            <FaInstagram />
          </Center>
          <Center>
            <Link href="#getintouch" _hover={{ textDecoration: "none" }}>
              <Button
                fontFamily="Ubuntu Mono"
                size="md"
                variant="outline"
                borderWidth="2px"
                rounded="none"
                color={contactActive ? "brand.200" : ""}
                opacity={contactActive ? "1" : "0.5"}
                borderColor={contactActive ? "brand.200" : "gray"}
              >
                get in touch
              </Button>
            </Link>
          </Center>
        </HStack>
      </Flex>
      <Flex
        position="absolute"
        zIndex="101"
        w="100%"
        p={4}
        pr="10vw"
        bg="rgba(23,25,35,0.8)"
        pl="10vw"
        flexWrap="nowrap"
        position="fixed"
        display={{
          base: "flex",
          sm: "flex",
          md: "flex",
          lg: "none",
          xl: "none",
        }}
        style={{ backdropFilter: "blur(10px)" }}
      >
        <HStack>
          <Box textAlign="left">
          <Heading fontFamily="Inter" color="brand.200">
              <span id='initial'>J</span>ugal <span id='initial'>L</span>ad
            </Heading>
            <Text fontFamily="Ubuntu Mono" color="brand.300" opacity="0.7">
              <ReactTypingEffect
                speed="100"
                eraseDelay="1500"
                eraseSpeed="50"
                typingDelay="0"
                text={[
                  "Web Developer 💻",
                  "Open-Source Enthusiast 🚀",
                  "UI/UX Designer 📱",
                  "CSE Undergrad 👨‍🎓",
                  "Team Player 💪",
                ]}
              />
            </Text>
          </Box>
          <Spacer />
          <Center position="absolute" right="7">
            <RiMenu4Line fontSize="35px" onClick={handleMenu} color='brand.300' opacity='0.8' />
          </Center>
        </HStack>
      </Flex>
    </>
  );
}

export default Navbar;
