import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    createIcon,
    Flex,
    Heading,
    HStack,
    Img,
    Text,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import {FeatureLink} from './FeatureLink'
import {links} from './_data'

export const RightArrow = createIcon({
    viewBox: '0 0 11 12',
    d: 'M0 0L4.8 6L0 12H5.78182L10.5818 6L5.78182 0H0Z',
})

export const Publications = () => {
    return (
        <Box as="section" py="24" id={"publications"}>
            <Box maxW={{base: 'xl', md: '7xl'}} mx="auto" px={{base: '6', md: '8'}}>
                <Flex direction={{base: 'column', lg: 'row'}} justify="space-between">
                    <Box flex="1" maxW={{lg: 'xl'}}>
                        <Img
                            htmlWidth="560px"
                            htmlHeight="430px"
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80"
                        />
                    </Box>
                    <Box ms={{lg: '12'}} mt={{base: '12', lg: 0}} flex="1" maxW={{lg: 'xl'}}>
                        <Box maxW={{base: 'xl', lg: 'unset'}}>
                            <Heading mt="4" mb="5" size="2xl" fontWeight="extrabold" lineHeight="1.2">
                                Publication Record
                            </Heading>
                            <Text fontSize="lg" color={mode('gray.600', 'gray.400')}>
                                I am proud to have presented at and been published in some of the major journals in the
                                field of Prosthetics and Orthotics. </Text>
                        </Box>
                        <Accordion mt={8} allowToggle>
                            {links.map((link) => (
                                <AccordionItem key={link.label}>
                                    <h2>
                                        <AccordionButton>
                                            <HStack as="a" align="center" fontSize="md" className="group"
                                                    cursor="pointer">
                                                <Box fontWeight="semibold">{link.label}</Box>
                                                <AccordionIcon/>
                                            </HStack>
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        {link.publications.map(pub =>
                                            <FeatureLink slug={pub.slug} key={pub.label}>
                                                {pub.label}
                                            </FeatureLink>)}
                                    </AccordionPanel>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}