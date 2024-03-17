import React from "react";
import { Box, Heading, Text, Image, Button, Stack, SimpleGrid, Container } from "@chakra-ui/react";

const Index = () => {
  const cards = [
    {
      title: "Card 1",
      description: "This is the description for card 1.",
      image: "https://images.unsplash.com/photo-1707760696486-2a2cd7e0b6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGltYWdlfGVufDB8fHx8MTcxMDY1MzMxMnww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      title: "Card 2",
      description: "This is the description for card 2.",
      image: "https://images.unsplash.com/photo-1506792006437-256b665541e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHBhdHRlcm58ZW58MHx8fHwxNzEwNjUzMzEyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      title: "Card 3",
      description: "This is the description for card 3.",
      image: "https://images.unsplash.com/photo-1604782206219-3b9576575203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBzaGFwZXN8ZW58MHx8fHwxNzEwNjUzMzEyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      title: "Card 4",
      description: "This is the description for card 4.",
      image: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWdufGVufDB8fHx8MTcxMDY1MzMxM3ww&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Box bg="gray.100" py={16}>
      <Container maxW="container.lg">
        <Heading as="h1" size="2xl" textAlign="center" mb={10}>
          Welcome to the Hero Section
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {cards.map((card, index) => (
            <Box key={index} bg="white" borderRadius="lg" p={6} boxShadow="md" textAlign="center">
              <Image src={card.image} alt={card.title} borderRadius="lg" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                {card.title}
              </Heading>
              <Text mb={4}>{card.description}</Text>
              <Button colorScheme="blue" size="lg">
                Learn More
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Index;
