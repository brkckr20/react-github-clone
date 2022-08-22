import React from 'react'
import { Box, Button, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { MdKeyboardArrowDown } from 'react-icons/md'

const Right = () => {
    return (
        <Box>
            <Box display="flex">
                <Box width="100%" className='market-input'>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<BiSearchAlt2 color='gray.300' />}
                        />
                        <Input placeholder='Search for apps and actions' backgroundColor="white" />
                    </InputGroup>
                </Box>
                <Box>
                    <Menu>
                        <MenuButton marginLeft="10px" as={Button} rightIcon={<MdKeyboardArrowDown />} border="1px" borderColor="gray.300" backgroundColor="whiteAlpha.700">
                            Sort : Best Match
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Best Match</MenuItem>
                            <MenuItem>Recently added</MenuItem>
                            <MenuItem>Most installed/starred</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Box>
        </Box>
    )
}

export default Right