import userActionTypes from "../../reducer-action-types/user/user.action.tyoes";
import userActions from "./../../interfaces/user.interfaces";

const initialState = {
  user: {
    name: "გელა",
    surname: "გელაშვილი",
  },
  loading: false,
};

const userReducer = (state = initialState, action: userActions) => {
  const { type, payload } = action;
  switch (type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
