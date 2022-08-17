import { Box, Button, Container, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Content from './components/Content'

const Marketplace = () => {
    return (

        <Box>
            <Box style={{ margin: "0 auto", width: "100vw" }}>
                <Container
                    maxW='container.xl'
                    width="100vw"
                >

                    <Box display="flex" position="relative" flex="1" alignSelf="stretch">
                        <Box display="flex" flexDirection="column" height="300px" justifyContent="center">
                            <Text as="h1" fontSize="32px" fontWeight="bold">Extend Github</Text>
                            <Text as="p" fontSize="20px" fontWeight="medium" color="gray.600" marginBottom="30px">Find tools to improve your workflow</Text>
                            <Button
                                bg="gray.50"
                                border="1px solid"
                                borderColor="gray.400"
                                fontWeight="normal"
                                padding="24px 20px"
                                _hover={{ bg: "gray.100" }}
                                width="fit-content"
                            >Explore free apps</Button>
                        </Box>
                        <Box position="absolute" right={0} top="-150px">
                            <Image src='https://github.githubassets.com/images/modules/marketplace/marketplace-illustration-01.svg' width="1060px" alt='Marketplace image' />
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Content />
        </Box>
    )
}

export default Marketplace