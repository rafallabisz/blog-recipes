import { css, Global } from "@emotion/react";
import React from "react";

export const GlobalStyles: React.FunctionComponent = () => (
  <>
    <Global
      styles={css`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont,
            Roboto, sans-serif;
          overflow-x: hidden;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }
      `}
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </>
);
