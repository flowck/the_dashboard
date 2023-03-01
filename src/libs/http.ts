import axios, { AxiosError } from "axios";

export const http = axios.create();
export type HttpRequestError = AxiosError;
