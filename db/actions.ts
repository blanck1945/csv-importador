import {
  COLLECTIONS,
  GetAllRecordsOptions,
  PaginationOptions,
} from "./collections";
import { addConditionalProps, getPaginationData } from "./helpers";
import pb from "./pocketbase";

const setDefatults = (options) => {
  return {
    page: options.page || 1,
    limit: options.limit || 100,
    filter: options.filter || "",
    sort: options.sort || "",
  };
};

export const getAllRecords = async (
  collection: COLLECTIONS,
  options: GetAllRecordsOptions = {}
) => {
  const paginationData = getPaginationData(options.page, options.limit);
  return await pb
    .collection(collection)
    .getList(
      paginationData.page,
      paginationData.limit,
      addConditionalProps(options)
    );
};

export const getRecord = async (collection, id, options = {}) => {
  return await pb
    .collection(collection)
    .getOne(id, addConditionalProps(options));
};

export const createRecord = async (collection, data, options = {}) => {
  return await pb
    .collection(collection)
    .create(data, addConditionalProps(options));
};

export const PocketBase = {
  getAllRecords,
  getRecord,
  createRecord,
};
