import React from 'react'
import { Grid, GridItem, Box } from '@chakra-ui/react'
import RightContent from './RightContent'
const Home = () => {
    return (
        <Box width="100%" padding="20px">
            <Grid
                h='100%'
                templateColumns='repeat(9, 1fr)'
                gap={4}
            >
                <GridItem colSpan="6">
                    <RightContent />
                </GridItem>
                <GridItem colSpan="3" bg='tomato' />
            </Grid>
        </Box>
    )
}

export default Home