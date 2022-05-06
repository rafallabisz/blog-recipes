import Head from "next/head";
import { FC } from "react";
import { useRouter } from "next/router";
import SiteMetaData from "@/utils/site-meta-data";

interface SEOProps {
  title: string;
  description?: string;
}

const SEO: FC<SEOProps> = ({ title, description = title }) => {
  const { asPath } = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="canonical"
        href={`${SiteMetaData.siteUrl}${asPath}`}
        key="canonical"
      />
    </Head>
  );
};

export default SEO;
