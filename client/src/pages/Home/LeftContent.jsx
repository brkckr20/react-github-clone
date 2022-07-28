import { Alert, AlertIcon, Box, Button, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React from 'react'

const LeftContent = () => {
    return (
        <div>
            <Alert status='warning' rounded="md" border="1" display={"flex"} marginBottom="24px" justifyContent="space-between" padding="25px">
                <AlertIcon />
                <Text as={"span"}>Your GitHub Copilot setup is incomplete. Please go to your settings page and complete your setup.</Text>
                <Button size="sm" fontSize="xs" border="1px" borderColor="gray.400">Complete GitHub Copilot sign up</Button>
            </Alert>
            <Box>
                <Tabs>
                    <TabList>
                        <Tab _selected={{ fontWeight: "bold", borderBottom: "2px", borderColor: "tomato" }} position="relative">Following</Tab>
                        <Tab _selected={{ fontWeight: "bold", borderBottom: "2px", borderColor: "tomato" }}>For you <span className='beta'>Beta</span></Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <p>one!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </div>
    )
}

export default LeftContent