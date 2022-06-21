import configureUserController from "./userController.js";

const configureUser = (app) => {
  configureUserController(app);
};

export default configureUser;
