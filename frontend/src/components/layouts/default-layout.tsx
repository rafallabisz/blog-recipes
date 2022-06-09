import { FC, ReactNode } from "react";
import Navbar from "@/components/common/nav-bar";
import Header from "@/components/common/header";

interface Props {
  meta: ReactNode;
  children: ReactNode;
}

const DefaultLayout: FC<Props> = ({ children, meta }) => {
  return (
    <div>
      {meta}
      <Header />
      <main>{children}</main>
      <Navbar />
    </div>
  );
};

export default DefaultLayout;
