import { Box, Button, Container, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Marketplace = () => {
    return (
        <Box style={{ margin: "0 auto" }}>
            <Container
                maxW='container.xl'
                width="100vw"
            >

                <Box display="flex" position="relative" flex="1" alignSelf="stretch">
                    <Box display="flex" flexDirection="column">
                        <Text as="h1" fontSize="32px" fontWeight="bold">Extend Github</Text>
                        <Text as="p" fontSize="20px" fontWeight="medium" color="gray.600">Find tools to improve your workflow</Text>
                        <Button
                            bg="gray.50"
                            border="1px solid"
                            borderColor="gray.400"
                            fontWeight="normal"
                            padding="10.5px 20px"
                            _hover={{ bg: "gray.100" }}
                        >Explore free apps</Button>
                    </Box>
                    <Box position="absolute" right={0}>
                        <Image src='https://github.githubassets.com/images/modules/marketplace/marketplace-illustration-01.svg' width="1060px" alt='Marketplace image' />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Marketplace