import { FC, memo } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";

const StyledSocialIcon = styled(Box)`
  display: flex;
  align-items: center;
`;

const StyledLink = styled.a`
  display: flex;
`;

type Props = {
  icon: string;
  href: string;
  ariaLabel?: string;
};

const SocialIcon: FC<Props> = ({ icon, href, ariaLabel }) => {
  return (
    <StyledSocialIcon>
      <StyledLink
        href={href}
        aria-label={ariaLabel}
        rel="nofollow noopener noreferrer"
        target="_blank"
      >
        <Image src={icon} width="24px" height="24px" />
      </StyledLink>
    </StyledSocialIcon>
  );
};

export default memo(SocialIcon);
