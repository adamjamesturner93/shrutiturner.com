import {Avatar, AvatarProps, Box, Flex, FlexProps, Link, useColorModeValue} from '@chakra-ui/react'
import * as React from 'react'
import {BsCaretLeftFill} from "react-icons/bs";
import NextLink from 'next/link'

interface CardWithAvatarProps extends FlexProps {
    avatarProps: AvatarProps
}

export const CardWithAvatar = (props: CardWithAvatarProps) => {
    const { avatarProps, children, ...rest } = props
    return (
        <Flex
            position="relative"
            direction="column"
            align={{ sm: 'center' }}
            maxW="2xl"
            mx="auto"
            bg={useColorModeValue('white', 'gray.700')}
            shadow={{ sm: 'base' }}
            rounded={{ sm: 'lg' }}
            px={{ base: '6', md: '8' }}
            pb={{ base: '6', md: '8' }}
            {...rest}
        >
            <NextLink href="/#publications" passHref>
                <Link
                    display="inline-flex"
                    alignItems="center"
                    color={useColorModeValue('blue.600', 'blue.400')}
                    fontSize="sm"
                    fontWeight="semibold"
                    mb="4"
                    rounded="lg"
                    px="2"
                    py="1"
                    _hover={{bg: useColorModeValue('gray.50', 'gray.700')}}
                    alignSelf={"flex-start"}
                >
                    <Box as={BsCaretLeftFill} fontSize="xs" marginEnd="1"/>
                    Back to Publications
                </Link>
            </NextLink>
            <Avatar
                mt="-10"
                borderWidth="6px"
                borderColor={'white'}
                size="2xl"
                background={'white'}

                {...avatarProps}
            />
            {children}
        </Flex>
    )
}