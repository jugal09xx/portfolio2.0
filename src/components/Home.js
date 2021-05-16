import React, { useEffect } from "react";
import { Box, Flex, Heading, Image, Link, Square, Text } from "@chakra-ui/react";
import Jugal from "../assets/jugal.png.jpg";
import {VscFoldDown} from 'react-icons/vsc'

function Home() {

  return (
    <Box bg="brand.100" height={{base: '100vh',md:'100vh'}} pb='5vh' id='home' pt={{base:'20', md:'0'}}>
      <Flex
        flexDirection={{base: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row'}}
        flexWrap="nowrap"
        alignItems="center"
        width="100%"
        pr={{base: 8, sm: 30, md: 60, lg: 60, xl: 60 }} pl={{base: 8, sm: 30, md: 60, lg: 60, xl: 60 }}
        h="100%"
      >
        <Box mr={120} textAlign='left' display={{base: 'none', md: 'block'}}>
          <Text position='relative' left={{base: '6', md:'0'}} fontFamily="Ubuntu Mono" color="brand.200">
            &lt;developer and designer&gt;
          </Text>
          <Heading
            fontFamily="Inter"
            fontWeight="700"
            textAlign="right"
            fontSize={{base: '75px', md: '85px'}}
            position="relative"
            left="10"
            color='brand.300'
          >
            Jugal
            <br />
            Lad
          </Heading>
          <Text
            fontFamily="Ubuntu Mono"
            color="brand.200"
            position="relative"
            left="100px"
          >
            &lt;/developer and designer&gt;
          </Text>
        </Box>
        <Box mr={{base: '0', sm: '0', md: '95', lg: '95', xl: '95'}} mt={{base: '14', sm: '20', md: '0', lg: '0', xl: '0'}}>
          <Image
            borderRadius="full"
            boxSize={{base:'200px',md:'230px'}}
            minW={{base:'200px',md:'230px'}}
            filter="grayscale(100%)"
            src={Jugal}
            alt="jugal lad"
            mt={{base: ''}}
            transition='0.2s ease-in-out'
            _hover={{filter: 'grayscale(0)'}}
          />
          <Square position='relative' id='downArrow' top={{base: '400px',md: '180px'}} fontSize='30px' color='brand.200'>
            <Link href='#about'>
              <VscFoldDown/>
            </Link>
          </Square>
        </Box>
        <Box textAlign="left" ml={{base: '7vw', md: '0'}} mt={{base: '6vh', md: 'none'}}>
          <Text fontFamily="Ubuntu Mono" color="brand.200" position='relative' right='8'>
            &lt;about me&gt;
          </Text>
          <Text fontFamily="Ubuntu Mono" fontSize='17px' color="brand.300" w='260px' m={2.5}>
            Welcome to my Portfolio.<br/> Through constant learning and creation, I
            produce efficient applications using modern technologies using the
            best of my capabilities and to the highest standards.
          </Text>
          <Text fontFamily="Ubuntu Mono" color="brand.200" float='right' position='relative'>
            &lt;/about me&gt;
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Home;
