import { BadRequest } from "../utils/error.js";

export const validationHandler = (validate) => {
  return (req, res, next) => {
    const result = validate(req.body);
    result.error;
    const isValid = result.error == null;
    if (isValid) {
      return next();
    }
    const { details } = result.error;
    const messages = details.map((e) => e.message);
    const msg = messages.join(",");
    throw new BadRequest(msg);
  };
};
