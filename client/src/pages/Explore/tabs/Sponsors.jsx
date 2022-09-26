import { useEffect } from 'react';
import { Box, Button, Container, Grid, GridItem, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import HorizontalFooter from '../../../components/Footer/HorizontalFooter';
import ExploreHeader from '../ExploreHeader';
import { FaCheck } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { FcInfo } from 'react-icons/fc';
import { BsHeart } from 'react-icons/bs';
import { ecosystem, sponsorsFilter } from './data';

const Sponsors = () => {

    useEffect(() => {
        document.title = "Topics on Github";
    }, [])

    return (
        <Box width="100%">
            <ExploreHeader />
            <Box paddingY="40px" textAlign="center" backgroundColor="gray.50" borderBottom="1px" borderColor="gray.200">
                <Text as="h1" fontSize="2rem" fontWeight="semibold" color="#24292F">Explore GitHub Sponsors</Text>
                <Text as="h2" fontSize="1rem" color="#57606a">Fund the work of developers and projects you depend on.</Text>
            </Box>
            <Box>
                <Container width="100vw" className='pull-button-group' maxW='container.lg'>
                    <Grid
                        h='100%'
                        templateColumns='repeat(5, 1fr)'
                        gap={4}
                        marginY="40px"
                    >
                        <GridItem
                            colSpan="1"
                        >
                            <Text fontSize="20px" fontWeight="semibold" mb="10px">Ecosystem</Text>
                            <UnorderedList listStyleType="none" margin="0 0 0 5px">
                                <ListItem display="flex" alignItems="center" mb="10px" color="#57606a" fontSize="14px"><FaCheck style={{ marginRight: "10px" }} /> All ecosystems</ListItem>
                                {
                                    ecosystem.map((item, i) => {
                                        return <ListItem ml="25px" key={i} mb="10px" color="#57606a" fontSize="14px">{item.title}</ListItem>
                                    })
                                }
                            </UnorderedList>
                            <Text fontSize="20px" fontWeight="semibold" mb="10px">Filters</Text>
                            <UnorderedList listStyleType="none" margin="0 0 0 5px">
                                <ListItem display="flex" alignItems="center" mb="10px" color="#57606a" fontSize="14px"><FaCheck style={{ marginRight: "10px" }} /> Direct dependencies only</ListItem>
                                {
                                    sponsorsFilter.map((item, i) => {
                                        return <ListItem ml="25px" key={i} mb="10px" color="#57606a" fontSize="14px">{item.title}</ListItem>
                                    })
                                }
                            </UnorderedList>
                        </GridItem>
                        <GridItem colSpan="3">
                            <Box display="flex" justifyContent="space-between">
                                <Text fontSize="20px" fontWeight="semibold">Developers who maintain your top dependencies</Text>
                                <Button
                                    padding="5px 8px"
                                    height="auto"
                                    fontSize="12px"
                                    backgroundColor="gray.100"
                                    border="1px solid"
                                    borderColor="gray.400"

                                >Most used</Button>
                            </Box>
                            <Box className='sponsors-wrapper'>
                                <Box className="sponsors-card">
                                    <Box p="18px">
                                        <Box display="flex" alignItems="center">
                                            <AiFillHeart fill='#57606a' size={20} />
                                            <Text ml="10px">You depend on <Text as="span"> 158 repositories they own or maintain</Text></Text>
                                        </Box>
                                        <Box display="flex">
                                            <Box display="flex" alignItems="center">
                                                <Image borderRadius="50%" width="60px" height="60px" src='https://avatars.githubusercontent.com/u/170270?v=4' alt="birkiüç" />
                                                <Box>
                                                    <Text>sindresorhus</Text>
                                                    <Box display="flex">
                                                        <FcInfo />
                                                        <Text>indeedeng and 319 others sponsor, including 30 organizations</Text>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Button>
                                                    <BsHeart />
                                                    <Text as="span">Sponsors</Text>
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </GridItem>
                        <GridItem
                            colSpan="1"
                        >
                            3
                        </GridItem>
                    </Grid>
                </Container>
            </Box >
            <HorizontalFooter />
        </Box >
    )
}

export default Sponsors