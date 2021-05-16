import React from "react";
import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  HStack,
  Tag,
} from "@chakra-ui/react";

function About() {
  return (
    <Box h={{base: '', sm: '', md: '100vh', lg: '100vh', xl:'100vh' }} w='100vw' id="about" pr={{base: 0, sm: 0, md: 60, lg: 60, xl: 60 }} pl={{base: 0, sm: 0, md: 60, lg: 60, xl: 60 }} pt="80px">
      <Flex flexDirection="column">
        <Box>
          <Heading
            fontSize="70px"
            position="relative"
            float='left'
            ml={{base: '8', md: 'none'}}
            fontFamily="Inter"
            fontWeight="700"
            color="brand.300"
          >
            <span style={{ color: "#9f7aea" }}>A</span>bout
          </Heading>
        </Box>
        <Box m={{base: '8',sm: '8',md: '16',lg: '16',xl: '16'}} ml={{base: 9,md: 'none'}}>
          <Flex flexDirection={{base: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' }} flexWrap="nowrap">
            <Box flex="0.5">
              <VStack spacing="20px" alignItems="flex-start">
                <Text
                  fontFamily="Ubuntu Mono"
                  color="brand.200"
                  position="relative"
                  right={{base: "7px", md: "45px"}}
                >
                  &lt;experience&gt;
                </Text>
                <Box textAlign="left" pl={{base: 5, md: 0}}>
                  <Heading fontSize="33px" fontFamily="Inter" fontWeight="700">
                    2019 - now
                  </Heading>
                  <Text
                    fontFamily="Ubuntu Mono"
                    color="brand.300"
                    opacity="0.5"
                  >
                    B.Tech Computer Science
                    <br />
                    undergraduate at SRMIST
                  </Text>
                </Box>
                <Box textAlign="left" pl={{base: 5, md: 0}}>
                  <Heading fontSize="33px" fontFamily="Inter" fontWeight="700">
                    2020 - now
                  </Heading>
                  <Text
                    fontFamily="Ubuntu Mono"
                    color="brand.300"
                    opacity="0.5"
                  >
                    MERN Stack Developer at Microsoft
                    <br />
                    Learn Student Ambassadors SRMIST
                  </Text>
                </Box>
                <Box textAlign="left" pl={{base: 5, md: 0}}>
                  <Heading fontSize="33px" fontFamily="Inter" fontWeight="700">
                    2019 - now
                  </Heading>
                  <Text
                    fontFamily="Ubuntu Mono"
                    color="brand.300"
                    opacity="0.5"
                  >
                    Creatives Lead at Microsoft Learn
                    <br />
                    Student Ambassadors SRMIST
                  </Text>
                </Box>
                <Text
                  fontFamily="Ubuntu Mono"
                  color="brand.200"
                  position="relative"
                  left="200px"
                >
                  &lt;/experience&gt;
                </Text>
              </VStack>
            </Box>
            <Box flex="0.5" mt={{base: '20',sm:'20', md: '0', lg: '0', xl: '0'}}>
              <VStack spacing="15px" alignItems="left" pl={{base: 0, sm: 0, md: 10, lg: 10, xl: 10 }}>
                <Text
                  fontFamily="Ubuntu Mono"
                  color="brand.200"
                  position="relative"
                  right={{base: "140px", md: "190px"}}
                >
                  &lt;skills&gt;
                </Text>
                <Text
                  textAlign="left"
                  fontFamily="Inter"
                  color="brand.300"
                  fontWeight="700"
                  opacity="0.5"
                  position="relative"
                  fontSize="20px"
                >
                  Development
                </Text>
                <HStack spacing="15px">
                  <Tag
                    size={"lg"}
                    fontFamily="inter"
                    fontWeight="700"
                    variant="outline"
                    rounded="none"
                  >
                    React.js
                  </Tag>
                  <Tag
                    size={"lg"}
                    fontFamily="inter"
                    fontWeight="700"
                    variant="outline"
                    rounded="none"
                  >
                    Node.js
                  </Tag>
                  <Tag
                    size={"lg"}
                    fontFamily="inter"
                    fontWeight="700"
                    variant="outline"
                    rounded="none"
                  >
                    JavaScript
                  </Tag>
                </HStack>
                <HStack spacing="15px">
                  <Tag
                    size={"lg"}
                    fontFamily="inter"
                    fontWeight="700"
                    variant="outline"
                    rounded="none"
                  >
                    Express.js
                  </Tag>
                  <Tag
                    size={"lg"}
                    fontFamily="inter"
                    fontWeight="700"
                    variant="outline"
                    rounded="none"
                  >
                    MongoDB
                  </Tag>
                  <Tag
                    size={"lg"}
                    fontFamily="inter"
                    fontWeight="700"
                    variant="outline"
                    rounded="none"
                  >
                    APIs
                  </Tag>
                </HStack>
                <HStack spacing="15px">
                  <Tag
                    size={"lg"}
                    fontFamily="inter"
                    fontWeight="700"
                    variant="outline"
                    rounded="none"
                  >
                    CSS3
                  </Tag>
                  <Tag
                    size={"lg"}
                    fontFamily="inter"
                    fontWeight="700"
                    variant="outline"
                    rounded="none"
                  >
                    HTML5
                  </Tag>
                  <Tag
                    size={"lg"}
                    fontFamily="inter"
                    fontWeight="700"
                    variant="outline"
                    rounded="none"
                  >
                    Git
                  </Tag>
                  <Tag
                    size={"lg"}
                    fontFamily="inter"
                    fontWeight="700"
                    variant="outline"
                    rounded="none"
                  >
                    jQuery
                  </Tag>
                </HStack>
                <HStack spacing="15px">
                  <Tag
                    size={"lg"}
                    fontFamily="inter"
                    fontWeight="700"
                    variant="outline"
                    rounded="none"
                  >
                    Python
                  </Tag>
                  <Tag
                    size={"lg"}
                    fontFamily="inter"
                    fontWeight="700"
                    variant="outline"
                    rounded="none"
                  >
                    C/C++
                  </Tag>
                  <Tag
                    size={"lg"}
                    fontFamily="inter"
                    fontWeight="700"
                    variant="outline"
                    rounded="none"
                  >
                    Chakra UI
                  </Tag>
                </HStack>
                <Text
                  textAlign="left"
                  fontFamily="Inter"
                  color="brand.300"
                  fontWeight="700"
                  opacity="0.5"
                  position="relative"
                  fontSize="20px"
                >
                  Design
                </Text>
                <HStack spacing="15px">
                  <Tag
                    size={"lg"}
                    fontFamily="inter"
                    fontWeight="700"
                    variant="outline"
                    rounded="none"
                  >
                    Figma
                  </Tag>
                  <Tag
                    size={"lg"}
                    fontFamily="inter"
                    fontWeight="700"
                    variant="outline"
                    rounded="none"
                  >
                    Adobe XD
                  </Tag>
                  <Tag
                    size={"lg"}
                    fontFamily="inter"
                    fontWeight="700"
                    variant="outline"
                    rounded="none"
                  >
                    Illustrator
                  </Tag>
                </HStack>
                <HStack spacing="15px">
                  <Tag
                    size={"lg"}
                    fontFamily="inter"
                    fontWeight="700"
                    variant="outline"
                    rounded="none"
                  >
                    Photoshop
                  </Tag>
                  <Tag
                    size={"lg"}
                    fontFamily="inter"
                    fontWeight="700"
                    variant="outline"
                    rounded="none"
                  >
                    Vegas Pro
                  </Tag>
                </HStack>
                <Text
                  fontFamily="Ubuntu Mono"
                  color="brand.200"
                  position="relative"
                  left="140px"
                >
                  &lt;/skills&gt;
                </Text>
              </VStack>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default About;
