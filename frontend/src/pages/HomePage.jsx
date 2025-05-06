import React, { useEffect, useState } from 'react';
import { SimpleGrid, Container, Text, VStack, Box, Spinner, Center, Image, Flex, Badge, Button, useToast, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useProductStore } from '../store/product';

const HomePage = () => {
  const { products, fetchProducts, deleteProduct, addSampleProducts } = useProductStore();
  const [isLoading, setIsLoading] = useState(true);
  const [isAddingSamples, setIsAddingSamples] = useState(false);
  const toast = useToast();
  
  useEffect(() => {
    const getProducts = async () => {
      try {
        await fetchProducts();
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch products",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, [fetchProducts, toast]);

  const handleDelete = async (id) => {
    try {
      const result = await deleteProduct(id);
      if (result.success) {
        toast({
          title: "Success",
          description: result.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Error",
          description: result.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete product",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  
  const handleAddSampleProducts = async () => {
    setIsAddingSamples(true);
    try {
      const result = await addSampleProducts();
      if (result.success) {
        toast({
          title: "Success",
          description: result.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Error",
          description: result.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add sample products",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsAddingSamples(false);
    }
  };

  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8} >
       <Text fontSize={"30"}
        fontWeight={"bold"}
        textAlign={"center"}
        color={"blue.500"}
        textTransform={"uppercase"}>
        Current Products🚀
       </Text>
      
      {isLoading ? (
        <Center w="full" py={10}>
          <Spinner size="xl" />
        </Center>
      ) : products && products.length > 0 ? (
        <SimpleGrid 
          columns={{
            base: 1,
            md: 2,
            lg: 3
          }}
          spacing={8}
          w="full"
        >
          {products.map(product => (
            <Box 
              key={product._id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
              bg="white"
              transition="transform 0.3s"
              _hover={{ transform: 'scale(1.02)' }}
            >
              <Image 
                src={product.image}
                alt={product.name}
                height="200px"
                width="100%"
                objectFit="cover"
                fallbackSrc="https://via.placeholder.com/300x200?text=Product+Image"
              />
              
              <Box p={5}>
                <Flex justify="space-between" align="baseline" mb={2}>
                  <Text fontWeight="bold" fontSize="xl" isTruncated>{product.name}</Text>
                  <Badge borderRadius="full" px="2" colorScheme="teal">
                    ${product.price}
                  </Badge>
                </Flex>
                
                <Button 
                  colorScheme="red" 
                  size="sm" 
                  onClick={() => handleDelete(product._id)}
                  mt={2}
                >
                  Delete
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        <VStack spacing={6}>
          <Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
            No Products ☹️
          </Text>
          
          <HStack spacing={4}>
            <Button
              colorScheme="teal"
              isLoading={isAddingSamples}
              onClick={handleAddSampleProducts}
            >
              Add Sample Products
            </Button>
            
            <Link to={"/create"}>
              <Button colorScheme="blue">
                Create New Product
              </Button>
            </Link>
          </HStack>
        </VStack>
      )}
      </VStack>
    </Container>
  )
}

export default HomePage