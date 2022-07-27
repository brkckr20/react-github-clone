import { Alert, AlertIcon, Button, Text } from '@chakra-ui/react'
import React from 'react'

const LeftContent = () => {
    return (
        <div>
            <Alert status='warning' display={"flex"} justifyContent="space-between" padding="25px">
                <AlertIcon />
                <Text as={"span"}>Your GitHub Copilot setup is incomplete. Please go to your settings page and complete your setup.</Text>
                <Button size="sm" fontSize="xs" border="1px" borderColor="gray.400">Complete GitHub Copilot sign up</Button>
            </Alert>
        </div>
    )
}

export default LeftContent