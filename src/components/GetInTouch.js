import React from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Square,
  Link,
  Button,
  Center,
} from "@chakra-ui/react";
import { IoCall, IoMail } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaInstagram, FaGit } from "react-icons/fa";

function GetInTouch() {
  return (
    <Flex
      flexDirection="column"
      h={{ base: "", sm: "", md: "100vh", lg: "100vh", xl: "100vh" }}
      id="getintouch"
      w="100vw"
      pr={{ base: 8, sm: 0, md: 60, lg: 60, xl: 60 }}
      pl={{ base: 8, sm: 0, md: 60, lg: 60, xl: 60 }}
      pt={{ base: "75px", md: "80px" }}
    >
      <Box>
        <Heading
          fontSize="70px"
          position="relative"
          float="left"
          fontFamily="Inter"
          fontWeight="700"
          color="brand.300"
          textAlign="left"
        >
          <span style={{ color: "#9f7aea" }}>G</span>et in touch
        </Heading>
      </Box>
      <Flex
        flexWrap="nowrap"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        mt={16}
      >
        <Flex flexDirection="column" flex="0.5" textAlign="left">
          <VStack alignItems="flex-start" spacing={3}>
            <Text
              fontFamily="Ubuntu Mono"
              color="brand.200"
              position="relative"
            >
              &lt;reach out&gt;
            </Text>
            <Text fontFamily="Ubuntu Mono" color="brand.300" pl={5}>
              I'm always looking for new projects
              <br />
              and oppurtunities to work on.
              <br />
              <br />
              Got something on your mind?
              <br />
              Feel free to reach out to me!
            </Text>
            <Text
              fontFamily="Ubuntu Mono"
              color="brand.200"
              position="relative"
              left={{ base: "200px", md: "230px" }}
            >
              &lt;/reach out&gt;
            </Text>
          </VStack>
        </Flex>
        <Flex flexDirection="column" flex="0.5" mt={{ base: "14", md: "0" }}>
          <VStack alignItems="flex-start" spacing={4}>
            <Text
              fontFamily="Ubuntu Mono"
              color="brand.200"
              position="relative"
              float="left"
            >
              &lt;let's work together&gt;
            </Text>
            <Heading
              pl={8}
              fontSize="35px"
              color="brand.300"
              fontFamily="Inter"
              fontWeight="700"
            >
              Contact me
            </Heading>
            <HStack pl={8}>
              <Square>
                <IoMail color="brand.300" opacity="0.5" />
              </Square>
              <Text fontFamily="Ubuntu Mono" color="brand.300" opacity="0.5">
                jug091000@gmail.com
              </Text>
            </HStack>
            <HStack pl={8}>
              <Square>
                <IoCall color="brand.300" opacity="0.5" />
              </Square>
              <Text fontFamily="Ubuntu Mono" color="brand.300" opacity="0.5">
                +91 9099961848
              </Text>
            </HStack>
            <HStack spacing={9} pl={8} color="brand.300" opacity="0.5">
              <Link href='https://github.com/jugal09xx'>
                <FaGithub />
              </Link>
              <Link href='https://www.linkedin.com/in/jugal-lad-48153418b/'>
                <FaLinkedin />
              </Link>
              <Link href='https://instagram.com/this_is_jugxl'>
                <FaInstagram />
              </Link>
            </HStack>
            <Text
              fontFamily="Ubuntu Mono"
              color="brand.200"
              position="relative"
              left={{ base: "120px", md: "80px" }}
            >
              &lt;/let's work together&gt;
            </Text>
          </VStack>
        </Flex>
      </Flex>
      <Center>
        <Link
          _hover={{ textDecoration: "none" }}
          href="mailto:jug091000@gmail.com"
        >
          <Button
            mt={{ base: "14", md: "16" }}
            mb={{ base: "24", md: "" }}
            variant="outline"
            rounded="none"
            border="2px"
            fontFamily="Ubuntu Mono"
            w="150px"
            opacity="0.5"
            _hover={{ opacity: "1" }}
          >
            Say hello 👋
          </Button>
        </Link>
      </Center>
      <Center>
        <Text
          fontFamily="Inter"
          position="absolute"
          bottom="5"
          color="brand.300"
          opacity="0.5"
        >
          ©2021 Designed and Built by Jugal Lad
        </Text>
      </Center>
    </Flex>
  );
}

export default GetInTouch;
