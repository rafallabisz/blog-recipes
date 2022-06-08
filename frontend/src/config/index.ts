const dev = {
  // API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  API_URL:"https://vast-spire-39737.herokuapp.com/api"
};

const prod = {
  API_URL:"https://vast-spire-39737.herokuapp.com/api"
  // API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
};

const config = process.env.NODE_ENV === "development" ? dev : prod;

export default config;
