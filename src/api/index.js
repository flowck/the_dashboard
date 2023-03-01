import { request } from './request';

export function submitExpense(params) {
  return request("post", `/expenses`, { "header": { "accept": "application/json", }, })(params);
}

export function signUp(params) {
  return request("post", `/signup`, { "header": { "accept": "application/json", "Content-Type": "application/json", }, })(params);
}

export function confirmAccount(params) {
  return request("put", `/signup/confirm/${params.path.accountConfirmationToken}`, { "header": { "Content-Type": "application/json", }, })(params);
}

