import { useEffect } from 'react';
import {
    Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    UnorderedList,
    ListItem,
    Image
} from '@chakra-ui/react'
import HorizontalFooter from '../../../components/Footer/HorizontalFooter';
import { FaAngleDown } from 'react-icons/fa';
import ExploreHeader from '../ExploreHeader';
import { trendingRepositoriesData } from './data'

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
                        <TabList backgroundColor="#f6f8fa" padding="10px" borderBottom="1px solid #d0d7de" borderRadius="5px 5px 0 0" justifyContent="space-between" alignItems="center">
                            <Box display="flex">
                                <Tab _selected={{ color: 'white', bg: '#0969da' }} borderRadius="5px 0 0 5px" borderRight="0" fontSize="14px" padding="5px 16px">Repositories</Tab>
                                <Tab _selected={{ color: 'white', bg: '#0969da' }} borderRadius="0 5px 5px 0" borderLeft="0" fontSize="14px">Developers</Tab>
                            </Box>
                            <Box>
                                <Menu>
                                    <MenuButton as={Button} rightIcon={<FaAngleDown />} fontSize="14px">
                                        <Text as="span" fontWeight="thin">Spoken Language:</Text> Any
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>Download</MenuItem>
                                        <MenuItem>Create a Copy</MenuItem>
                                        <MenuItem>Mark as Draft</MenuItem>
                                        <MenuItem>Delete</MenuItem>
                                        <MenuItem>Attend a Workshop</MenuItem>
                                    </MenuList>
                                </Menu>
                                <Menu>
                                    <MenuButton as={Button} rightIcon={<FaAngleDown />} fontSize="14px">
                                        <Text as="span" fontWeight="thin">Language:</Text> Any
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>Download</MenuItem>
                                        <MenuItem>Create a Copy</MenuItem>
                                        <MenuItem>Mark as Draft</MenuItem>
                                        <MenuItem>Delete</MenuItem>
                                        <MenuItem>Attend a Workshop</MenuItem>
                                    </MenuList>
                                </Menu>
                                <Menu>
                                    <MenuButton as={Button} rightIcon={<FaAngleDown />} fontSize="14px">
                                        <Text as="span" fontWeight="thin">Date Range:</Text> Today
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>Download</MenuItem>
                                        <MenuItem>Create a Copy</MenuItem>
                                        <MenuItem>Mark as Draft</MenuItem>
                                        <MenuItem>Delete</MenuItem>
                                        <MenuItem>Attend a Workshop</MenuItem>
                                    </MenuList>
                                </Menu>
                            </Box>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                {
                                    trendingRepositoriesData.map((item, index) => (
                                        <Box key={index} display="flex" justifyContent="space-between" borderBottom="1px solid #ececec">
                                            <Box>
                                                <Text as="p" display="flex" alignItems="center">
                                                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-repo color-fg-muted mr-2">
                                                        <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                                                    </svg>
                                                    <Box display="flex" color="#0969DA" cursor="pointer" _hover={{ textDecoration: "underline" }} fontSize="20px">
                                                        <Text as="p" marginLeft="5px">{item.title.slice(0, item.title.search("/"))}</Text> <Text as="span" marginLeft="5px" fontWeight="semibold">{item.title.slice(item.title.search("/"))}</Text>
                                                    </Box>
                                                </Text>
                                                <Text as="p" fontSize="14px">{item.description}</Text>
                                                <Box display="flex" position="relative">
                                                    <Text paddingLeft="15px" _after={{ content: `''`, position: "absolute", left: 0, bottom: "6px", width: "10px", height: "10px", backgroundColor: "#3572A5", borderRadius: "50%" }}>Python</Text>
                                                    <Text as="a" href="!#" display="flex" alignItems="center" mx="5px">
                                                        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                                                            <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                                                        </svg>
                                                        <Text as="span" ml="5px">{item.stars}</Text>
                                                    </Text>
                                                    <Text as="a" href="!#" display="flex" alignItems="center" mx="5px">
                                                        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                                                            <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                                                        </svg>
                                                        <Text as="span" ml="5px">{item.forks}</Text>
                                                    </Text>
                                                    <Box>
                                                        <UnorderedList listStyleType="none" display="flex" alignItems="center">
                                                            <Text as="span" mr="4px">Built by : </Text>
                                                            {
                                                                item.builts.map((b, i) => (
                                                                    <ListItem key={i}><Image width="20px" borderRadius="50%" src={b.imageUrl} alt={b.imageUrl} /></ListItem>
                                                                ))
                                                            }
                                                        </UnorderedList>
                                                    </Box>
                                                </Box>

                                            </Box>
                                            <Box>Right</Box>
                                        </Box>
                                    ))
                                }

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