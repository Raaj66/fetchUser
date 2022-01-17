import axios from "axios";

export class ApiHelper {
  async get(url: string) {
    const response = axios.get(url, {
      headers: {},
    });
    return response;
  }
}
