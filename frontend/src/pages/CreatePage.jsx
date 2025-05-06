import { Button, Box, Container, Heading, VStack, useColorModeValue, Input, FormControl, FormLabel, useToast, Image, Text, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useProductStore } from '../store/product';
import { useNavigate } from 'react-router-dom';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';

const CreatePage = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { createProduct } = useProductStore();
  
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [isImageValid, setIsImageValid] = useState(true);
  const [showPreview, setShowPreview] = useState(false);

  const handleImageChange = (e) => {
    const imageUrl = e.target.value;
    setNewProduct({...newProduct, image: imageUrl});
    
    // Reset validation if field is empty
    if (!imageUrl) {
      setIsImageValid(true);
      setShowPreview(false);
      return;
    }
    
    // Check if URL is valid for image
    const img = new Image();
    img.onload = () => {
      setIsImageValid(true);
      setShowPreview(true);
    };
    img.onerror = () => {
      setIsImageValid(false);
      setShowPreview(false);
    };
    img.src = imageUrl;
  };

  const handleAddProduct = async () => {
    // Validate price as a positive number
    if (parseFloat(newProduct.price) <= 0) {
      toast({
        title: "Invalid price",
        description: "Price must be greater than zero",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Validate image URL
    if (!isImageValid && newProduct.image) {
      toast({
        title: "Invalid image URL",
        description: "Please provide a valid image URL",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);
    try {
      // Convert price to number before submission
      const productToSubmit = {
        ...newProduct,
        price: parseFloat(newProduct.price)
      };
      
      const result = await createProduct(productToSubmit);
      
      if (result.success) {
        toast({
          title: "Success",
          description: result.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate('/');
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
      console.error("Error:", error);
      toast({
        title: "Error",
        description: error.message || "Something went wrong", 
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  }

  const clearImageUrl = () => {
    setNewProduct({...newProduct, image: ""});
    setIsImageValid(true);
    setShowPreview(false);
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8} py={12}>
        <Heading as="h1" size="2xl" textAlign="center">
          Create New Product
        </Heading>
        <Box
          w={"full"} 
          bg={useColorModeValue("white", "gray.700")}
          p={8} 
          rounded="lg" 
          shadow="lg"
        >
          <VStack spacing={6}>
            <FormControl isRequired>
              <FormLabel>Product Name</FormLabel>
              <Input
                placeholder='Product Name'
                name='name'
                value={newProduct.name}
                onChange={(e) => {
                  setNewProduct({...newProduct, [e.target.name]: e.target.value})
                }}
              />
            </FormControl>
            
            <FormControl isRequired>
              <FormLabel>Price</FormLabel>
              <Input
                placeholder='Price'
                name='price'
                type='number'
                value={newProduct.price}
                onChange={(e) => {
                  setNewProduct({...newProduct, [e.target.name]: e.target.value})
                }}
              />
            </FormControl>
            
            <FormControl isRequired>
              <FormLabel>Image URL</FormLabel>
              <InputGroup>
                <Input
                  placeholder='Image URL'
                  name='image'
                  value={newProduct.image}
                  onChange={handleImageChange}
                  isInvalid={!isImageValid}
                />
                {newProduct.image && (
                  <InputRightElement>
                    <IconButton
                      aria-label="Clear image URL"
                      icon={<CloseIcon />}
                      size="sm"
                      onClick={clearImageUrl}
                    />
                  </InputRightElement>
                )}
              </InputGroup>
              <Text fontSize="sm" color={isImageValid ? "gray.500" : "red.500"} mt={2}>
                {newProduct.image && !isImageValid 
                  ? "Invalid image URL. Please provide a valid URL."
                  : "Paste direct URL to an image (jpg, png, etc)"}
              </Text>
            </FormControl>
            
            {showPreview && isImageValid && newProduct.image && (
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden" w="full" mt={4}>
                <Image
                  src={newProduct.image}
                  alt="Product preview"
                  fallbackSrc="https://via.placeholder.com/300x200?text=Image+Preview"
                  objectFit="cover"
                  h="200px"
                  w="full"
                />
                <Box p={2} bg="green.50">
                  <Text fontSize="sm" color="green.600" display="flex" alignItems="center">
                    <CheckIcon mr={2} /> Image loaded successfully
                  </Text>
                </Box>
              </Box>
            )}
            
            <Button 
              colorScheme='blue' 
              onClick={handleAddProduct} 
              w='full' 
              size="lg"
              isLoading={isLoading}
              isDisabled={!newProduct.name || !newProduct.price || !newProduct.image || !isImageValid}
            >
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage