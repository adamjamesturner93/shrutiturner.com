import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import fs from 'fs';
import path from 'path'
import matter from "gray-matter";
import {serialize} from "next-mdx-remote/serialize";
import {MDXRemote, MDXRemoteSerializeResult} from "next-mdx-remote";
import {Box, Heading, Text, useColorModeValue, VStack} from "@chakra-ui/react";
import {CardWithAvatar} from "../../components/publication/CardWithAvatar";
import {CardContent} from "../../components/publication/CardContent";
import {UserInfo} from "../../components/publication/UserInfo";
import * as React from "react";
import Head from 'next/Head'

type FrontMatter = {
    title: string
    date: string
    doi: string
    thumbnail: string
    url: string
    authors: string
    format: string
}

type Props = {
    frontMatter: any | FrontMatter,
    mdxSource: MDXRemoteSerializeResult
}

export const getStaticPaths: GetStaticPaths = async () => {
    const files = fs.readdirSync(path.join('publications'))
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.mdx', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
    const slug = params?.slug as string;
    const markdownWithMeta = fs.readFileSync(path.join('publications',
        slug + '.mdx'), 'utf-8')
    const {data: frontMatter, content} = matter(markdownWithMeta)
    const mdxSource = await serialize(content)
    return {
        props: {
            frontMatter,
            mdxSource
        }
    }
}

export const Publication: NextPage<Props> = ({frontMatter, mdxSource}) => {
    const {title, doi, date, thumbnail, url, authors, format} = frontMatter as FrontMatter;
    return (
        <React.Fragment>
            <Head>
                <title>Shruti Turner | {title}</title>
                <meta name="description" content={title}/>
            </Head>
            <Box as="section" pt="20" pb="12" position="relative">
                <Box position="absolute" inset="0" height="32" bg="blue.600"/>
                <CardWithAvatar
                    maxW="4xl"
                    avatarProps={{
                        src: thumbnail,
                        name: 'ISPO',
                    }}
                >
                    <CardContent>
                        <Heading size="lg" fontWeight="extrabold" letterSpacing="tight">
                            {title}
                        </Heading>
                        <Text color={useColorModeValue('gray.600', 'gray.400')}>
                            <strong>DOI:</strong>{doi}
                        </Text>
                        <UserInfo format={format} website={url} published={date} authors={authors}/>
                        <MDXRemote {...mdxSource} components={{Heading, Text, VStack}}/>
                    </CardContent>
                </CardWithAvatar>
            </Box>
        </React.Fragment>
    )
}

export default Publication