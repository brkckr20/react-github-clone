import { Box, Button, ButtonGroup, Container, Grid, GridItem, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { ChevronDownIcon, LinkIcon, SearchIcon } from '@chakra-ui/icons';

const PullRequests = () => {

    return (
        <Box style={{ margin: "0 auto" }}>
            <Container width="100vw" className='pull-button-group' maxW='container.lg'>
                <Grid templateColumns='repeat(11, 1fr)' gap={0} paddingTop="24px">
                    <GridItem
                        w='100%'
                        colSpan={5}

                    >
                        <ButtonGroup>
                            <Button fontWeight="light" _focus={{ backgroundColor: "#0969da", color: "white" }} style={{ margin: "0", borderRadius: "10px 0 0 10px" }} size='sm' border={"1px"} bg={"transparent"} borderColor="gray.200">Created</Button>
                            <Button fontWeight="light" _focus={{ backgroundColor: "#0969da", color: "white" }} style={{ margin: "0" }} borderRadius="0" size='sm' border={"1px"} borderColor="gray.200" bg={"transparent"}>Assigned</Button>
                            <Button fontWeight="light" _focus={{ backgroundColor: "#0969da", color: "white" }} style={{ margin: "0" }} borderRadius="0" size='sm' border={"1px"} borderColor="gray.200" bg={`transparent`}>Mentioned</Button>
                            <Button fontWeight="light" _focus={{ backgroundColor: "#0969da", color: "white" }} style={{ margin: "0", borderRadius: "0 10px 10px 0" }} size='sm' border={"1px"} borderColor="gray.200" bg={`transparent`}>Review requests</Button>
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
            </Container>
        </Box>
    )
}

export default PullRequests