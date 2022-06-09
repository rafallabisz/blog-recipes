import React from "react";
import SEO from "@/components/common/seo";
import SiteMetaData from "@/utils/site-meta-data";
import routes from "@/routes";
import ActiveLink from "@/components/common/active-link";
import DefaultLayout from "@/components/layouts/default-layout";

const Custom404 = () => {
    return (
        <DefaultLayout
            meta={
                <SEO
                    title={`${SiteMetaData.siteTitle} | Not found page`}
                    description={SiteMetaData.description}
                />
            }
        >
            <div className={'container'}>
                <h3>404 - Not found page</h3>
                <p>
                    Back to {``}
                    <ActiveLink href={routes.home}>
                        <a>Home page</a>
                    </ActiveLink>
                </p>
            </div>
        </DefaultLayout>
    );
};

export default Custom404;
