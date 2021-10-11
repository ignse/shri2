import {
  LOAD_BUILDS
} from '../actions/builds';

const initialState = {
  builds: []
};

export const buildsReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOAD_BUILDS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
