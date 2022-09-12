import React, { useEffect } from 'react'
import { Box, Button, Container, Divider, Grid, GridItem, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { Link, useRouteMatch } from "react-router-dom";
import ExploreCard from './ExploreCard';
import { exploreCardData, trendingRepositoryData, trendingDeveloperData } from './data'
import { TbTelescope } from 'react-icons/tb'
import HorizontalFooter from '../../components/Footer/HorizontalFooter'


const Explore = () => {

    const { path } = useRouteMatch();

    useEffect(() => {
        document.title = "Explore GitHub";


    }, [])

    return (
        <Box width="100%">
            <Box id='explore-header' width="100%" borderBottom="1px" borderColor="gray.200" style={{ position: "sticky", top: "0" }}>
                <UnorderedList listStyleType="none" display="flex" justifyContent="center" alignItems="center" width="100%" fontSize="14px" marginLeft={100}>
                    <ListItem marginRight="24px" className='explore-active' padding="16px 0px"><Link to={path}>Explore</Link></ListItem>
                    <ListItem marginRight="24px" padding="16px 0px"><Link to={`${path}/topics`}>Topics</Link></ListItem>
                    <ListItem marginRight="24px" padding="16px 0px">Trending</ListItem>
                    <ListItem marginRight="24px" padding="16px 0px">Collections</ListItem>
                    <ListItem marginRight="24px" padding="16px 0px">Events</ListItem>
                    <ListItem marginRight="24px" padding="16px 0px">GitHub Sponsors</ListItem>
                    <Box>
                        <Button padding="8px 16px" fontSize="14px" color="#24292F" marginLeft="60px" backgroundColor="#F6F8FA" border="1px" borderColor="gray.200">Get email updates</Button>
                    </Box>
                </UnorderedList>
            </Box>
            <Box id="explore-content">
                <Container width="100vw" maxW='container.xl'>
                    <Grid templateColumns='repeat(12, 1fr)' gap={6}>
                        <GridItem colSpan={3} marginTop={"-40px"} bg="white" position="relative" style={{ zIndex: 10000 }}>
                            <Box className='explore-content-card' border="1px" borderColor="blackAlpha.300" borderRadius="md">
                                <Box display={"flex"} justifyContent="center" marginTop="16px"><Image rounded="full" border="1px" borderColor="blackAlpha.300" src='https://avatars.githubusercontent.com/u/73242451?s=100&v=4' alt='github explore'></Image></Box>
                                <Box padding="16px" textAlign="center" >
                                    <Text as="h2" fontSize="24px" fontWeight="bold" >Burak Çakır</Text>
                                    <Text as="h3" fontSize="20px" color="gray.600">brkckr20</Text>
                                </Box>
                                <Divider />
                                <Text as="h3" marginLeft="16px" marginTop="16px" marginBottom="16px" fontSize="16px" fontWeight="bold" color="#0969DA" _hover={{ textDecoration: "underline", cursor: "pointer" }}>0 starred topics</Text>
                                <Divider />
                                <Text as="h3" marginLeft="16px" marginTop="16px" marginBottom="16px" fontSize="16px" fontWeight="bold" color="#0969DA" _hover={{ textDecoration: "underline", cursor: "pointer" }}>10 starred repositories</Text>

                            </Box>
                        </GridItem>
                        <GridItem colSpan={6} padding="24px 16px">
                            <Text as="h3" fontSize="20px" fontWeight="semibold" color="#57606a">Here's what we found based on your interests...</Text>
                            {
                                exploreCardData.map((item, i) => (
                                    <ExploreCard key={i} item={item} />
                                ))
                            }
                        </GridItem>
                        <GridItem colSpan={3}>
                            <Box
                                padding="24px 16px"
                            >
                                <Box id='trending-repo' border="1px solid" borderColor="gray.300" borderRadius="6px">
                                    <Box display="flex" alignItems="center" padding="16px" backgroundColor="#F6F8FA" borderRadius="6px 6px 0 0 " borderBottom="1px" borderColor="gray.300">
                                        <TbTelescope size={15} />
                                        <Text as="span" marginLeft="8px" fontSize="14px" cursor="pointer" _hover={{ textDecoration: "underline" }}><Text as="span" fontWeight="semibold">Trending repositories</Text> today</Text>
                                    </Box>

                                    {
                                        trendingRepositoryData.map((item, index) => (
                                            <Box key={index} padding="16px" borderBottom="1px" borderColor="gray.300">
                                                <Box display="flex" justifyContent="space-between">
                                                    <Box display="flex" alignItems="center" fontSize="16px">
                                                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-repo color-fg-muted mr-2">
                                                            <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                                                        </svg>
                                                        <Text as="p" marginLeft="4px">
                                                            <Text as="span" color="#0969da">{item.repoName.slice(0, item.repoName.search("/"))}</Text> / <Text as="span" color="#0969da" fontWeight="semibold">{item.repoName.slice(item.repoName.search("/")).replace("/", "")}</Text>
                                                        </Text>
                                                    </Box>
                                                    <Box display="flex" alignItems="center" fontSize="14px">
                                                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-star mt-1 mr-1">
                                                            <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                                                        </svg>
                                                        <Text as="span" marginLeft="4px">{item.star}</Text>
                                                    </Box>
                                                </Box>
                                                <Text as="span" fontSize="12px">{item.title}</Text>
                                            </Box>
                                        ))
                                    }


                                    <Box padding="16px">
                                        <Text as="p" fontSize="12px" color="#0969da" cursor="pointer" _hover={{ textDecoration: "underline" }} display="flex" alignItems="center">
                                            See more trending repositories
                                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-chevron-right ml-1">
                                                <path fillRule="evenodd" d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"></path>
                                            </svg>
                                        </Text>
                                    </Box>
                                </Box>

                            </Box>
                            <Box
                                padding="24px 16px"
                            >
                                <Box id='trending-repo' border="1px solid" borderColor="gray.300" borderRadius="6px">
                                    <Box display="flex" alignItems="center" padding="16px" backgroundColor="#F6F8FA" borderRadius="6px 6px 0 0 " borderBottom="1px" borderColor="gray.300">
                                        <TbTelescope size={15} />
                                        <Text as="span" marginLeft="8px" fontSize="14px" cursor="pointer" fontWeight="semibold" _hover={{ textDecoration: "underline" }}>Trending developers</Text>
                                    </Box>

                                    {
                                        trendingDeveloperData.map((item, index) => (
                                            <Box key={index} padding="16px" borderBottom="1px" borderColor="gray.300" display="flex">
                                                <Box width="51px" height="51px" marginRight="8px">
                                                    <Image rounded="full" border="1px" borderColor="blackAlpha.300" src={item.imageUrl} alt={item.name} />
                                                </Box>
                                                <Box marginLeft="8px">
                                                    <Text as="p" fontSize="16px" fontWeight="semibold" color="#0969da" cursor="pointer" _hover={{ textDecoration: "underline" }}>{item.name}</Text>
                                                    <Text as="p" fontSize="16px" color="#57606a">{item.username}</Text>
                                                    <Box display="flex" alignItems="center" marginTop="5px">
                                                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" fill="#57606a" version="1.1" width="16" data-view-component="true" className="octicon octicon-repo color-fg-muted mr-2">
                                                            <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                                                        </svg>
                                                        <Text as="p" marginLeft="10px" fontSize="12px" color="#57606a" cursor="pointer" _hover={{ textDecoration: "underline" }}>{item.repoName}</Text>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        ))
                                    }


                                    <Box padding="16px">
                                        <Text as="p" fontSize="12px" color="#0969da" cursor="pointer" _hover={{ textDecoration: "underline" }} display="flex" alignItems="center">
                                            See more trending developers
                                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-chevron-right ml-1">
                                                <path fillRule="evenodd" d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"></path>
                                            </svg>
                                        </Text>
                                    </Box>
                                </Box>

                            </Box>
                        </GridItem>
                    </Grid>


                </Container>
            </Box>
            <HorizontalFooter />
        </Box >
    )
}

export default Explore