import React from 'react'
import { Box, Button, Input, Text, Image, Divider } from '@chakra-ui/react'
import './Sidebar.css';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {

    const location = useLocation();

    return (
        <>
            {
                location.pathname === "/" ? (
                    <div id='sidebar'>
                        <div className="sidebar-content">
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                marginBottom="4px"
                            >
                                <Text as="h4">Your repositories</Text>
                                <Button size="sm" colorScheme="green" ><i className="fa-solid fa-display my-icon"></i>New</Button>
                            </Box>
                            <Box marginBottom="16px">
                                <Input placeholder='Find a repository...' size="md" />
                            </Box>
                            <div className='side-list'>

                                <div className='side-list-item'>
                                    <Image rounded="50%" width="20px" height="20px" src='https://avatars.githubusercontent.com/u/73242451?s=16&v=4' mr="5px" />
                                    <span>brkckr20/patikanodejs</span>
                                </div>
                                <div className='side-list-item'>
                                    <Image rounded="50%" width="20px" height="20px" src='https://avatars.githubusercontent.com/u/73242451?s=16&v=4' mr="5px" />
                                    <span>brkckr20/patikanodejs</span>
                                </div>
                                <div className='side-list-item'>
                                    <Image rounded="50%" width="20px" height="20px" src='https://avatars.githubusercontent.com/u/73242451?s=16&v=4' mr="5px" />
                                    <span>brkckr20/patikanodejs</span>
                                </div>
                                <div className='side-list-item'>
                                    <Image rounded="50%" width="20px" height="20px" src='https://avatars.githubusercontent.com/u/73242451?s=16&v=4' mr="5px" />
                                    <span>brkckr20/patikanodejs</span>
                                </div>
                                <div className='side-list-item'>
                                    <Image rounded="50%" width="20px" height="20px" src='https://avatars.githubusercontent.com/u/73242451?s=16&v=4' mr="5px" />
                                    <span>brkckr20/patikanodejs</span>
                                </div>
                                <div className='side-list-item'>
                                    <Image rounded="50%" width="20px" height="20px" src='https://avatars.githubusercontent.com/u/73242451?s=16&v=4' mr="5px" />
                                    <span>brkckr20/patikanodejs</span>
                                </div>
                                <div className='side-list-item'>
                                    <Image rounded="50%" width="20px" height="20px" src='https://avatars.githubusercontent.com/u/73242451?s=16&v=4' mr="5px" />
                                    <span>brkckr20/patikanodejs</span>
                                </div>
                                <Box paddingTop="25px" paddingBottom="25px">
                                    <Text fontSize="sm" color="gray.500" transition="all" _hover={{ color: "blue" }} style={{ cursor: "pointer" }} transitionDuration={".3s"}>Show more</Text>
                                </Box>
                                <Box>
                                    <Divider />
                                </Box>
                                <Box paddingTop="25px">
                                    <Text fontWeight="bold" marginBottom="10px">Recent activity</Text>
                                    <Text as="p" fontSize="sm">
                                        When you take actions across GitHub, we’ll provide links to that activity here.
                                    </Text>
                                </Box>

                            </div>
                        </div>
                    </div>
                ) : ''
            }
        </>
    )
}

export default Sidebar