import {HStack, Icon, Link, Stack, StackProps, Text, useColorModeValue} from '@chakra-ui/react'
import * as React from 'react'
import {HiCalendar, HiLink, HiUserGroup, HiDesktopComputer} from 'react-icons/hi'

interface UserInfoProps extends StackProps {
    website: string
    published: string
    authors: string
    format: string
}

export const UserInfo = (props: UserInfoProps) => {
    const {website, published, authors, format, ...stackProps} = props
    return (
        <Stack
            direction={{base: 'column', sm: 'row'}}
            spacing={{base: '1', sm: '6'}}
            mt="4"
            fontSize="sm"
            fontWeight="medium"
            color={useColorModeValue('blue.600', 'blue.300')}
            {...stackProps}
        >
            <HStack>
                <Icon as={HiDesktopComputer}/>
                <Text>{format}</Text>
            </HStack>
            <HStack>
                <Icon as={HiLink}/>
                <Link as='a' href={website} target={'_blank'}>Full paper</Link>
            </HStack>
            <HStack>
                <Icon as={HiCalendar}/>
                <Text>{published}</Text>
            </HStack>
            <HStack>
                <Icon as={HiUserGroup}/>
                <Text>{authors}</Text>
            </HStack>
        </Stack>
    )
}