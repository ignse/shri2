import {
  SAVE_SETTINGS
} from '../actions/settings';

const initialState = {
  repo_name: '',
  build_command: '',
  branch: '',
  sync_time: ''
};

export const settingsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SAVE_SETTINGS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};
