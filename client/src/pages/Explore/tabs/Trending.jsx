import { useEffect } from 'react';
import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import HorizontalFooter from '../../../components/Footer/HorizontalFooter';
import ExploreHeader from '../ExploreHeader'

const Trending = () => {



    useEffect(() => {
        document.title = "Topics on Github";
    }, [])

    return (
        <Box width="100%">
            <ExploreHeader />
            <Box paddingY="40px" textAlign="center" backgroundColor="gray.50" borderBottom="1px" borderColor="gray.200">
                <Text as="h1" fontSize="2rem" fontWeight="semibold" color="#24292F">Topics</Text>
                <Text as="h2" fontSize="1rem" color="#57606a">Browse popular topics on GitHub.</Text>
            </Box>
            <Box>
                <Container width="100vw" className='pull-button-group' maxW='container.lg'>
                    <Tabs variant='unstyled' marginTop="20px" border="1px solid #d0d7de" borderRadius="5px">
                        <TabList backgroundColor="#f6f8fa" padding="10px" borderBottom="1px solid #d0d7de" borderRadius="5px 5px 0 0">
                            <Tab _selected={{ color: 'white', bg: '#0969da' }} borderRadius="5px 0 0 5px" borderRight="0" fontSize="14px" padding="5px 16px">Repositories</Tab>
                            <Tab _selected={{ color: 'white', bg: '#0969da' }} borderRadius="0 5px 5px 0" borderLeft="0" fontSize="14px">Developers</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <p>one!</p>
                            </TabPanel>
                            <TabPanel>
                                <p>two!</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Container>
            </Box >
            <HorizontalFooter />
        </Box >
    )
}

export default Trending