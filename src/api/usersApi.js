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
  getUser: () => {
    const url = "/api/v1/user";
    return axiosClient.get(url);
  },
  updateUser: (param) => {
    const url = "/api/v1/user/update";
    return axiosClient.put(url, param);
  },
};
export default userApi;
