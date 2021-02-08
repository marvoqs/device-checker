import { Dispatch } from 'redux';

import { UPDATE_FILTER } from './types';

export const updateFilter = (formData: FilterType) => (dispatch: Dispatch) => {
  dispatch({
    type: UPDATE_FILTER,
    payload: formData,
  });
};
