import { FC, ReactNode } from "react";
import Navbar from "@/components/common/navbar";

interface Props {
  meta: ReactNode;
  children: ReactNode;
}

const DefaultLayout: FC<Props> = ({ children, meta }) => {
  return (
    <div>
      {meta}
      <Navbar />
      {/* <Container maxW={"1300px"}> */}
        <main>{children}</main>
      {/* </Container> */}
      {/*<Footer />*/}
    </div>
  );
};

export default DefaultLayout;
