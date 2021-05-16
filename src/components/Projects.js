import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Spacer,
  Square,
  Link,
  Tooltip
} from "@chakra-ui/react";
import axios from "axios";
import {
  IoFolder,
  IoStar,
  IoLogoGithub,
  IoGlobeOutline,
} from "react-icons/io5";

function Projects() {
  const baseUrl = "https://api.github.com/users/jugal09xx/repos";

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => {
        console.log(res.data);
        setRepos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Flex w='100vw' flexDirection="column" id="about" pr={{base: 8, sm: 30, md: 60, lg: 60, xl: 60 }} pl={{base: 8, sm: 30, md: 60, lg: 60, xl: 60 }} pt="80px" id='projects'>
      <Box>
        <Heading
          fontSize="70px"
          position="relative"
          float="left"
          fontFamily="Inter"
          fontWeight="700"
          color="brand.300"
        >
          <span style={{ color: "#9f7aea" }}>P</span>rojects
        </Heading>
      </Box>
      <SimpleGrid mt={16} mb={16} spacing={7} columns={{base: '1', sm: '2', md: '3', lg: '3', xl: '3'}}>
        {repos.map((repo) => (
          <Box
            bg="brand.400"
            h="200px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p={3}
            textAlign="left"
          >
            <HStack fontSize="22px" spacing={4}>
              <Square color="brand.200">
                <IoFolder />
              </Square>
              <Spacer />
              <Tooltip label='This is a starred project' hasArrow>
              <Square
                fontSize="19px"
                color="brand.200"
                display={repo.forks > 0 ? "block" : "none"}
              >
                <IoStar />
              </Square>
              </Tooltip>
              <Square color="rgba(255,255,255,0.5)">
                <Link href={repo.html_url} target='_blank'>
                  <IoLogoGithub />
                </Link>
              </Square>
              <Square color="rgba(255,255,255,0.5)">
                <IoGlobeOutline />
              </Square>
            </HStack>
            <Heading
              color="brand.300"
              fontSize="22px"
              fontFamily="Inter"
              fontWeight="700"
            >
              {repo.name}
            </Heading>
            <Text
              key={repo.id}
              fontFamily="Ubuntu Mono"
              color="brand.300"
              opacity="0.5"
              lineHeight="1.2"
            >
              {repo.description.toString().slice(0, 60)}
            </Text>
            <Text
              fontFamily="Inter"
              fontWeight="500"
              fontSize="13px"
              color="brand.200"
            >
              {repo.created_at.toString().slice(0, 10)}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
}

export default Projects;
