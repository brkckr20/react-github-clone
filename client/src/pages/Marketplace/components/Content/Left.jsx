import React from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { types, categories, filters } from './itemData'
const Left = () => {
    return (
        <Box>
            <Text as="p" fontSize="16px" letterSpacing={1} marginBottom="10px" fontWeight="bold">Types</Text>
            <UnorderedList marginLeft="4px" listStyleType="none">
                {
                    types.map((type, index) => (
                        <ListItem _hover={{ color: "#3498db", cursor: "pointer" }} paddingTop="10px" paddingBottom="10px" key={index} >{type.typeName}</ListItem>
                    ))
                }
            </UnorderedList>

            <Text as="p" fontSize="16px" letterSpacing={1} marginBottom="10px" marginTop="10px" fontWeight="bold">Categories</Text>
            <UnorderedList marginLeft="4px" listStyleType="none">
                {
                    categories.map((type, index) => (
                        <ListItem _hover={{ color: "#3498db", cursor: "pointer" }} paddingTop="10px" paddingBottom="10px" key={index} >{type.name}</ListItem>
                    ))
                }
            </UnorderedList>
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton padding={0} width="auto">
                            <Box marginRight={20} marginTop="10px" textAlign='left' letterSpacing={1}>
                                Filters
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel marginLeft="4px" padding={0} borderColor="transparent">
                        <UnorderedList margin={0} listStyleType="none">
                            {
                                filters.map((type, index) => (
                                    <ListItem _hover={{ color: "#3498db", cursor: "pointer" }} paddingTop="10px" paddingBottom="10px" key={index} >{type.name}</ListItem>
                                ))
                            }
                        </UnorderedList>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <Text as="p" fontSize="16px" letterSpacing={1} marginBottom="10px" marginTop="10px" fontWeight="bold">Verification</Text>
            <UnorderedList marginLeft="4px" listStyleType="none">
                <ListItem _hover={{ color: "#3498db", cursor: "pointer" }} paddingTop="10px" paddingBottom="10px">Verified Creator</ListItem>
            </UnorderedList>
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton padding={0} width="auto">
                            <Box marginRight={20} marginTop="10px" textAlign='left' letterSpacing={1}>
                                Your Items
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel marginLeft="4px" padding={0} borderColor="transparent">
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    )
}

export default Left