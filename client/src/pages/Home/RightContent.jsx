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
        </Box>
    )
}

export default RightContent