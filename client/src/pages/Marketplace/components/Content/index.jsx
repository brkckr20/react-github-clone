import React from 'react';
import { Box, Container, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import Left from './Left';
import Right from './Right';
import HorizontalFooter from '../../../../components/Footer/HorizontalFooter';

const Content = () => {
    return (
        <Box
            bg="gray.100"
            marginTop="-25px"
        >
            <Container
                maxW='container.xl'
                width="100vw"
                paddingTop="40px"
            >
                <Grid
                    h='100%'
                    templateColumns='repeat(7, 1fr)'
                >
                    <GridItem colSpan="2">
                        <Left />
                    </GridItem>
                    <GridItem colSpan="5">
                        <Right />
                    </GridItem>
                </Grid>
                <Box id='bottom-item' display="flex" justifyContent="space-between" backgroundColor="white" padding="40px" boxShadow="xl" marginBottom="40px">
                    <Box display="flex" paddingRight="40px">
                        <Image src="https://github.githubassets.com/images/modules/marketplace/icon-marketplace.svg" alt="market-place-icon" />
                        <Text fontSize="24px" as="h1" marginLeft="24px">List your tool on GitHub Marketplace</Text>
                    </Box>
                    <Box display="flex" paddingLeft="40px">
                        <Box>
                            <Text as="a" href='!#' _hover={{ textDecoration: "underline" }} fontSize="14px" color="blue.400">Read the documentation</Text>
                            <Text as="p" fontSize="14px">Learn how you can build tools to extend and improve developers' workflows.</Text>
                        </Box>
                        <Box>
                            <Text as="a" href='!#' _hover={{ textDecoration: "underline" }} fontSize="14px" color="blue.400">Submit your tool for review</Text>
                            <Text as="p" fontSize="14px">Share your app or GitHub Action with millions of developers.</Text>
                        </Box>
                    </Box>
                </Box>
                <HorizontalFooter />
            </Container>
        </Box>
    )
}

export default Content