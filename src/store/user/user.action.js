import createAction from "../../utils/reducer";

export const setCurrentUser = (user) => createAction("setCurrentUser", user);
