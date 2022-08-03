import { useState } from 'react';
import { Box, Button, ButtonGroup, Container, Grid, GridItem } from '@chakra-ui/react';

const PullRequests = () => {


    const [selectBtn, setSelectBtn] = useState("Crated");
    const btnBgChange = async (value) => {
        await setSelectBtn(value)
    }

    return (
        <Box style={{ margin: "0 auto" }}>
            <Container width="100vw" className='pull-button-group' maxW='container.lg'>
                <Grid templateColumns='repeat(11, 1fr)' gap={6} paddingTop="24px">
                    <GridItem
                        w='100%'
                        colSpan={5}

                    >
                        <ButtonGroup>
                            <Button fontWeight="light" onClick={() => btnBgChange("Created")} style={{ margin: "0", borderRadius: "10px 0 0 10px" }} size='sm' color="white" border={"1px"} borderColor="gray.200">Created</Button>
                            <Button fontWeight="light" onClick={() => btnBgChange("Assigned")} style={{ margin: "0" }} borderRadius="0" size='sm' border={"1px"} borderColor="gray.200" bg={`${selectBtn === "Assigned" ? "blue" : "transparent"}`}>Assigned</Button>
                            <Button fontWeight="light" style={{ margin: "0" }} borderRadius="0" size='sm' border={"1px"} borderColor="gray.200" bg={`transparent`}>Mentioned</Button>
                            <Button fontWeight="light" style={{ margin: "0", borderRadius: "0 10px 10px 0" }} size='sm' border={"1px"} borderColor="gray.200" bg={`transparent`}>Review requests</Button>
                        </ButtonGroup>

                    </GridItem>
                    <GridItem
                        w='100%'
                        h='10'
                        bg='green.500'
                        colSpan={6}
                    >

                    </GridItem>

                </Grid>
            </Container>
        </Box>
    )
}

export default PullRequests