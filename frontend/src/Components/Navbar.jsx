import React from 'react'
import { Container, Flex, useColorMode, HStack, Text, Button } from '@chakra-ui/react';
import { PlusSquareIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
//import { useProductStore } from '../store/product';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    //const {product} = useProductStore
  return (
    <Container maxW={"1140px"} px={4} >
     <Flex
       h={16}
       alignItems={"center"}
       justifyContent={"space-between"}
       flexDir={{
         base: "column",
         sm: "row"
       }}
     >
       <Text
         bgGradient='linear(to-l, #7928CA, #FF0080)'
         bgClip='text'
         fontSize='6xl'
         fontWeight='extrabold'
       >
         <Link to={'/'}>PRODUCT STORE 🏬</Link>
       </Text>
       
       <HStack spacing={4} alignItems={"center"}>
         <Link to={"/create"}>
           <Button>
             <PlusSquareIcon fontSize={20} />
           </Button>
         </Link>
         
         <Button onClick={toggleColorMode}>
           {colorMode === "light" ? <MoonIcon /> : <SunIcon size='20' />}
         </Button>
       </HStack>
     </Flex>
    </Container>
  )
}

export default Navbar