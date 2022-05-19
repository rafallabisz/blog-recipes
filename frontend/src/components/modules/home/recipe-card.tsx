import { FC, memo } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { IDataResponse } from "@/utils/common-models";
import { IRecipe } from "@/components/modules/home/models";

type Props = {
  recipe?: IDataResponse<IRecipe>;
  vertical?: boolean;
};

const RecipeCard: FC<Props> = ({ recipe, vertical }) => {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip";
  return (
    <Box
      height={vertical ? "auto" : "200px"}
      boxShadow="md"
      borderRadius="xl"
      overflow="hidden"
    >
      <Stack direction={vertical ? "column" : "row-reverse"}>
        <Box width={vertical ? 300 : 600}>
          <Image
            src={"/assets/images/hero.webp"}
            height={vertical ? 200 : 300}
            width={vertical ? 300 : 400}
            alt="light"
          />
        </Box>
        <Box padding="4">
          <Heading as="h3" fontSize="2xl" mb="2">
            Title
            {/*{recipe.attributes.title}*/}
          </Heading>
          <Text fontSize="md">
            {vertical
              ? description.split(" ").splice(0, 20).join(" ") + "..."
              : description.split(" ").splice(0, 40).join(" ")}
          </Text>
          <Flex justify="space-between" align="center">
            <Flex align="center">
              <Image src={"/assets/images/time.svg"} width={16} height={16} />
              <Text ml="1" fontSize="sm">
                {`${"25"}'`}
              </Text>
            </Flex>
            {/*<Link href={`${recipe.id}`} passHref>*/}
            <Link href={`${"/recipe.id"}`} passHref>
              <Button colorScheme="purple">Read More</Button>
            </Link>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default memo(RecipeCard);
