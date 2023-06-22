import User from "../types/User";

const hostname = window.location.hostname;

export const isAuth = () =>
  localStorage.getItem(`${hostname}_jwt_token`) ? true : false;

export const logout = () => {
  localStorage.removeItem(`${hostname}_jwt_token`);
  localStorage.removeItem(`${hostname}_user`);
  localStorage.removeItem(`${hostname}_resource_filters`);
  window.location.replace(`${window.location.origin}/login`);
};

export const login = (response: any) => {
  if (response) {
    localStorage.setItem(`${hostname}_jwt_token`, response.data.access_token);
    saveUser(response.data.user);
  }
  window.location.replace(window.location.origin);
};

export const saveUser = (user: User) => {
  localStorage.setItem(`${hostname}_user`, JSON.stringify(user));
};

export const getUser = ():User => {
  const user = localStorage.getItem(`${hostname}_user`);
  return user ? JSON.parse(user) : user;
};
