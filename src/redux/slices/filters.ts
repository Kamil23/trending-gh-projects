import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { GET_REPOSITORY_LIST } from '../../constants';

interface InitialState {
  loading: Boolean | null;
  error:  unknown | null;
  time: "daily" | "weekly" | "monthly" | null;
  programmingLang: String | null;
  list: TrendsList;
}

interface ListItem {
  id: number; label: string; key: any
}

interface TrendsList extends Array<ListItem>{}

const initialState: InitialState = {
  //state
  loading: null,
  error: null,

  //filters
  time: null,
  programmingLang: null,

  //data
  list: []
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    startLoading(state) {
      state.loading = true;
    },
    hasError(state, action: PayloadAction<unknown>) {
      state.loading = false;
      state.error = action.payload;
    },
    selectTime(state, action: PayloadAction<InitialState["time"]>) {
      state.time = action.payload;
    },
    selectProgrammingLang(state, action: PayloadAction<InitialState["programmingLang"]>) {
      state.programmingLang = action.payload;
    },
    getListSuccess(state, action: PayloadAction<TrendsList>) {
      state.loading = false;
      state.list = action.payload;
    },
  }
});

export default slice.reducer;

export const {
  selectTime,
  selectProgrammingLang,
} = slice.actions;

export async function getList(values: Array<{ language: String, since: String }>) {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response: Response = await fetch(`${GET_REPOSITORY_LIST}?${values.toString()}`);
      dispatch(slice.actions.getListSuccess((<any>response).data));
    } catch (err) {
      dispatch(slice.actions.hasError(err));
    }
  };
}
