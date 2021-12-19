import {ButtonGroup, ButtonGroupProps, IconButton} from '@chakra-ui/react'
import * as React from 'react'
import { FaLinkedin, FaTwitter, FaResearchgate} from 'react-icons/fa'

export const SocialMediaLinks = (props: ButtonGroupProps) => (
    <ButtonGroup variant="ghost" color="gray.600" {...props}>
        <IconButton as="a" target="_blank" href="https://uk.linkedin.com/in/shrutiturner" aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px"/>}/>
        <IconButton as="a" target="_blank" href="https://twitter.com/shrutiturner" aria-label="Twitter" icon={<FaTwitter fontSize="20px"/>}/>
        <IconButton as="a" target="_blank" href="https://www.researchgate.net/profile/Shruti-Turner" aria-label="Research Gate" icon={<FaResearchgate fontSize="20px"/>}/>
    </ButtonGroup>
)