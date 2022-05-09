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
