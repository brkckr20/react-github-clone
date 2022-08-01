import React from 'react'
import { Grid, GridItem, Box } from '@chakra-ui/react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
const Home = () => {
    return (
        <Box width="100%" padding="20px" backgroundColor="gray.50">
            <Grid
                h='100%'
                templateColumns='repeat(9, 1fr)'
                gap={4}
            >
                <GridItem colSpan="6">
                    <LeftContent />
                </GridItem>
                <GridItem colSpan="3">
                    <RightContent />
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Home