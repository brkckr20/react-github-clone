import {
    Alert,
    AlertIcon,
    Box,
    Button,
    Text,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Image,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'
import React from 'react'
import { FaAngleDown } from 'react-icons/fa'

const LeftContent = () => {
    return (
        <div>
            <Alert status='warning' rounded="md" border="1" display={"flex"} marginBottom="24px" justifyContent="space-between" padding="25px">
                <AlertIcon />
                <Text width={"100%"} as={"span"}>Your GitHub Copilot setup is incomplete. Please go to your settings page and complete your setup.</Text>
                <Button size="sm" fontSize="xs" width={"300px"} border="1px" borderColor="gray.400">Complete GitHub Copilot sign up</Button>
            </Alert>
            <Box>
                <Tabs>
                    <TabList>
                        <Tab _selected={{ fontWeight: "bold", borderBottom: "2px", borderColor: "tomato" }} position="relative">Following</Tab>
                        <Tab _selected={{ fontWeight: "bold", borderBottom: "2px", borderColor: "tomato" }}>For you <span className='beta'>Beta</span></Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Box display={"flex"}>
                                <Box><Image border={"1px"} borderColor="gray.500" width="32px" rounded="full" src='https://avatars.githubusercontent.com/u/2500557?s=64&v=4' /></Box>
                                <Box>
                                    <Box display={"flex"} width="100%" justifyContent="space-between" alignItems="center"><Text as="p" paddingLeft={"10px"}><span style={{ fontWeight: "bold" }}>tayfunerbilen</span> created a repository <span style={{ fontWeight: "bold" }}>tayfunerbilen/instagram-react-web-clone</span></Text><Text as="span" color="gray.400" paddingLeft={"10px"} fontSize="sm">8 days ago</Text></Box>
                                    <Box
                                        display="flex"
                                        justifyContent={"space-between"}
                                        padding="20px" margin={"10px"} borderColor="blackAlpha.200" borderRadius="lg" borderWidth="1px" backgroundColor={"white"}>
                                        <Box>
                                            <Text fontSize="md" fontWeight={"bold"}>tayfunerbilen/instagram-react-web-clone</Text>
                                            <Text color={"gray.500"}>Derste birlikte geliştirdiğimiz instagram clonu - henüz bitmedi -</Text>
                                            <Text as="span" color={"gray.500"} fontSize="xs">Updated Jul 28</Text>
                                        </Box>
                                        <Box>
                                            <Menu>
                                                <MenuButton as={Button} rightIcon={<FaAngleDown />}>
                                                    Starred
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
                            </Box>
                            <Box display={"flex"}>
                                <Box><Image border={"1px"} borderColor="gray.500" width="32px" rounded="full" src='https://avatars.githubusercontent.com/u/2500557?s=64&v=4' /></Box>
                                <Box>
                                    <Box display={"flex"} width="100%" justifyContent="space-between" alignItems="center"><Text as="p" paddingLeft={"10px"}><span style={{ fontWeight: "bold" }}>tayfunerbilen</span> created a repository <span style={{ fontWeight: "bold" }}>tayfunerbilen/instagram-react-web-clone</span></Text><Text as="span" color="gray.400" paddingLeft={"10px"} fontSize="sm">8 days ago</Text></Box>
                                    <Box
                                        display="flex"
                                        justifyContent={"space-between"}
                                        padding="20px" margin={"10px"} borderColor="blackAlpha.200" borderRadius="lg" borderWidth="1px" backgroundColor={"white"}>
                                        <Box>
                                            <Text fontSize="md" fontWeight={"bold"}>tayfunerbilen/instagram-react-web-clone</Text>
                                            <Text color={"gray.500"}>Derste birlikte geliştirdiğimiz instagram clonu - henüz bitmedi -</Text>
                                            <Text as="span" color={"gray.500"} fontSize="xs">Updated Jul 28</Text>
                                        </Box>
                                        <Box>
                                            <Menu>
                                                <MenuButton as={Button} rightIcon={<FaAngleDown />}>
                                                    Starred
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
                            </Box>
                            <Box display={"flex"}>
                                <Box><Image border={"1px"} borderColor="gray.500" width="32px" rounded="full" src='https://avatars.githubusercontent.com/u/2500557?s=64&v=4' /></Box>
                                <Box>
                                    <Box display={"flex"} width="100%" justifyContent="space-between" alignItems="center"><Text as="p" paddingLeft={"10px"}><span style={{ fontWeight: "bold" }}>tayfunerbilen</span> created a repository <span style={{ fontWeight: "bold" }}>tayfunerbilen/instagram-react-web-clone</span></Text><Text as="span" color="gray.400" paddingLeft={"10px"} fontSize="sm">8 days ago</Text></Box>
                                    <Box
                                        display="flex"
                                        justifyContent={"space-between"}
                                        padding="20px" margin={"10px"} borderColor="blackAlpha.200" borderRadius="lg" borderWidth="1px" backgroundColor={"white"}>
                                        <Box>
                                            <Text fontSize="md" fontWeight={"bold"}>tayfunerbilen/instagram-react-web-clone</Text>
                                            <Text color={"gray.500"}>Derste birlikte geliştirdiğimiz instagram clonu - henüz bitmedi -</Text>
                                            <Text as="span" color={"gray.500"} fontSize="xs">Updated Jul 28</Text>
                                        </Box>
                                        <Box>
                                            <Menu>
                                                <MenuButton as={Button} rightIcon={<FaAngleDown />}>
                                                    Starred
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
                            </Box>
                            <Box display={"flex"}>
                                <Box><Image border={"1px"} borderColor="gray.500" width="32px" rounded="full" src='https://avatars.githubusercontent.com/u/2500557?s=64&v=4' /></Box>
                                <Box>
                                    <Box display={"flex"} width="100%" justifyContent="space-between" alignItems="center"><Text as="p" paddingLeft={"10px"}><span style={{ fontWeight: "bold" }}>tayfunerbilen</span> created a repository <span style={{ fontWeight: "bold" }}>tayfunerbilen/instagram-react-web-clone</span></Text><Text as="span" color="gray.400" paddingLeft={"10px"} fontSize="sm">8 days ago</Text></Box>
                                    <Box
                                        display="flex"
                                        justifyContent={"space-between"}
                                        padding="20px" margin={"10px"} borderColor="blackAlpha.200" borderRadius="lg" borderWidth="1px" backgroundColor={"white"}>
                                        <Box>
                                            <Text fontSize="md" fontWeight={"bold"}>tayfunerbilen/instagram-react-web-clone</Text>
                                            <Text color={"gray.500"}>Derste birlikte geliştirdiğimiz instagram clonu - henüz bitmedi -</Text>
                                            <Text as="span" color={"gray.500"} fontSize="xs">Updated Jul 28</Text>
                                        </Box>
                                        <Box>
                                            <Menu>
                                                <MenuButton as={Button} rightIcon={<FaAngleDown />}>
                                                    Starred
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
                            </Box>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </div>
    )
}

export default LeftContent