import { FC, memo } from "react";
import { Box, Text } from "@chakra-ui/react";
import { Flex, Heading } from "@chakra-ui/react";
import InputSearch from "@/components/common/inputs/input-search";

type Props = {};

const Navbar: FC = (props: Props) => {
  return (
    <Flex justify="space-between" align="center" p="4">
      <Heading fontSize="xl">Blog recipes</Heading>
      <Flex align="center">
        <Box>
          <InputSearch />
        </Box>

        <Flex mx="4" align="center">
          <Text mr="4">Recipes</Text>
          <Text>About me</Text>
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
