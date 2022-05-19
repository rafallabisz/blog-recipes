import Axios from "axios";
import { QueryClient } from "react-query";
import config from "@/config";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: (failureCount: number, error: any) => {
        const status = Number(error?.response?.status);
        if (status === 401) {
          return false;
        }
        if (failureCount === 2) {
          return false;
        }
        return true;
      },
    },
  },
});

export const http = Axios.create({
  baseURL: config.API_URL,
});

export enum PostsController {
  POSTS = "/posts/?populate=*",
}
