import React from 'react'
import { Box, Button, ListItem, UnorderedList } from '@chakra-ui/react'
const Explore = () => {
    return (
        <Box width="100%">
            <Box id='explore-header' width="100%" borderBottom="1px" borderColor="gray.200" style={{ position: "sticky", top: "0" }}>
                <UnorderedList listStyleType="none" display="flex" justifyContent="center" alignItems="center" width="100%" fontSize="14px">
                    <ListItem marginRight="24px" padding="16px 0px">Explore</ListItem>
                    <ListItem marginRight="24px" padding="16px 0px">Topics</ListItem>
                    <ListItem marginRight="24px" padding="16px 0px">Trending</ListItem>
                    <ListItem marginRight="24px" padding="16px 0px">Collections</ListItem>
                    <ListItem marginRight="24px" padding="16px 0px">Events</ListItem>
                    <ListItem marginRight="24px" padding="16px 0px">GitHub Sponsors</ListItem>
                    <Box>
                        <Button padding="8px 16px" fontSize="14px" color="#24292F" marginLeft="60px" backgroundColor="#F6F8FA" border="1px" borderColor="gray.200">Get email updates</Button>
                    </Box>
                </UnorderedList>
            </Box>
        </Box>
    )
}

export default Explore