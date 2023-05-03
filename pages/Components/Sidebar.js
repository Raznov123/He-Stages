import { Box, Link, Stack } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box
      bg="#D43526"
      borderRight="1px"
      borderColor="gray.200"
      w="64"
      px="4"
      py="8"
      h="100vh"

    >
      <Stack spacing="6">
          <Link color="white">Username</Link>
          <Link color="white">Home</Link>
          <Link color="white">Calendrier</Link>
          <Link color="white">CV</Link>
          <Link color="white">Documents</Link>
          <Link color="white">Espace étudiant</Link>
          <Link color="white">Encadrant</Link>
          <Link color="white">Déconnexion</Link>
      </Stack>
    </Box>
  );
};

export default Sidebar;
