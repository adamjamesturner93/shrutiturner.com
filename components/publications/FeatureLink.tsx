import {Box, HStack, HTMLChakraProps, StackProps, useColorModeValue as mode,} from '@chakra-ui/react'
import * as React from 'react'
import {RightArrow} from '.'
import NextLink from 'next/link'

export const FeatureLink: React.FC<{slug: string & HTMLChakraProps<'a'>}> = (props) => {
    const slug = props.slug as string;
    const {children, ...rest} = props as StackProps

    return (
        <NextLink href={`/publication/${slug}`} passHref>
            <HStack align="center" fontSize="md" className="group" cursor="pointer" {...rest}>
                <Box fontWeight="default">{children}</Box>
                <RightArrow
                    color={mode('blue.500', 'blue.400')}
                    fontSize="sm"
                    transition="transform 0.2s"
                    pos="relative"
                    top="2px"
                    _groupHover={{transform: 'translateX(2px)'}}
                />
            </HStack>
        </NextLink>
    )
}