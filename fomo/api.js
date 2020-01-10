import axios from "axios";

export const verifyUser = (username, password) => {
  return axios
    .post("https://fomo-api.herokuapp.com/auth", {
      username: username,
      password: password
    })
    .then(({ data }) => {
      return data;
    });
};

export const postUser = (
  username,
  password,
  email,
  ageRange,
  location,
  gender
) => {
  return axios
    .post("https://fomo-api.herokuapp.com/register", {
      username: username,
      password: password,
      email: email,
      location: location,
      age: ageRange,
      gender: gender
    })
    .then(({ data }) => {
      return data;
    });
};
