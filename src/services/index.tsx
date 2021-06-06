import http, { axios } from "../api/http";

let cancelSearchRequest: any;
let cancelGetProductRequest: any;
let CancelToken = axios.CancelToken;

const search = (match: string) => {

  if(cancelSearchRequest) {
    cancelSearchRequest();
  }

  return http.get(`items?q=${match}#json`, {
    cancelToken: new CancelToken(function executor(c: any) {
      cancelSearchRequest = c;
    }),
  });
};

const getProduct = (id: string) => {
  if(cancelGetProductRequest) {
    cancelGetProductRequest();
  }

  return http.get(`items/${id}`, {
    cancelToken: new CancelToken(function executor(c: any) {
      cancelGetProductRequest = c;
    }),
  });
}


export { search, getProduct };
