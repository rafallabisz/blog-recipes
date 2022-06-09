import { FC, memo } from "react";
import styled from "@emotion/styled";

const NavbarContainer = styled.nav``;

type Props = {};

const Navbar: FC = (props: Props) => {
  return <NavbarContainer>Navbar</NavbarContainer>;
};

export default memo(Navbar);
