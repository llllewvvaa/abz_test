// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {client} from "./fetchCli";
import {serverResponse} from "../types/types";
// queryParams: string
export const getAllUsers = (url: string,criterion?: string[][]) => {
  return client.get<serverResponse>(url, criterion);
};
