export enum COLLECTIONS {
  TENANTS = "tenants",
  SHEETS = "sheets_information",
}

export interface PaginationOptions {
  page?: number;
  limit?: number;
}

export interface GetAllRecordsOptions {
  page?: number;
  limit?: number;
  filter?: string;
  sort?: string;
  expand?: string;
}
