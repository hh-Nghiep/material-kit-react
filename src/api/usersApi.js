import axiosClient from "./axiosClient";

const userApi = {
  getAlluser: (param) => {
    const url = "/api/v1/users";
    return axiosClient.get(url, { param });
  },

  findUser: (id) => {
    const url = `/api/v1/${id}`;
    return axiosClient.get(url);
  },
};

export default userApi;
