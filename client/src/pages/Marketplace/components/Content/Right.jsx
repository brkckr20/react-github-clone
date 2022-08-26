import React from 'react'
import { Box, Button, Grid, GridItem, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { BsArrowRightShort, BsFillPlayCircleFill } from 'react-icons/bs';
import { apps, apps2, actions1, actions2 } from './itemData'

const Right = () => {
    return (
        <Box>
            <Box display="flex" boxShadow="lg">
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
            <Box id='apps' marginTop="15px">
                <Text as="h3" fontSize="20px" fontWeight="600">Apps</Text>
                <Grid
                    h='100%'
                    templateColumns='repeat(2, 1fr)'
                >
                    <GridItem colSpan="1" height="max-content">
                        {
                            apps.map(item => (
                                <Grid
                                    h='100%'
                                    templateColumns='repeat(7, 1fr)'
                                    key={item.id}
                                    marginY="20px"
                                >
                                    <GridItem borderRadius="50%" boxShadow="lg" colSpan="1" width="56px" height="56px" backgroundColor={item.avatarBgColor} display="flex" alignItems="center" justifyContent="center">
                                        <Image width="31px" height="31px" src={item.avatarIcon} alt='resim 1' />
                                    </GridItem>
                                    <GridItem colSpan="6">
                                        <Text as="h4" fontSize="16px" fontWeight="600" color="#0969DA">{item.appName}</Text>
                                        <Text as="h5" display="flex" alignItems="center" fontSize="14px" color="blackAlpha.800">{item.author}
                                            {
                                                item.author !== null ? (
                                                    <span style={{ marginLeft: "5px" }}>
                                                        <svg aria-hidden="true" fill='#0969DA' height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-verified color-fg-accent ml-1">
                                                            <path fillRule="evenodd" d="M9.585.52a2.678 2.678 0 00-3.17 0l-.928.68a1.178 1.178 0 01-.518.215L3.83 1.59a2.678 2.678 0 00-2.24 2.24l-.175 1.14a1.178 1.178 0 01-.215.518l-.68.928a2.678 2.678 0 000 3.17l.68.928c.113.153.186.33.215.518l.175 1.138a2.678 2.678 0 002.24 2.24l1.138.175c.187.029.365.102.518.215l.928.68a2.678 2.678 0 003.17 0l.928-.68a1.17 1.17 0 01.518-.215l1.138-.175a2.678 2.678 0 002.241-2.241l.175-1.138c.029-.187.102-.365.215-.518l.68-.928a2.678 2.678 0 000-3.17l-.68-.928a1.179 1.179 0 01-.215-.518L14.41 3.83a2.678 2.678 0 00-2.24-2.24l-1.138-.175a1.179 1.179 0 01-.518-.215L9.585.52zM7.303 1.728c.415-.305.98-.305 1.394 0l.928.68c.348.256.752.423 1.18.489l1.136.174c.51.078.909.478.987.987l.174 1.137c.066.427.233.831.489 1.18l.68.927c.305.415.305.98 0 1.394l-.68.928a2.678 2.678 0 00-.489 1.18l-.174 1.136a1.178 1.178 0 01-.987.987l-1.137.174a2.678 2.678 0 00-1.18.489l-.927.68c-.415.305-.98.305-1.394 0l-.928-.68a2.678 2.678 0 00-1.18-.489l-1.136-.174a1.178 1.178 0 01-.987-.987l-.174-1.137a2.678 2.678 0 00-.489-1.18l-.68-.927a1.178 1.178 0 010-1.394l.68-.928c.256-.348.423-.752.489-1.18l.174-1.136c.078-.51.478-.909.987-.987l1.137-.174a2.678 2.678 0 001.18-.489l.927-.68zM11.28 6.78a.75.75 0 00-1.06-1.06L7 8.94 5.78 7.72a.75.75 0 00-1.06 1.06l1.75 1.75a.75.75 0 001.06 0l3.75-3.75z"></path>
                                                        </svg>
                                                    </span>
                                                ) : ''
                                            }
                                        </Text>
                                        <Text as="p" color="blackAlpha.800" fontSize="14px">{item.title}</Text>
                                        <Text as="span" fontSize="12px" border="1px" padding="2px" fontWeight="bold" color="gray" borderColor={item.install === "Recommended" ? "gray" : "transparent"} borderRadius="14px">{item.install}</Text>
                                    </GridItem>
                                </Grid>
                            ))
                        }

                    </GridItem>
                    <GridItem colSpan="1">
                        <GridItem colSpan="1" height="max-content">
                            {
                                apps2.map(item => (
                                    <Grid
                                        h='100%'
                                        templateColumns='repeat(7, 1fr)'
                                        key={item.id}
                                        marginY="20px"
                                    >
                                        <GridItem borderRadius="50%" boxShadow="lg" colSpan="1" width="56px" height="56px" backgroundColor={item.avatarBgColor} display="flex" alignItems="center" justifyContent="center">
                                            <Image width="31px" height="31px" src={item.avatarIcon} alt='resim 1' />
                                        </GridItem>
                                        <GridItem colSpan="6">
                                            <Text as="h4" fontSize="16px" fontWeight="600" color="#0969DA">{item.appName}</Text>
                                            <Text as="h5" display="flex" alignItems="center" fontSize="14px" color="blackAlpha.800">{item.author}
                                                {
                                                    item.author !== null ? (
                                                        <span style={{ marginLeft: "5px" }}>
                                                            <svg aria-hidden="true" fill='#0969DA' height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-verified color-fg-accent ml-1">
                                                                <path fillRule="evenodd" d="M9.585.52a2.678 2.678 0 00-3.17 0l-.928.68a1.178 1.178 0 01-.518.215L3.83 1.59a2.678 2.678 0 00-2.24 2.24l-.175 1.14a1.178 1.178 0 01-.215.518l-.68.928a2.678 2.678 0 000 3.17l.68.928c.113.153.186.33.215.518l.175 1.138a2.678 2.678 0 002.24 2.24l1.138.175c.187.029.365.102.518.215l.928.68a2.678 2.678 0 003.17 0l.928-.68a1.17 1.17 0 01.518-.215l1.138-.175a2.678 2.678 0 002.241-2.241l.175-1.138c.029-.187.102-.365.215-.518l.68-.928a2.678 2.678 0 000-3.17l-.68-.928a1.179 1.179 0 01-.215-.518L14.41 3.83a2.678 2.678 0 00-2.24-2.24l-1.138-.175a1.179 1.179 0 01-.518-.215L9.585.52zM7.303 1.728c.415-.305.98-.305 1.394 0l.928.68c.348.256.752.423 1.18.489l1.136.174c.51.078.909.478.987.987l.174 1.137c.066.427.233.831.489 1.18l.68.927c.305.415.305.98 0 1.394l-.68.928a2.678 2.678 0 00-.489 1.18l-.174 1.136a1.178 1.178 0 01-.987.987l-1.137.174a2.678 2.678 0 00-1.18.489l-.927.68c-.415.305-.98.305-1.394 0l-.928-.68a2.678 2.678 0 00-1.18-.489l-1.136-.174a1.178 1.178 0 01-.987-.987l-.174-1.137a2.678 2.678 0 00-.489-1.18l-.68-.927a1.178 1.178 0 010-1.394l.68-.928c.256-.348.423-.752.489-1.18l.174-1.136c.078-.51.478-.909.987-.987l1.137-.174a2.678 2.678 0 001.18-.489l.927-.68zM11.28 6.78a.75.75 0 00-1.06-1.06L7 8.94 5.78 7.72a.75.75 0 00-1.06 1.06l1.75 1.75a.75.75 0 001.06 0l3.75-3.75z"></path>
                                                            </svg>
                                                        </span>
                                                    ) : ''
                                                }
                                            </Text>
                                            <Text as="p" color="blackAlpha.800" fontSize="14px">{item.title}</Text>
                                            <Text as="span" fontSize="12px" border="1px" padding="2px" fontWeight="bold" color="gray" borderColor={item.install === "Recommended" ? "gray" : "transparent"} borderRadius="14px">{item.install}</Text>
                                        </GridItem>
                                    </Grid>
                                ))
                            }

                        </GridItem>
                    </GridItem>
                </Grid>
                <Text
                    as="p"
                    display="inline-flex"
                    alignItems="center"
                    _hover={{ textDecoration: "underline", color: "blue", cursor: "pointer" }}
                    transition="all"
                    transitionDuration=".5s"
                >View all <BsArrowRightShort />
                </Text>
            </Box >
            <Box id='actions' marginTop="15px" paddingBottom={"20px"}>
                <Text as="h3" fontSize="20px" fontWeight="600">Actions</Text>
                <Grid
                    h='100%'
                    templateColumns='repeat(2, 1fr)'
                >
                    <GridItem colSpan="1" height="max-content">
                        {
                            actions1.map(item => (
                                <Grid
                                    h='100%'
                                    templateColumns='repeat(7, 1fr)'
                                    key={item.id}
                                    marginY="20px"
                                >
                                    <GridItem borderRadius="50%" boxShadow="lg" backgroundColor="#0969da" colSpan="1" width="56px" height="56px" display="flex" alignItems="center" justifyContent="center">
                                        <Box width="31px" height="31px" >
                                            <BsFillPlayCircleFill fill='white' size={31} />
                                        </Box>
                                    </GridItem>
                                    <GridItem colSpan="6">
                                        <Text as="h4" fontSize="16px" fontWeight="600" color="#0969DA">{item.appName}</Text>
                                        <Text as="h5" display="flex" alignItems="center" fontSize="14px" color="blackAlpha.800">{item.author}
                                            {
                                                item.author !== null ? (
                                                    <span style={{ marginLeft: "5px" }}>
                                                        <svg aria-hidden="true" fill='#0969DA' height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-verified color-fg-accent ml-1">
                                                            <path fillRule="evenodd" d="M9.585.52a2.678 2.678 0 00-3.17 0l-.928.68a1.178 1.178 0 01-.518.215L3.83 1.59a2.678 2.678 0 00-2.24 2.24l-.175 1.14a1.178 1.178 0 01-.215.518l-.68.928a2.678 2.678 0 000 3.17l.68.928c.113.153.186.33.215.518l.175 1.138a2.678 2.678 0 002.24 2.24l1.138.175c.187.029.365.102.518.215l.928.68a2.678 2.678 0 003.17 0l.928-.68a1.17 1.17 0 01.518-.215l1.138-.175a2.678 2.678 0 002.241-2.241l.175-1.138c.029-.187.102-.365.215-.518l.68-.928a2.678 2.678 0 000-3.17l-.68-.928a1.179 1.179 0 01-.215-.518L14.41 3.83a2.678 2.678 0 00-2.24-2.24l-1.138-.175a1.179 1.179 0 01-.518-.215L9.585.52zM7.303 1.728c.415-.305.98-.305 1.394 0l.928.68c.348.256.752.423 1.18.489l1.136.174c.51.078.909.478.987.987l.174 1.137c.066.427.233.831.489 1.18l.68.927c.305.415.305.98 0 1.394l-.68.928a2.678 2.678 0 00-.489 1.18l-.174 1.136a1.178 1.178 0 01-.987.987l-1.137.174a2.678 2.678 0 00-1.18.489l-.927.68c-.415.305-.98.305-1.394 0l-.928-.68a2.678 2.678 0 00-1.18-.489l-1.136-.174a1.178 1.178 0 01-.987-.987l-.174-1.137a2.678 2.678 0 00-.489-1.18l-.68-.927a1.178 1.178 0 010-1.394l.68-.928c.256-.348.423-.752.489-1.18l.174-1.136c.078-.51.478-.909.987-.987l1.137-.174a2.678 2.678 0 001.18-.489l.927-.68zM11.28 6.78a.75.75 0 00-1.06-1.06L7 8.94 5.78 7.72a.75.75 0 00-1.06 1.06l1.75 1.75a.75.75 0 001.06 0l3.75-3.75z"></path>
                                                        </svg>
                                                    </span>
                                                ) : ''
                                            }
                                        </Text>
                                        <Text as="p" color="blackAlpha.800" fontSize="14px">{item.title}</Text>
                                        <Text as="span" fontSize="12px" color="gray.600" padding="2px" fontWeight="bold" borderRadius="14px">
                                            {item.stars} star{item.stars > 1 ? 's' : ''}</Text>
                                    </GridItem>
                                </Grid>
                            ))
                        }

                    </GridItem>
                    <GridItem colSpan="1">
                        <GridItem colSpan="1" height="max-content">
                            {
                                actions2.map(item => (
                                    <Grid
                                        h='100%'
                                        templateColumns='repeat(7, 1fr)'
                                        key={item.id}
                                        marginY="20px"
                                    >

                                        <GridItem borderRadius="50%" boxShadow="lg" backgroundColor="#0969da" colSpan="1" width="56px" height="56px" display="flex" alignItems="center" justifyContent="center">
                                            <Box width="31px" height="31px" >
                                                <BsFillPlayCircleFill fill='white' size={31} />
                                            </Box>
                                        </GridItem>
                                        <GridItem colSpan="6">
                                            <Text as="h4" fontSize="16px" fontWeight="600" color="#0969DA">{item.appName}</Text>
                                            <Text as="h5" display="flex" alignItems="center" fontSize="14px" color="blackAlpha.800">{item.author}
                                                {
                                                    item.author !== null ? (
                                                        <span style={{ marginLeft: "5px" }}>
                                                            <svg aria-hidden="true" fill='#0969DA' height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-verified color-fg-accent ml-1">
                                                                <path fillRule="evenodd" d="M9.585.52a2.678 2.678 0 00-3.17 0l-.928.68a1.178 1.178 0 01-.518.215L3.83 1.59a2.678 2.678 0 00-2.24 2.24l-.175 1.14a1.178 1.178 0 01-.215.518l-.68.928a2.678 2.678 0 000 3.17l.68.928c.113.153.186.33.215.518l.175 1.138a2.678 2.678 0 002.24 2.24l1.138.175c.187.029.365.102.518.215l.928.68a2.678 2.678 0 003.17 0l.928-.68a1.17 1.17 0 01.518-.215l1.138-.175a2.678 2.678 0 002.241-2.241l.175-1.138c.029-.187.102-.365.215-.518l.68-.928a2.678 2.678 0 000-3.17l-.68-.928a1.179 1.179 0 01-.215-.518L14.41 3.83a2.678 2.678 0 00-2.24-2.24l-1.138-.175a1.179 1.179 0 01-.518-.215L9.585.52zM7.303 1.728c.415-.305.98-.305 1.394 0l.928.68c.348.256.752.423 1.18.489l1.136.174c.51.078.909.478.987.987l.174 1.137c.066.427.233.831.489 1.18l.68.927c.305.415.305.98 0 1.394l-.68.928a2.678 2.678 0 00-.489 1.18l-.174 1.136a1.178 1.178 0 01-.987.987l-1.137.174a2.678 2.678 0 00-1.18.489l-.927.68c-.415.305-.98.305-1.394 0l-.928-.68a2.678 2.678 0 00-1.18-.489l-1.136-.174a1.178 1.178 0 01-.987-.987l-.174-1.137a2.678 2.678 0 00-.489-1.18l-.68-.927a1.178 1.178 0 010-1.394l.68-.928c.256-.348.423-.752.489-1.18l.174-1.136c.078-.51.478-.909.987-.987l1.137-.174a2.678 2.678 0 001.18-.489l.927-.68zM11.28 6.78a.75.75 0 00-1.06-1.06L7 8.94 5.78 7.72a.75.75 0 00-1.06 1.06l1.75 1.75a.75.75 0 001.06 0l3.75-3.75z"></path>
                                                            </svg>
                                                        </span>
                                                    ) : ''
                                                }
                                            </Text>
                                            <Text as="p" color="blackAlpha.800" fontSize="14px">{item.title}</Text>
                                            <Text as="span" fontSize="12px" color="gray.600" padding="2px" fontWeight="bold" borderRadius="14px">
                                                {item.stars} star{item.stars > 1 ? 's' : ''}</Text>
                                        </GridItem>
                                    </Grid>
                                ))
                            }

                        </GridItem>
                    </GridItem>
                </Grid>
                <Text
                    as="p"
                    display="inline-flex"
                    alignItems="center"
                    _hover={{ textDecoration: "underline", color: "blue", cursor: "pointer" }}
                    transition="all"
                    transitionDuration=".5s"
                >View all <BsArrowRightShort />
                </Text>
            </Box >
        </Box >
    )
}

export default Right