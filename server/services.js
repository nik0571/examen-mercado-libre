var HttpService = require('./api/http');

const search = function (text) {
  return new Promise(function (resolve, reject) {
    HttpService.instance.get(`sites/MLA/search?q=${text}#json`).then(response => {
      resolve(response.data)
    })
    .catch(error => {
      reject(error)
    })
  });
};

const getProduct = function (id) {
  return new Promise(function (resolve, reject) {
    const productRequest = HttpService.instance.get(`items/${id}`);
    const descriptionRequest = HttpService.instance.get(`items/${id}/description`);

    return HttpService.axios.all([productRequest, descriptionRequest])
    .then(HttpService.axios.spread(({ data }, { data: dataDescription}) => {
      resolve({
        data,
        description: dataDescription
      })
    })).catch(errors => {
      return errors;
    })

  });
};

module.exports = {
  search,
  getProduct
};
