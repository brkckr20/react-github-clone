import { useEffect } from 'react';
import { Box, Button, Container, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import HorizontalFooter from '../../../components/Footer/HorizontalFooter';
import { eventData, exploreTopics } from './data'
import ExploreHeader from '../ExploreHeader'

const Events = () => {

    useEffect(() => {
        document.title = "Topics on Github";
    }, [])

    return (
        <Box width="100%">
            <ExploreHeader />
            <Box paddingY="40px" textAlign="center" backgroundColor="gray.50" borderBottom="1px" borderColor="gray.200">
                <Text as="h1" fontSize="2rem" fontWeight="semibold" color="#24292F">Events</Text>
                <Text as="h2" fontSize="1rem" color="#57606a">Connect with the GitHub community at conferences,  meetups, and <br /> hackathons around the world.</Text>
            </Box>
            <Box>
                <Container width="100vw" className='pull-button-group' maxW='container.lg'>
                    <Grid
                        h='100%'
                        templateColumns='repeat(3, 1fr)'
                        gap={4}
                        marginY="40px"
                    >
                        <GridItem
                            colSpan="2"
                            borderRight="1px solid" borderColor="gray.300">
                            <Text as="h1" fontSize="24px" mb="20px" fontWeight="semibold">GitHub Events</Text>
                            {
                                eventData.map(item => (
                                    <Box display="flex" mb="20px" key={item.id}>
                                        <Box width="450px">
                                            <Image src={item.image} alt={item.title}></Image>
                                        </Box>
                                        <Box ml="24px">
                                            <Text as="a" href='!#' fontSize="20px" color="#0969da" _hover={{ textDecoration: "underline" }}>{item.title}</Text>
                                            <Text as="p" fontSize="14px" color="#57606a">{item.date}</Text>
                                            <Text as="p" fontSize="16px">{item.desc}</Text>
                                            <Button mt="10px" color="#0969da" border="1px solid" borderColor="gray.300">Learn more</Button>
                                        </Box>
                                    </Box>
                                ))
                            }

                        </GridItem>
                        <GridItem colSpan="1">
                            1
                        </GridItem>
                    </Grid>
                </Container>
            </Box >
            <HorizontalFooter />
        </Box >
    )
}

export default Events