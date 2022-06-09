import { FC, memo } from "react";
import Image from "next/image";
import styled from "@emotion/styled";


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
  <div>
    Social ICON
  </div>
  );
};

export default memo(SocialIcon);
