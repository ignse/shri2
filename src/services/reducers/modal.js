import {
  SHOW_NEW_BUILD_POPUP,
  HIDE_NEW_BUILD_POPUP,
} from '../actions/modal';

const initialState = {
  buildPopupVisible: false
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NEW_BUILD_POPUP: {
      return {
        ...state,
        buildPopupVisible: true,
      };
    }
    case HIDE_NEW_BUILD_POPUP: {
      return {
        ...state,
        buildPopupVisible: false
      };
    }
    default: {
      return state;
    }
  }
};
