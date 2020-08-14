const { default: axiosClient } = require('./axiosClient');

class ProductApi {
  getAll(params) {
    const url = '/products';
    return axiosClient.get(url, { params });
  }
}
