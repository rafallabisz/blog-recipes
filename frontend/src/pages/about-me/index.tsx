import type { NextPage } from "next";
import SiteMetaData from "@/utils/site-meta-data";
import DefaultLayout from "@/components/layouts/default-layout";
import SEO from "@/components/common/seo";
import dynamic from "next/dynamic";
import ComingSoon from "@/components/common/coming-soon";

const AboutMe = dynamic(() => import("@/components/modules/about-me/pages"));

type Props = {};

const AboutMePage: NextPage<Props> = () => {
  return (
    <DefaultLayout
      meta={
        <SEO
          title={`${SiteMetaData.siteTitle} | About me`}
          description={SiteMetaData.description}
        />
      }
    >
      {/*<AboutMe />*/}
      <ComingSoon />
    </DefaultLayout>
  );
};

export default AboutMePage;
