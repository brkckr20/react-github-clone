import { Box, Button, Text } from '@chakra-ui/react'
import { TbTelescope } from 'react-icons/tb'

const ExploreCard = () => {
    return (
        <Box margin="24px 0" backgroundColor="#f6f8fa" border="1px solid #d0d7de" borderRadius="6px">
            <Box>
                <Box padding="16px">
                    <Text fontSize="12px" color="#57606A" fontWeight="semibold" display="flex" alignItems="center"><TbTelescope size={15} /> <Text marginLeft="5px">Based on repositories you’ve starred</Text></Text>
                    <Box>
                        <Box marginY="16px" display="flex" alignItems="center">
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo color-fg-muted mr-2">
                                <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                            </svg>
                            <Text fontSize="20px" marginLeft="5px" display="flex" alignItems="center"><Text color="#0969da" marginRight="5px" _hover={{ textDecoration: "underline", cursor: "pointer" }}>developedbyed</Text> / <Text color="#0969da" marginLeft="5px" _hover={{ textDecoration: "underline", cursor: "pointer" }} fontWeight="bold"> vanilla-todo</Text></Text>
                        </Box>
                        <Button>starred button olacak</Button>
                    </Box>
                </Box>
            </Box>
            <Box>
                Card bottom olacak
            </Box>
        </Box>
    )
}

export default ExploreCard