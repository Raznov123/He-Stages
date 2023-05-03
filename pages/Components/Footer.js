import { Flex, Box, Link, Text, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      bg="white"
      justifyContent="center" 

    >
      <Flex>
        <VStack>
          <Text> Nos formations</Text>
          <Link mx="2">
            <Link>Formation Initiale</Link>
          </Link>
          <Link mx="2">
            <Link>Formation Continue</Link>
          </Link>
        </VStack>
        <VStack>
          <Text> Contactez-nous</Text>
          <Link mx="2">
            <Link>+212 661 249 149</Link>
          </Link>
          <Link mx="2">
            <Link>contact@hestim.ma</Link>
          </Link>
        </VStack>
        <VStack>
          <Text> Hestim</Text>
          <Link mx="2">
            <Link>À propos de HESTIM</Link>
          </Link>
          <Flex>
            facebook
            linkedin
            insta
            youtube
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  );
}

export default Footer;