import React from 'react'
import { Box, List, ListItem, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons'

function RightContent() {
    return (
        <Box padding={"30px"}>
            <Box>
                <Text as="p" fontWeight={"bold"}>Latest changes</Text>
                <List display={"block"} marginTop="13px">
                    <ListItem className='right-top-list' position="relative">
                        <Text className='right-top-list-item' textAlign="left" as="p" fontWeight="light" color="gray.500">3 days ago</Text>
                        <Text textAlign="left" as="a" fontWeight="light" color="gray.500">Audit log straming to datadog avaliable as private beta</Text>
                    </ListItem>
                    <ListItem className='right-top-list' position="relative" justifyContent="start">
                        <Text className='right-top-list-item' textAlign="left" as="p" fontWeight="light" color="gray.500">3 days ago</Text>
                        <Text textAlign="left" as="a" fontWeight="light" color="gray.500">Audit log straming to datadog avaliable as private beta</Text>
                    </ListItem>
                    <ListItem className='right-top-list' position="relative" justifyContent="start">
                        <Text className='right-top-list-item' textAlign="left" as="p" fontWeight="light" color="gray.500">3 days ago</Text>
                        <Text textAlign="left" as="a" fontWeight="light" color="gray.500">Audit log straming to datadog avaliable as private beta</Text>
                    </ListItem>
                    <ListItem className='right-top-list' position="relative" justifyContent="start">
                        <Text className='right-top-list-item' textAlign="left" as="p" fontWeight="light" color="gray.500">3 days ago</Text>
                        <Text textAlign="left" as="a" fontWeight="light" color="gray.500">Audit log straming to datadog avaliable as private beta</Text>
                    </ListItem>
                    <ListItem className='right-top-list' position="relative" justifyContent="start">
                        <Text as={"p"} padding="0" textAlign={"left"} paddingTop="25px">
                            <Text color="gray.500" _hover={{ color: "blue", textDecoration: "underline" }} as="a">View changelog <ArrowForwardIcon /> </Text>
                        </Text>
                    </ListItem>

                </List>
            </Box>
            <Box marginTop={6}>
                <Text marginBottom={6} as="p" fontWeight={"bold"}>Explore repositories</Text>
                <Box borderBottom={"1px solid"} borderColor="gray.300" paddingBottom={3} marginBottom={3}>
                    <Text as="p" fontWeight={"bold"}>shivarajnaidu/simple-login-service-with-nodejs-mongodb</Text>
                    <Text as="p" fontWeight="light" fontSize={"15px"} color="gray.600">Simple Login Service Using NodeJs And MongoDB</Text>
                    <Box>
                        <span className='color'>JavaScript</span>
                        <span className='star'>3</span>
                    </Box>
                </Box>
                <Box borderBottom={"1px solid"} borderColor="gray.300" paddingBottom={3} marginBottom={3}>
                    <Text as="p" fontWeight={"bold"}>shivarajnaidu/simple-login-service-with-nodejs-mongodb</Text>
                    <Text as="p" fontWeight="light" fontSize={"15px"} color="gray.600">Simple Login Service Using NodeJs And MongoDB</Text>
                    <Box>
                        <span className='color'>JavaScript</span>
                        <span className='star'>3</span>
                    </Box>
                </Box>
                <Box paddingBottom={3} marginBottom={3}>
                    <Text as="p" fontWeight={"bold"}>shivarajnaidu/simple-login-service-with-nodejs-mongodb</Text>
                    <Text as="p" fontWeight="light" fontSize={"15px"} color="gray.600">Simple Login Service Using NodeJs And MongoDB</Text>
                    <Box>
                        <span className='color'>JavaScript</span>
                        <span className='star'>3</span>
                    </Box>
                </Box>
                <Text marginBottom={6} as="p" _hover={{ color: "blue", cursor: "pointer" }} fontSize={"12"} fontWeight={"light"}>Explore more...</Text>
            </Box>
        </Box>
    )
}

export default RightContent