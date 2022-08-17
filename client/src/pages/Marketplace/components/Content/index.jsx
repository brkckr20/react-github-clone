import React from 'react';
import { Box, Container, Grid, GridItem } from '@chakra-ui/react';
import Left from './Left';
import Right from './Right';

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
            </Container>
        </Box>
    )
}

export default Content