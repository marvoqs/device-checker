import { UPDATE_FILTER } from '../actions/types';

const initialState: FilterStateType = {
  available: false,
  model: '',
  os: '',
  vendor: '',
};

const filterReducer = (state: FilterStateType = initialState, action: FilterActionType): FilterStateType => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default filterReducer;
