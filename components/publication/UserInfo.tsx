import {HStack, Icon, Link, Stack, StackProps, Text, useColorModeValue} from '@chakra-ui/react'
import * as React from 'react'
import {HiBookOpen, HiCalendar, HiLink, HiUserGroup} from 'react-icons/hi'

interface UserInfoProps extends StackProps {
    website: string
    published: string
    authors: string
    format: string
    journal: string
}

export const UserInfo = (props: UserInfoProps) => {
    const {website, published, authors, format, journal, ...stackProps} = props
    return (
        <Stack
            direction={{base: 'column', sm: 'row'}}
            spacing={{base: '1', sm: '6'}}
            mt="2"
            fontSize="sm"
            fontWeight="medium"
            color={useColorModeValue('blue.600', 'blue.300')}
            justifyContent={'center'}
            {...stackProps}
        >
            <HStack>
                <Icon as={HiLink}/>
                <Link as='a' href={website} target={'_blank'}>{format}</Link>
            </HStack>
            <HStack>
                <Icon as={HiBookOpen}/>
                <Text>{journal}</Text>
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