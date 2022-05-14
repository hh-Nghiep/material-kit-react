import axiosClient from "./axiosClient";

const ProductsApi = {
  getAllProduct: (param) => {
    const url = "/api/v1/products";
    return axiosClient.get(url, { param });
  },
};

export default ProductsApi;
