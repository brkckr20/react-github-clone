import { useState } from 'react'
import {
    Box, Flex, Input, InputGroup, InputRightElement, Menu, Button,
    MenuButton,
    MenuList,
    MenuItem,
    Image,
    Divider,
    Text
} from '@chakra-ui/react'
import { FaRegBell, FaPlus, FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './Navbar.css'

function Navbar() {

    const [inputWidth, setInputWidth] = useState(300);

    //const [fade, setFade] = useState(false);

    return (
        <Box bg='#24292f' w='100%' style={{ padding: "16px 32px", lineHeight: 1.5 }} color='white' display="flex" justifyContent="space-between" alignItems={"center"}>

            <Box>
                <Flex justifyContent="center" alignItems="center">
                    <Link to="/">
                        <svg height="32" style={{ fill: "white" }} aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github v-align-middle">
                            <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                    </Link>
                    <InputGroup justifyContent="center" alignItems="center" ml={5}>
                        <Input size='sm' width={inputWidth} onClick={() => setInputWidth(550)} onBlur={() => setInputWidth(300)} placeholder='Search or jump to...' style={{ borderRadius: "5px" }} borderColor="gray.500" />
                        <InputRightElement style={{ position: "relative" }} children={<Slash />} />
                    </InputGroup>
                    <ul className="navbar-ul">
                        <li><Link to="pull">Pull requests</Link></li>
                        <li>Issuee</li>
                        <li>Marketplace</li>
                        <li>Explore</li>
                    </ul>
                </Flex>
            </Box>
            <Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <FaRegBell />
                    <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon={<FaAngleDown />}
                            bg="transparent"
                            _hover={{ backgroundColor: "transparent" }}
                            _active={{ backgroundColor: "transparent" }}
                        >
                            <FaPlus />
                        </MenuButton>
                        <MenuList className='navbar-new-item' color="black">
                            <MenuItem>New repository</MenuItem>
                            <MenuItem>Import repository</MenuItem>
                            <MenuItem>New gist</MenuItem>
                            <MenuItem>New organization</MenuItem>
                            <MenuItem>New project</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton
                            px={0}
                            as={Button}
                            rightIcon={<FaAngleDown />}
                            bg="transparent"
                            _hover={{ backgroundColor: "transparent" }}
                            _active={{ backgroundColor: "transparent" }}
                        >
                            <Image
                                boxSize='1.5rem'
                                borderRadius='full'
                                src='https://placekitten.com/100/100'
                                alt='Fluffybuns the destroyer'
                                mr='12px'
                            />
                        </MenuButton>
                        <MenuList color="black">
                            <MenuItem>Signed in as <Text ml="5px" fontWeight="bold"> brkckr20</Text></MenuItem>
                            <Divider />
                            <MenuItem>
                                <Box display={"flex"} alignItems="center" justifyContent="center" border="1px" borderRadius="5px" padding="4px 7px" borderColor="gray.200" >
                                    <Image marginRight={2} src='https://github.githubassets.com/images/icons/emoji/unicode/1f334.png' width="18px" />
                                    <span>On Vacation</span>
                                </Box>
                            </MenuItem>
                            <Divider />

                            <MenuItem _hover={{ backgroundColor: "blue", color: "white" }}>Your profile</MenuItem>
                            <MenuItem>Your repositories</MenuItem>
                            <MenuItem>Your codespaces</MenuItem>
                            <MenuItem>Your stars</MenuItem>
                            <MenuItem>Your gists</MenuItem>
                            <Divider />
                            <MenuItem>Upgrade</MenuItem>
                            <MenuItem>Feature preview</MenuItem>
                            <MenuItem>Help</MenuItem>
                            <MenuItem>Settings</MenuItem>
                            <Divider />
                            <MenuItem>Sign out</MenuItem>

                        </MenuList>
                    </Menu>
                </Box>
            </Box>
        </Box>
    )
}


function Slash() {
    return (
        <div style={
            {
                padding: "0 5px 0 5px",
                border: "1px solid white",
                borderColor: "#718096",
                color: "#718096",
                position: "absolute",
                top: "7px",
                left: "-23px",
                borderRadius: "4px"
            }
        }>
            /
        </div>
    )
}

export default Navbar