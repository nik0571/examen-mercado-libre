import http, { axios } from "../api/http";

let cancelFetchRequest: any;
let CancelToken = axios.CancelToken;

const search = (string: any) => {

  if(cancelFetchRequest) {
    cancelFetchRequest();
  }

  return http.get(`sites/MLA/search?q=${string}#json`, {
    cancelToken: new CancelToken(function executor(c: any) {
      cancelFetchRequest = c;
    }),
  });
};

export { search };
