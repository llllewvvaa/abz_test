// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {client} from "./fetchCli";
import {serverResponse, serverResponsePositions, serverResponseToken} from "../types/types";
// queryParams: string
export const getAllUsers = (url: string, criterion?: string[][]) => {
  return client.get<serverResponse>(url, criterion);
};

export const getAllPositions = (url: string, criterion?: string[][]) => {
  return client.get<serverResponsePositions>(url, criterion);
};

export const getToken = (url: string, criterion?: string[][]) => {
  return client.get<serverResponseToken>(url, criterion);
};
