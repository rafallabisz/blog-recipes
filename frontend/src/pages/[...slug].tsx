import type { NextPage } from "next";
import SEO from "@/components/common/seo";
import SiteMetaData from "@/utils/site-meta-data";
import dynamic from "next/dynamic";
import DefaultLayout from "@/components/layouts/default-layout";

const RecipeDetails = dynamic(
  () => import("@/components/modules/home/pages/recipe-details")
);

type Props = {};

const RecipeDetailsPage: NextPage<Props> = () => {
  return (
    <DefaultLayout
      meta={
        <SEO
          title={`${SiteMetaData.siteTitle} | Recipe details`}
          description={SiteMetaData.description}
        />
      }
    >
      <RecipeDetails />
    </DefaultLayout>
  );
};

export default RecipeDetailsPage;
