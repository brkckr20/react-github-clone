import React from 'react'
import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={6} marginTop="40px" paddingBottom={"40px"}>
            <GridItem colSpan={2} w='100%' h='10'>
                <Box fontSize={30} display="flex" alignItems={"center"}>
                    <FaGithub />
                    <Text marginLeft="10px" fontSize={15} as={"span"}>2022 GitHub, Inc</Text>
                </Box>
            </GridItem>
            <GridItem colSpan={3} w='100%' h='10'>
                <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                    <GridItem colSpan={1} w='100%' h='10'>
                        <Box fontSize={"sm"} color="gray.500" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Blog</Box>
                        <Box fontSize={"sm"} color="gray.500" _hover={{ textDecoration: "underline", cursor: "pointer" }}>About</Box>
                        <Box fontSize={"sm"} color="gray.500" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Shop</Box>
                        <Box fontSize={"sm"} color="gray.500" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Contact GitHub</Box>
                        <Box fontSize={"sm"} color="gray.500" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Pricing</Box>
                    </GridItem>
                    <GridItem colSpan={1} w='100%' h='10'>
                        <Box fontSize={"sm"} color="gray.500" _hover={{ textDecoration: "underline", cursor: "pointer" }}>API</Box>
                        <Box fontSize={"sm"} color="gray.500" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Training</Box>
                        <Box fontSize={"sm"} color="gray.500" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Status</Box>
                        <Box fontSize={"sm"} color="gray.500" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Security</Box>
                    </GridItem>
                    <GridItem colSpan={1} w='100%' h='10'>
                        <Box fontSize={"sm"} color="gray.500" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Terms</Box>
                        <Box fontSize={"sm"} color="gray.500" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Privacy</Box>
                        <Box fontSize={"sm"} color="gray.500" _hover={{ textDecoration: "underline", cursor: "pointer" }}>Docs</Box>
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    )
}

export default Footer