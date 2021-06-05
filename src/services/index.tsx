import http, { axios } from "../api/http";

let cancelSearchRequest: any;
let cancelGetProductRequest: any;
let cancelGetProductDescriptionRequest: any;
let CancelToken = axios.CancelToken;

const search = (match: string) => {

  if(cancelSearchRequest) {
    cancelSearchRequest();
  }

  return http.get(`sites/MLA/search?q=${match}#json`, {
    cancelToken: new CancelToken(function executor(c: any) {
      cancelSearchRequest = c;
    }),
  });
};

const getProduct = (id: string) => {
  if(cancelGetProductRequest) {
    cancelGetProductRequest();
  }
  if(cancelGetProductDescriptionRequest) {
    cancelGetProductDescriptionRequest();
  }
  const productRequest = http.get(`items/${id}`, {
    cancelToken: new CancelToken(function executor(c: any) {
      cancelGetProductRequest = c;
    }),
  });

  const descriptionRequest = http.get(`items/${id}/description`, {
    cancelToken: new CancelToken(function executor(c: any) {
      cancelGetProductDescriptionRequest = c;
    }),
  });

  return axios.all([productRequest, descriptionRequest])
  .then(axios.spread(({ data: dataProduct }, { data: dataDescription}) => {
    return {
      product: dataProduct,
      description: dataDescription
    };
  })).catch(errors => {
    return errors;
  })
}


export { search, getProduct };
