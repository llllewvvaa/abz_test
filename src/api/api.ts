// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {client} from "./fetchCli";
import {serverResponse, serverResponsePositions} from "../types/types";
// queryParams: string
export const getAllUsers = (url: string,criterion?: string[][]) => {
  return client.get<serverResponse>(url, criterion);
};

export const getAllPositions = (url: string,criterion?: string[][]) => {
  return client.get<serverResponsePositions>(url, criterion);
};
