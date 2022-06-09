const dev = {
  API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
};

const prod = {
  API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
};

const config = process.env.NODE_ENV === "development" ? dev : prod;

export default config;
