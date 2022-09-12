import { useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import { Box, Button, Container, Grid, GridItem, Image, ListItem, SimpleGrid, Text, UnorderedList } from '@chakra-ui/react'
import HorizontalFooter from '../../../components/Footer/HorizontalFooter';
import { exploreTopics, popularTopics } from './data'

const Topics = () => {

    const { path } = useRouteMatch();


    useEffect(() => {
        document.title = "Topics on Github";
    }, [])

    return (
        <Box width="100%">
            <Box id='explore-header' width="100%" borderBottom="1px" borderColor="gray.200" style={{ position: "sticky", top: "0" }}>
                <UnorderedList listStyleType="none" display="flex" justifyContent="center" alignItems="center" width="100%" fontSize="14px" marginLeft={100}>
                    <ListItem marginRight="24px" className='explore-active' padding="16px 0px"><Link to={"/explore"}>Explore</Link></ListItem>
                    <ListItem marginRight="24px" padding="16px 0px"><Link to={`${path}`}>Topics</Link></ListItem>
                    <ListItem marginRight="24px" padding="16px 0px">Trending</ListItem>
                    <ListItem marginRight="24px" padding="16px 0px">Collections</ListItem>
                    <ListItem marginRight="24px" padding="16px 0px">Events</ListItem>
                    <ListItem marginRight="24px" padding="16px 0px">GitHub Sponsors</ListItem>
                    <Box>
                        <Button padding="8px 16px" fontSize="14px" color="#24292F" marginLeft="60px" backgroundColor="#F6F8FA" border="1px" borderColor="gray.200">Get email updates</Button>
                    </Box>
                </UnorderedList>
            </Box>
            <Box paddingY="40px" textAlign="center" backgroundColor="gray.50" borderBottom="1px" borderColor="gray.200">
                <Text as="h1" fontSize="2rem" fontWeight="semibold" color="#24292F">Topics</Text>
                <Text as="h2" fontSize="1rem" color="#57606a">Browse popular topics on GitHub.</Text>
            </Box>
            <Box>
                <Container width="100vw" className='pull-button-group' maxW='container.lg'>
                    <Grid
                        h='100%'
                        templateColumns='repeat(3, 1fr)'
                        gap={4}
                        marginY="40px"
                    >
                        <GridItem colSpan="1">
                            <Box textAlign="center" position="relative" padding="32px" border="1px" borderColor="gray.200" borderRadius="7px" _hover={{ transform: "scale(1.02)", transition: "all .3s ease-in-out" }}>
                                <Box display="flex" justifyContent="center" margin="0 0 16px 0"><Image width="64px" src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png' alt="nodejs"></Image></Box>
                                <Text as="h2" marginTop="4px" fontSize="20px" color="#24292F" >NodeJS</Text>
                                <Text as="p" marginTop="4px" fontSize="15px" color="#57606A" >Node.js is a tool for executing JavaScript in a variety of environments.</Text>
                                <Box position="absolute" right="10px" top="10px">
                                    <svg height="20" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="20" data-view-component="true" className="octicon octicon-star">
                                        <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                                    </svg>
                                </Box>
                            </Box>
                        </GridItem>
                        <GridItem colSpan="1">
                            <Box textAlign="center" position="relative" padding="32px" border="1px" borderColor="gray.200" borderRadius="7px" _hover={{ transform: "scale(1.02)", transition: "all .3s ease-in-out" }}>
                                <Box display="flex" justifyContent="center" margin="0 0 16px 0"><Image width="64px" src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/emacs/emacs.png' alt="emacs"></Image></Box>
                                <Text as="h2" marginTop="4px" fontSize="20px" color="#24292F" >Emacs</Text>
                                <Text as="p" marginTop="4px" fontSize="15px" color="#57606A" >Emacs is an extensible, customizable, free text editor and computing environment.</Text>
                                <Box position="absolute" right="10px" top="10px">
                                    <svg height="20" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="20" data-view-component="true" className="octicon octicon-star">
                                        <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                                    </svg>
                                </Box>
                            </Box>
                        </GridItem>
                        <GridItem colSpan="1">
                            <Box textAlign="center" position="relative" padding="32px" border="1px" borderColor="gray.200" borderRadius="7px" _hover={{ transform: "scale(1.02)", transition: "all .3s ease-in-out" }}>
                                <Box display="flex" justifyContent="center" margin="0 0 16px 0"><Image width="64px" src='https://raw.githubusercontent.com/github/explore/f3e22f0dca2be955676bc70d6214b95b13354ee8/topics/c/c.png' alt="c"></Image></Box>
                                <Text as="h2" marginTop="4px" fontSize="20px" color="#24292F" >C</Text>
                                <Text as="p" marginTop="4px" fontSize="15px" color="#57606A" >C is a general purepos programming  purepos language that first appeared in 1972.</Text>
                                <Box position="absolute" right="10px" top="10px">
                                    <svg height="20" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="20" data-view-component="true" className="octicon octicon-star">
                                        <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                                    </svg>
                                </Box>
                            </Box>
                        </GridItem>
                    </Grid>
                    <Grid
                        h='100%'
                        templateColumns='repeat(3, 1fr)'
                        gap={4}
                        marginY="40px"
                    >
                        <GridItem
                            colSpan={2}
                        >
                            <Text as="h1" fontSize="24px" fontWeight="semibold">All featured topics</Text>
                            {
                                exploreTopics.map((data, i) => (
                                    <Box key={i} display="flex" borderBottom="1px" paddingBottom="25px" marginTop="25px" borderColor="gray.400">
                                        {data.image ? (
                                            <Box>
                                                <Image width="60px" src={data.image} alt='topics image' />
                                            </Box>
                                        ) : (
                                            <>
                                                <Box backgroundColor="#ddf4ff" padding="15px 25px" borderRadius="7px">#</Box>
                                            </>
                                        )}
                                        <Box flex={1} marginLeft="10px">
                                            <Box fontSize="20px" fontWeight="semibold">{data.title}</Box>
                                            <Box fontSize="14px">{data.description}</Box>
                                        </Box>
                                        <Box>
                                            <Box border="1px" borderRadius="5px" display="flex" alignItems="center" borderColor="gray.300" fontSize="12px" backgroundColor="#f6f8fa" padding="3px 12px">
                                                <svg height="12" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="20" data-view-component="true" className="octicon octicon-star">
                                                    <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                                                </svg>
                                                <Text as="span" fontWeight="semibold">Star</Text>
                                            </Box>
                                        </Box>
                                    </Box>
                                ))
                            }

                        </GridItem>
                        <GridItem
                            colSpan={1}
                            paddingX="16px"
                        >
                            <Text as="p" fontSize="16px" fontWeight="semibold">
                                Popular Topics
                            </Text>
                            <SimpleGrid minChildWidth='60px' spacing='5px' mt="5px">
                                {
                                    popularTopics.map((data, index) => (
                                        <Box key={index} textAlign="center" color='#0969DA' bg="#DDF4FF" _hover={{ color: "#DDF4FF", backgroundColor: "#0969DA" }} cursor="pointer" fontWeight="semibold" fontSize="12px" borderRadius="10px" padding="2px 4px">{data.name}</Box>
                                    ))
                                }

                            </SimpleGrid>
                        </GridItem>
                    </Grid>
                </Container>
            </Box >
            <HorizontalFooter />
        </Box >
    )
}

export default Topics