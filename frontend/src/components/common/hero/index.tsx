import { FC, memo } from "react";
import { Flex, Grid, Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";
import styled from "@emotion/styled";

const StyledImage = styled(Image)`
  border-radius: 50%;
`;

type Props = {};

const Hero: FC<Props> = () => {
  return (
    <Flex>
      <Stack flex="1" justify="center" align="center">
        <Stack>
          <Heading fontSize="4xl">I Just Code Every Day,</Heading>
          <Heading fontSize="6xl">That’s Makes Me, </Heading>
          <Heading fontSize="8xl" color="purple.600">
            Better.{" "}
          </Heading>
        </Stack>
      </Stack>
      <Stack flex="1">
        <Grid placeItems="center">
          <StyledImage
            src="/assets/images/hero.webp"
            height={500}
            width={500}
            alt="Recipes"
            objectFit={"cover"}
          />
        </Grid>
      </Stack>
    </Flex>
  );
};

export default memo(Hero);
