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
  login: (param) => {
    const url = `api/v1/auth/login`;
    return axiosClient.post(url, param);
  },
};
export default userApi;
