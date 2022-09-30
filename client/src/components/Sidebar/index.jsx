import React from 'react'
import { Box, Button, Input, Text, Image, Divider } from '@chakra-ui/react'
import './Sidebar.css';
import { useLocation } from 'react-router-dom';
import { repoData } from './data'

const Sidebar = () => {

    const location = useLocation();

    return (
        <>
            {
                location.pathname === "/" ? (
                    <Box id='sidebar' width={{xl : "1200px"}}>
                        <div className="sidebar-content">
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                marginBottom="4px"
                            >
                                <Text as="h4" fontWeight="semibold" fontSize="14px">Your repositories</Text>
                                <Button size="sm" backgroundColor="#2da44e" fontSize="12px" color="white" padding="6px 12px" height="auto" _hover={{ backgroundColor: "#2c974b" }}><i className="fa-solid fa-display my-icon"></i>New</Button>
                            </Box>
                            <Box marginBottom="16px">
                                <Input placeholder='Find a repository...' size="sm" borderRadius="5px" fontSize="14px" backgroundColor="gray.50" border="1px solid" borderColor="gray.300" />
                            </Box>
                            <div className='side-list'>
                                {
                                    repoData.map((item, i) => (
                                        <div className='side-list-item' key={i}>
                                            <Image rounded="50%" width="20px" height="20px" src='https://avatars.githubusercontent.com/u/73242451?s=16&v=4' mr="5px" />
                                            <span style={{ fontSize: "14px", marginBottom: "4px" }}>brkckr20/{item.title}</span>
                                        </div>
                                    ))
                                }
                                <Box paddingTop="25px" paddingBottom="25px">
                                    <Text fontSize="12px" color="gray.500" transition="all" _hover={{ color: "#0969da" }} style={{ cursor: "pointer" }} transitionDuration={".3s"}>Show more</Text>
                                </Box>
                                <Box>
                                    <Divider backgroundColor="gray.300" />
                                </Box>
                                <Box paddingTop="10px">
                                    <Text fontWeight="semibold" fontSize="14px" marginBottom="10px">Recent activity</Text>
                                    <Text as="p" fontSize="12px" color="gray.600">
                                        When you take actions across GitHub, we’ll provide links to that activity here.
                                    </Text>
                                </Box>

                            </div>
                        </div>
                    </Box>
                ) : ''
            }
        </>
    )
}

export default Sidebar