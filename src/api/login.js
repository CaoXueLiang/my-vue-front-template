import { requestWithForm } from "../utils/requestHelper";

export function loginManage(data) {
  return requestWithForm("/login", data);
}

export function getUserInfo(data) {
  return requestWithForm("/login", data);
}
