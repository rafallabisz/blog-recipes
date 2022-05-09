import { FC, memo } from "react";
import { Box, Text } from "@chakra-ui/react";
import { Flex, Heading } from "@chakra-ui/react";
import InputSearch from "@/components/common/inputs/input-search";
import SocialIcon from "@/components/common/social-icon";
import SiteMetaData from "@/utils/site-meta-data";
import styled from "@emotion/styled";

const StyledSocialIcon = styled.div`
  margin-left: 16px;
`;

type Props = {};

const Navbar: FC = (props: Props) => {
  return (
    <Flex justify="space-between" align="center" p="4">
      <Heading fontSize="xl">Blog recipes</Heading>
      <Flex align="center">
        <Flex mx="4" align="center">
          <Text mr="4">Recipes</Text>
          <Text>About me</Text>
        </Flex>
        <Box>
          <InputSearch />
        </Box>
        <Flex mx="4" align="center">
          <SocialIcon
            icon="/assets/images/instagram.svg"
            href={SiteMetaData.socialIcon.instagram}
          />
          <StyledSocialIcon>
            <SocialIcon
              icon="/assets/images/linkedin.svg"
              href={SiteMetaData.socialIcon.linkedin}
            />
          </StyledSocialIcon>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default memo(Navbar);
