import type { NextPage } from "next";
import DefaultLayout from "@/components/layouts/default-layout";
import SiteMetaData from "@/utils/site-meta-data";
import SEO from "@/components/common/seo";
import Hero from "@/components/common/hero";
import HomeComponent from "@/components/modules/home";
import homeService from "@/components/modules/home/services";
import { IGenericResponse } from "@/utils/common-models";
import { IRecipe } from "@/components/modules/home/models";

type Props = {
  recipes: IGenericResponse<IRecipe>;
};

const Home: NextPage<Props> = ({recipes}) => {
  return (
    <DefaultLayout meta={<SEO title={`${SiteMetaData.siteTitle} | Home`} />}>
      <Hero />
      <HomeComponent recipes={recipes} />
    </DefaultLayout>
  );
};

export const getServerSideProps = async () => {
  const recipes = await homeService.getRecipes();
  return {
    props: {
      recipes,
    },
  };
};

export default Home;
