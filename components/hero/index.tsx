import {Box, Flex, Heading, Img, SimpleGrid, Text, useColorModeValue as mode} from "@chakra-ui/react";
import Image from "next/image";
import TedX from "../../images/tedx-logo.webp";
import ISPO from "../../images/ISPO-logo-globe.webp";
import MEP from "../../images/mep-logo.jpg";
import Prosthesis from "../../images/prosthesis-logo.webp";
import ACRM from "../../images/acrm-logo.png";
import * as React from "react";

export const Hero: React.FC = () => (

    <Box as="section" bg={mode('gray.50', 'gray.800')} pt="20" pb="12" overflow="hidden">
        <Box maxW={{base: 'xl', md: '7xl'}} mx="auto" px={{base: '6', md: '8'}}>
            <Flex
                align="flex-start"
                direction={{base: 'column', lg: 'row'}}
                justify="space-between"
                mb="20"
            >
                <Box flex="1" maxW={{lg: 'xl'}} pt="6">
                    <Heading as="h1" size="3xl" mt="8" fontWeight="extrabold">
                        Dr. Shruti Turner
                    </Heading>
                    <Heading as="p" fontWeight="extrabold" color={mode('gray.600', 'gray.400')} mt="5"
                             fontSize="xl">
                        PhD, Researcher and Ravenclaw
                    </Heading>
                    <Heading as="p" fontWeight="medium" color={mode('gray.600', 'gray.400')} mt="5"
                             fontSize="xl">
                        Working with research teams to put people, sustainability and data the
                        core of
                        research and design.
                    </Heading>
                </Box>
                <Box boxSize={{base: '20', lg: '8'}}/>
                <Img
                    pos="relative"
                    marginEnd="-8rem"
                    w="30rem"
                    src="/Profile.jpeg"
                    alt="Shruti Turner profile image"
                />
            </Flex>
            <Box>
                <Text color={mode('gray.600', 'gray.400')} fontWeight="medium">
                    Proudly published in multiple international journals
                </Text>
                <SimpleGrid
                    mt="8"
                    columns={{base: 2, md: 3, lg: 5}}
                    color="gray.500"
                    alignItems="center"
                    spacing={{base: '12', lg: '24'}}
                    fontSize="2xl"
                >
                    <Image src={TedX} alt={"TedX"}/>
                    <Image src={ISPO} alt={"ispo"}/>
                    <Image src={MEP} alt={"Medical Eng"}/>
                    <Image src={Prosthesis} alt={"ispo"}/>
                    <Image src={ACRM} alt={"ispo"}/>
                </SimpleGrid>
            </Box>
        </Box>
    </Box>
)
