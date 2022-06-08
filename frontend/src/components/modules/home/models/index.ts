import { IAuthor, IDataResponse, IImage } from "@/utils/common-models";

export interface IRecipe {
  title: string;
  content: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  cover: {
    data: IDataResponse<IImage>;
  };
  author: {
    data: IDataResponse<IAuthor>;
  };
}
