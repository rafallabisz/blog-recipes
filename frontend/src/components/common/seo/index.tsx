import Head from "next/head";
import { FC } from "react";
import { useRouter } from "next/router";
import SiteMetaData from "@/utils/site-meta-data";
import { concatArrSeparator } from "@/utils/helpers";
import theme from "@/styles/theme";

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
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <link
        rel="canonical"
        href={`${SiteMetaData.siteCanonical}${asPath}`}
        key="canonical"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="keywords"
        content={concatArrSeparator(SiteMetaData.keywords, ", ")}
      />
      <meta name="viewport" content="width=device-width" />
      <meta name="author" content={SiteMetaData.siteAuthor} key="author" />
      <meta name="theme-color" content={theme.colors.gray100} />

      {/* FACEBOOK START */}
      <meta
        property="og:title"
        content={`${title ? title : SiteMetaData.siteTitle}`}
        key="og:title"
      />
      <meta
        property="og:description"
        content={description ? description : SiteMetaData.description}
        key="og:description"
      />
      <meta
        property="og:locale"
        content={SiteMetaData.siteLocale}
        key="og:locale"
      />
      <meta
        property="og:site_name"
        content={SiteMetaData.siteName}
        key="og:site_name"
      />
      <meta property="og:site" content={SiteMetaData.siteWWWUrl} key="ogsite" />
      <meta property="og:url" content={SiteMetaData.siteUrl} key="ogurl" />
      <meta property="og:type" content={"website"} key="ogtype" />
      <meta
        property="og:image"
        content={SiteMetaData.siteImageToSocials}
        key="ogimg"
      />
      <meta
        property="og:image:alt"
        content={SiteMetaData.description}
        key="ogimgalt"
      />
      {/* FACEBOOK END */}

      {/* TWITTER START */}
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twittercard"
      />
      <meta
        name="twitter:title"
        content={SiteMetaData.siteTitle}
        key="twittertitle"
      />
      <meta
        name="twitter:site"
        content={SiteMetaData.siteName}
        key="twittersite"
      />
      <meta
        name="twitter:creator"
        content={SiteMetaData.siteName}
        key="twittercreator"
      />
      <meta
        name="twitter:image"
        content={SiteMetaData.siteImageToSocials}
        key="twitterimg"
      />
      <meta
        name="twitter:image:alt"
        content={SiteMetaData.description}
        key="twitterimgalt"
      />
      <meta
        property="twitter:description"
        content={SiteMetaData.description}
        key="twitterdesc"
      />
      {/* TWITTER END */}
    </Head>
  );
};

export default SEO;
