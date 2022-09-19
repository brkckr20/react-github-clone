import { useEffect } from 'react';
import { Box, Container, Grid, GridItem, Image, Text, Button } from '@chakra-ui/react'
import HorizontalFooter from '../../../components/Footer/HorizontalFooter';
import { exploreTopics } from './data'
import ExploreHeader from '../ExploreHeader'

const Topics = () => {



    useEffect(() => {
        document.title = "Topics on Github";
    }, [])

    return (
        <Box width="100%">
            <ExploreHeader />
            <Box paddingY="40px" textAlign="center" backgroundColor="gray.50" borderBottom="1px" borderColor="gray.200">
                <Text as="h1" fontSize="2rem" fontWeight="semibold" color="#24292F">Collections</Text>
                <Text as="h2" fontSize="1rem" color="#57606a">Curated lists and insight into burgeoning industries, topics, and communities.</Text>
                <Box>
                    <Button
                        bg="transparent"
                        mt="10px"
                        fontSize="14px"
                        padding="5px 16px"
                        border="1px solid"
                        borderColor="gray.300"
                        height="auto"
                        color="#0969da"
                        _hover={{ color: "white", backgroundColor: "#0969da" }}
                    >Create a collection</Button>
                </Box>
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
                                <Box display="flex" justifyContent="center" margin="0 0 16px 0"><Image width="64px" src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/collections/learn-to-code/learn-to-code.png' alt="nodejs"></Image></Box>
                                <Text as="h2" marginTop="4px" fontSize="20px" color="#24292F" >Learn to Code</Text>
                                <Text as="p" marginTop="4px" fontSize="15px" color="#57606A" >Resources to help people learn to code</Text>
                                <Box position="absolute" right="10px" top="10px">
                                    <svg height="20" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="20" data-view-component="true" className="octicon octicon-star">
                                        <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                                    </svg>
                                </Box>
                            </Box>
                        </GridItem>
                        <GridItem colSpan="1">
                            <Box textAlign="center" position="relative" padding="32px" border="1px" borderColor="gray.200" borderRadius="7px" _hover={{ transform: "scale(1.02)", transition: "all .3s ease-in-out" }}>
                                <Box display="flex" justifyContent="center" margin="0 0 16px 0"><Image width="64px" src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/collections/pixel-art-tools/pixel-art-tools.png' alt="emacs"></Image></Box>
                                <Text as="h2" marginTop="4px" fontSize="20px" color="#24292F" >Pixel Art Tools</Text>
                                <Text as="p" marginTop="4px" fontSize="15px" color="#57606A" >ECreating pixel art for fun or animated sprites for a game? The digital artist </Text>
                                <Box position="absolute" right="10px" top="10px">
                                    <svg height="20" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="20" data-view-component="true" className="octicon octicon-star">
                                        <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                                    </svg>
                                </Box>
                            </Box>
                        </GridItem>
                        <GridItem colSpan="1">
                            <Box textAlign="center" position="relative" padding="32px" border="1px" borderColor="gray.200" borderRadius="7px" _hover={{ transform: "scale(1.02)", transition: "all .3s ease-in-out" }}>
                                <Box display="flex" justifyContent="center" margin="0 0 16px 0"><Image width="64px" src='https://raw.githubusercontent.com/github/explore/27135c6e8461fcd475e5255c4b8408807e239e8d/collections/made-in-brazil/made-in-brazil.png' alt="c"></Image></Box>
                                <Text as="h2" marginTop="4px" fontSize="20px" color="#24292F" >Made in Brazil</Text>
                                <Text as="p" marginTop="4px" fontSize="15px" color="#57606A" >Open source projects built in or receiving contributions from Brazil</Text>
                                <Box position="absolute" right="10px" top="10px">
                                    <svg height="20" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="20" data-view-component="true" className="octicon octicon-star">
                                        <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                                    </svg>
                                </Box>
                            </Box>
                        </GridItem>
                    </Grid>
                    <Container maxW="container.md">


                        <Grid
                            h='100%'
                            templateColumns='repeat(2, 1fr)'
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
                        </Grid>
                    </Container>
                </Container>
            </Box >
            <HorizontalFooter />
        </Box >
    )
}

export default Topics