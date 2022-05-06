import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import DefaultLayout from "@/components/layouts/default-layout";
import SiteMetaData from "@/utils/site-meta-data";
import SEO from "@/components/common/seo";

const Home: NextPage = () => {
  return (
    <DefaultLayout meta={<SEO title={`${SiteMetaData.siteTitle} | Home`} />}>
      <Box>Home</Box>
    </DefaultLayout>
  );
};

export default Home;
