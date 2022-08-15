import { useState } from 'react';
import { Box, Button, ButtonGroup, Container, Grid, GridItem, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { ChevronDownIcon, LinkIcon, SearchIcon, SunIcon } from '@chakra-ui/icons';
import { useEffect } from 'react';


const PullRequests = () => {

    const [selectedTab, setSelectedTab] = useState("Created");
    const [protipText, setProtipText] = useState("Exclude your own issues with -")

    const changeTab = (text, protipText) => {
        setSelectedTab(text);
        setProtipText(protipText);
    }


    useEffect(() => {
        /* console.log("Secilen Tab : ", selectedTab) */
    }, [selectedTab])

    return (
        <Box style={{ margin: "0 auto" }}>
            <Container width="100vw" className='pull-button-group' maxW='container.lg'>
                <Grid templateColumns='repeat(11, 1fr)' gap={0} paddingTop="24px">
                    <GridItem
                        w='100%'
                        colSpan={5}

                    >
                        <ButtonGroup>
                            <Button onClick={() => changeTab("Created", "Exclude your own issues with -")} bg={`${selectedTab === 'Created' ? '#0969da' : 'transparent'}`} color={`${selectedTab === 'Created' ? 'white' : ''}`} fontWeight="light" _focus={{ backgroundColor: "#0969da", color: "white" }} style={{ margin: "0", borderRadius: "10px 0 0 10px" }} size='sm' border={"1px"} borderColor="gray.200">Created</Button>
                            <Button onClick={() => changeTab("Assigned", "What’s not been updated in a month:")} fontWeight="light" _focus={{ backgroundColor: "#0969da", color: "white" }} style={{ margin: "0" }} borderRadius="0" size='sm' border={"1px"} borderColor="gray.200" bg={"transparent"}>Assigned</Button>
                            <Button onClick={() => changeTab("Mentioned", "Mix and match filters to narrow down what you’re looking for.")} fontWeight="light" _focus={{ backgroundColor: "#0969da", color: "white" }} style={{ margin: "0" }} borderRadius="0" size='sm' border={"1px"} borderColor="gray.200" bg={`transparent`}>Mentioned</Button>
                            <Button onClick={() => changeTab("Review requests", "Ears burning? Get @brkckr20 mentions with mentions:brkckr20.")} fontWeight="light" _focus={{ backgroundColor: "#0969da", color: "white" }} style={{ margin: "0", borderRadius: "0 10px 10px 0" }} size='sm' border={"1px"} borderColor="gray.200" bg={`transparent`}>Review requests</Button>
                        </ButtonGroup>

                    </GridItem>
                    <GridItem
                        w='100%'
                        colSpan={6}
                    >
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<SearchIcon color='gray.300' />}
                                height={"100%"}
                            />
                            <Input _focus={{ backgroundColor: "#fff" }} backgroundColor={"gray.100"} size="sm" type='text' placeholder='Search all issues' borderRadius={6} />
                        </InputGroup>
                    </GridItem>

                </Grid>
                <Box className='requests-card' marginTop="20px" borderRadius="10px" borderColor="gray.300" >
                    <Box className='request-card-header' borderRadius="10px 10px 0 0" borderBottom="1px" borderColor="gray.300" display={"flex"} justifyContent="space-between" alignItems="center" backgroundColor="gray.100" padding={2}>
                        <Box display="flex">
                            <Box fontWeight={"bold"}><LinkIcon /> 0 Open</Box>
                            <Box fontWeight={"light"} marginLeft="20px" color="gray.600"><LinkIcon /> 0 Closed</Box>
                        </Box>
                        <Box>
                            <Menu>
                                <MenuButton backgroundColor="transparent" as={Button} rightIcon={<ChevronDownIcon />}>
                                    Visibility
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
                                <MenuButton backgroundColor="transparent" as={Button} rightIcon={<ChevronDownIcon />}>
                                    Organization
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
                                <MenuButton backgroundColor="transparent" as={Button} rightIcon={<ChevronDownIcon />}>
                                    Sort
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
                    </Box>
                    <Box id="card-body" minHeight="400px" display="flex" alignItems="center" flexDirection="column" justifyContent="center" border="1px" borderColor="gray.300" borderTop="0">
                        <Box className='custom-circle' marginBottom="20px" width="25px" height="25px" border="1px" borderColor="blackAlpha.700" borderRadius="50%" position="relative"></Box>
                        <Text as="h1" fontSize="24px" marginBottom="20px" fontWeight="bold">No results matched your search.</Text>
                        <Text as="h5" fontSize="16px">You could search <Text as="a" href='#' color="blue" _hover={{ textDecoration: "underline" }}>all of GitHub</Text> or try an <Text as="a" href='#' color="blue" _hover={{ textDecoration: "underline" }}>advanced search.</Text></Text>
                    </Box>
                </Box>
                <Box textAlign="center" marginTop="16px">
                    <Text as="p" fontSize="16px"><SunIcon /><Text as={"span"} fontWeight="bold" fontSize="15px"> ProTip!</Text> <Text as="span" color="gray.600">{protipText}</Text><Text as={"a"} color="blue.600">author:brkckr20.</Text></Text>
                </Box>
                <Box display="flex" borderTop="1px" borderColor="gray.300" marginTop="40px" paddingTop="40px">
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <svg fill='#888a8d' aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" className="octicon octicon-mark-github">
                            <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                        <Box as="span" marginLeft="10px" fontSize="12px" color="gray.600">© 2022 GitHub, Inc.</Box>
                    </Box>
                    <ul className='pulls-footer'>
                        <li><Text as="span" color="blue.400" _hover={{ textDecoration: "underline", cursor: "pointer" }} >Terms</Text></li>
                        <li><Text as="span" color="blue.400" _hover={{ textDecoration: "underline", cursor: "pointer" }} >Privacy</Text></li>
                        <li><Text as="span" color="blue.400" _hover={{ textDecoration: "underline", cursor: "pointer" }} >Security</Text></li>
                        <li><Text as="span" color="blue.400" _hover={{ textDecoration: "underline", cursor: "pointer" }} >Status</Text></li>
                        <li><Text as="span" color="blue.400" _hover={{ textDecoration: "underline", cursor: "pointer" }} >Docs</Text></li>
                        <li><Text as="span" color="blue.400" _hover={{ textDecoration: "underline", cursor: "pointer" }} >Contact GitHub</Text></li>
                        <li><Text as="span" color="blue.400" _hover={{ textDecoration: "underline", cursor: "pointer" }} >Pricing</Text></li>
                        <li><Text as="span" color="blue.400" _hover={{ textDecoration: "underline", cursor: "pointer" }} >API</Text></li>
                        <li><Text as="span" color="blue.400" _hover={{ textDecoration: "underline", cursor: "pointer" }} >Training</Text></li>
                        <li><Text as="span" color="blue.400" _hover={{ textDecoration: "underline", cursor: "pointer" }} >Blog</Text></li>
                        <li><Text as="span" color="blue.400" _hover={{ textDecoration: "underline", cursor: "pointer" }} >About</Text></li>
                    </ul>
                </Box>
            </Container>
        </Box>
    )
}

export default PullRequests