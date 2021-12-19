import { Box, Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { BiDirections, BiHappyBeaming } from 'react-icons/bi'
import { FaGraduationCap, FaRegLifeRing } from 'react-icons/fa'
import { Feature } from './Feature'

export const About = () => {
    return (
        <Box as="section" pb="24">
            <Box bg="gray.800" color="white" pt="24" pb="12rem">
                <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
                    <Stack
                        spacing="10"
                        direction={{ base: 'column', lg: 'row' }}
                        align={{ base: 'flex-start', lg: 'center' }}
                        justify="space-between"
                    >
                        <Heading
                            size="2xl"
                            lineHeight="short"
                            fontWeight="extrabold"
                            maxW={{ base: 'unset', lg: '800px' }}
                        >
                            Your Team, Supercharged with outstanding Support & Playbook
                        </Heading>
                    </Stack>
                    <SimpleGrid
                        columns={{ base: 1, md: 2, lg: 4 }}
                        spacing={{ base: '12', md: '8', lg: '2' }}
                        mt={{ base: '12', md: '20' }}
                    >
                        <Feature icon={<BiDirections />} title="Researcher">
                            The purpose of lorem ipsum is to create a natural looking block of text (sentence,
                            paragraph, page, etc.)
                        </Feature>
                        <Feature icon={<BiHappyBeaming />} title="Advocate">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur.
                        </Feature>
                        <Feature icon={<FaGraduationCap />} title="Accessible Technology">
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                        </Feature>
                        <Feature icon={<FaRegLifeRing />} title="Quality of Life">
                            Tristique senectus et netus et malesuada fames ac turpis. Convallis a cras semper
                            auctor.
                        </Feature>
                    </SimpleGrid>
                </Box>
            </Box>
        </Box>
    )
}