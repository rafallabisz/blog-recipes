import { FC, memo } from "react";
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
   <div>Navbar</div>
  );
};

export default memo(Navbar);
