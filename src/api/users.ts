// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {client} from "./fetchCli";
import {serverResponse} from "../types/types";

export const getAllUsers = (criterion?: string[][]) => {
  return client.get<serverResponse>('/users', criterion);
};
