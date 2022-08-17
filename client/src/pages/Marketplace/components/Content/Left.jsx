import React from 'react'
import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { types } from './itemData'
const Left = () => {
    return (
        <Box>
            <Text as="p" fontSize="16px" letterSpacing={1}>Types</Text>
            <UnorderedList listStyleType="none">
                {
                    types.map((type, index) => (
                        <ListItem _hover={{ color: "#3498db", cursor: "pointer" }} key={index} >{type.typeName}</ListItem>
                    ))
                }
            </UnorderedList>
        </Box>
    )
}

export default Left