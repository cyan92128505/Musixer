import axios, { AxiosError } from "axios";
import { logout } from "./Auth";

const hostname = window.location.hostname;

export const apiOption = {
  baseURL: process.env.REACT_APP_SERVER_URL || "/api",
  withCredentials: true,
  headers: {
    Authorization: localStorage.getItem(`${hostname}_jwt_token`),
  },
};

export const api = axios.create(apiOption);

type NormalResponse = {
  message: string;
};

type StatusCodeHandler = {
  [key: string]: Function;
};

// Handle errors from API request
export const errorHandler = (
  error: AxiosError<NormalResponse>,
  handler: StatusCodeHandler
) => {
  // Set default handler for unauthorized - 401
  handler["401"] = () => {
    logout();
  };
  // Set default handler for bad input - 400
  handler["400"] = handler["400"]
    ? handler["400"]
    : () => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          alert(error.response.data.message);
        }
      };
  // Set default handler for server error - 500
  handler["500"] = handler["500"]
    ? handler["500"]
    : () => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          alert(error.response.data.message);
        }
      };
  // Call the handler if exists
  let statusCode = "500";

  if (error.response && error.response.status) {
    statusCode = error.response.status.toString();
  }

  if (handler[statusCode]) {
    handler[statusCode]();
  }
};
