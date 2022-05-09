import { FC, ReactNode } from "react";
import Navbar from "@/components/common/navbar";
import { Container } from "@chakra-ui/react";

interface Props {
  meta: ReactNode;
  children: ReactNode;
}

const DefaultLayout: FC<Props> = ({ children, meta }) => {
  return (
    <div>
      {meta}
      <Navbar />
      <Container maxW={"1300px"}>
        <main>{children}</main>
      </Container>
      {/*<Footer />*/}
    </div>
  );
};

export default DefaultLayout;
