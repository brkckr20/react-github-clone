import { Box, Button, ButtonGroup, Container, Grid, GridItem, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
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
                <Box className='requests-card'>
                    <Box className='request-card-header' display={"flex"} justifyContent="space-between" alignItems="center" backgroundColor="gray.100" padding={17}>
                        <Box display="flex">
                            <Box fontWeight={"bold"}><LinkIcon /> 0 Open</Box>
                            <Box fontWeight={"light"} color="gray.600"><LinkIcon /> 0 Closed</Box>
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
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default PullRequests