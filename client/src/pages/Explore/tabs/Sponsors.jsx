import { useEffect } from 'react';
import { Box, Container, Grid, GridItem, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import HorizontalFooter from '../../../components/Footer/HorizontalFooter';
import ExploreHeader from '../ExploreHeader'
import { FaCheck } from 'react-icons/fa'

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
                            <Text>Ecosystem</Text>
                            <UnorderedList listStyleType="none" margin="0 0 0 5px">
                                <ListItem display="flex" alignItems="center"><FaCheck style={{ marginRight: "10px" }} /> All ecosystems</ListItem>
                                <ListItem ml="25px">All ecosystems</ListItem>
                            </UnorderedList>
                        </GridItem>
                        <GridItem colSpan="3">
                            2
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