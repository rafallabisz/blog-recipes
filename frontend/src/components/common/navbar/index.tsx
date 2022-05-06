import { FC, memo } from "react";
import { Box, InputRightElement, Text } from "@chakra-ui/react";
import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import Image from "next/image";

type Props = {};

const Navbar: FC = (props: Props) => {
  return (
    <Flex justify="space-between" align="center" p="4">
      <Heading fontSize="xl">Blog recipes</Heading>

      <Flex align="center">
        <Box>
          <InputGroup>
            <InputRightElement pointerEvents="none">
              Lupa
              {/*<Image*/}
              {/*  src={"/assets/search.png"}*/}
              {/*  width="20"*/}
              {/*  height="20"*/}
              {/*  priority*/}
              {/*/>*/}
            </InputRightElement>
            <Input type="text" placeholder="Search..." />
          </InputGroup>
        </Box>

        <Flex mx="4" align="center">
          <Text mr="4">Home</Text>
          <Text>Posts</Text>
        </Flex>

        <Flex mx="4" align="center">
          <Box mr="4">
            {/*<FontAwesomeIcon icon={faInstagram} size="2x" />*/}
          </Box>
          <Box mr="4">
            {/*<FontAwesomeIcon icon={faLinkedin} size="2x" />*/}
          </Box>
          <Box mr="4">{/*<FontAwesomeIcon icon={faTwitter} size="2x" />*/}</Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default memo(Navbar);
