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
  recipe: IDataResponse<IRecipe>;
};

const RecipeCard: FC<Props> = ({ recipe }) => {
  const { title, content, cover } = recipe.attributes;
  return (
    <Box height={"auto"} boxShadow="md" borderRadius="xl" overflow="hidden">
      <Stack direction={"column"}>
        <Box width={"auto"}>
          <Image
            src={"/assets/images/hero.webp"}
            height={200}
            width={300}
            alt="light"
          />
        </Box>
        <Box padding="4">
          <Heading as="h3" fontSize="2xl" mb="2">
            {title}
          </Heading>
          <Text fontSize="md">
            {content.split(" ").splice(0, 20).join(" ") + "..."}
          </Text>
          <Flex justify="space-between" align="center">
            <Flex align="center">
              <Image src={"/assets/images/time.svg"} width={16} height={16} />
              <Text ml="1" fontSize="sm">
                {`${"25"}'`}
              </Text>
            </Flex>
            <Link href={`${recipe.id}`} passHref>
              <Button colorScheme="purple">Read More</Button>
            </Link>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default memo(RecipeCard);
