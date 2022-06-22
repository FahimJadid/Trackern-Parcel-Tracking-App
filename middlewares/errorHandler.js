import { GeneralError } from "../utils/error.js";

export const errorHandler = async (err, req, res, next) => {
  if (err instanceof GeneralError) {
    const statusCode = err.getCode();
    return res
      .status(statusCode)
      .json({ name: err.name, message: err.message });
  }

  // We don't know any known error if we came into this point
  return res.status(500).json({
    name: "Internal Server Error",
    message: err.message,
  });
};
