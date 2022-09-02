import React from 'react'
import { Box, Button, Container, Divider, Grid, GridItem, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { Link, useRouteMatch } from "react-router-dom";
import ExploreCard from './ExploreCard';
const Explore = () => {

    const { path } = useRouteMatch();

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
                            <ExploreCard />
                        </GridItem>
                        <GridItem bg='blue.500' colSpan={3}>

                        </GridItem>
                    </Grid>


                </Container>
            </Box>
        </Box>
    )
}

export default Explore