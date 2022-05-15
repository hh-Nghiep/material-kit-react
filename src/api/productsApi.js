import axiosClient from "./axiosClient";

const ProductsApi = {
  getAllProduct: (param) => {
    const url = "/api/v1/products";
    return axiosClient.get(url, { param });
  },

  updateProduct: (param) => {
    const url = "/api/v1/product/update";
    return axiosClient.put(url, param)
  }
};

export default ProductsApi;
