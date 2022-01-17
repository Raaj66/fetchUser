import { ApiHelper } from "./ApiHelper";

const apiHelper = new ApiHelper();

export class ApiService {
  fetchDetails() {
    return apiHelper.get("https://randomuser.me/api");
  }
}
