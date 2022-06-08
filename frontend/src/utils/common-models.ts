export interface IGenericResponse<T> {
  data: IDataResponse<T>[];
  meta: IMetaResponse;
}

export interface IDataResponse<T> {
  id: number;
  attributes: T;
}

export interface IMetaResponse {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface IImage {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: null | string;
  provider: string;
  provider_metadata?: null | string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAuthor {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}
