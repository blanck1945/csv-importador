import axios from "axios";
import { HTTP_METHODS } from "../types/enums";

interface RequestOpt {
  method: HTTP_METHODS;
  url: string;
  data?: any;
}

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_API_URL}stocks`;

export const request = async ({ method, url, data = {} }: RequestOpt) => {
  const response = await axios({
    method,
    url,
    data,
  });

  if (response.data.hasError !== false) {
    return "Error al crear el stock";
  }

  return response.data;
};

export const requestSync = ({ method, url, data = {} }: RequestOpt) => {
  const response = fetch(url, {
    method,
    body: JSON.stringify(data),
  });

  const timeout = 5000;
  return setTimeout(() => {
    const unknownResponse = response as unknown;
    const responseToCheck = unknownResponse as any;
    if (responseToCheck.status === 200) {
      return responseToCheck.data;
    } else {
      setTimeout(() => {
        if (responseToCheck.status === 200) {
          return responseToCheck.data;
        } else {
          console.warn("ERROR");
          return "ERROR";
        }
      }, timeout);
    }
  }, timeout);
};
