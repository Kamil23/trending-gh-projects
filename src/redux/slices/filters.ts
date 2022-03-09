import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { REPOSITORIES_LIST_URL, LANGUAGES_URL } from '../../constants';
import { SortOption } from '../../interfaces';

export interface InitialState {
  loading: Boolean | null;
  error:  unknown | null;
  time: "daily" | "weekly" | "monthly" | null;
  sort: SortOption | null;
  programmingLang: LanguageItem | null;
  repositoriesList: RepositoriesList;
  filteredList: RepositoriesList;
  languagesList: LanguagesList;
}

interface RepositoryItem {
  author: string | undefined;
  description: string;
  language: string;
  name: string;
  stars: number;
  url: string;
}

export interface LanguageItem {
  urlParam: string;
  name: string | null;
}

export interface RepositoriesList extends Array<RepositoryItem>{}
export interface LanguagesList extends Array<LanguageItem>{}

const initialState: InitialState = {
  //state
  loading: null,
  error: null,

  //filters
  time: null,
  programmingLang: null,
  sort: null,

  //data
  repositoriesList: [],
  filteredList: [],
  languagesList: []
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
    getRepositoriesListSuccess(state, action: PayloadAction<RepositoriesList>) {
      state.loading = false;
      state.repositoriesList = action.payload;
      state.filteredList = action.payload;
    },
    getLanguagesListSuccess(state, action: PayloadAction<LanguagesList>) {
      state.languagesList = action.payload;
    },
    sortList(state, action: PayloadAction<{data: RepositoriesList, type: String}>) {
      const { data, type } = action.payload;
      const dataCopy = [...data];
      if (type === 'descending') {
        state.filteredList = dataCopy.sort((a: RepositoryItem, b: RepositoryItem) => b.stars - a.stars);
      } else if (type === 'ascending') {
        state.filteredList = dataCopy.sort((a: RepositoryItem, b: RepositoryItem) => a.stars - b.stars);
      }
    },
  }
});

export default slice.reducer;

export const {
  selectTime,
  selectProgrammingLang,
  sortList
} = slice.actions;

export function getRepositoriesList(lang: string, time: any) {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const params = {
        "language": lang,
        "since": time
      };
      
      const query: string = Object.keys(params)
        .map((k: string) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k as keyof typeof params]))
        .join('&');

      const response: Response = await fetch(`${REPOSITORIES_LIST_URL}?${query}`);
      const data = await response.json();
      dispatch(slice.actions.getRepositoriesListSuccess(data));
    } catch (err) {
      dispatch(slice.actions.hasError(err));
    }
  };
}

export function getProgrammingLanguages() {
  return async (dispatch: Dispatch) => {
    try {
      const response: Response = await fetch(LANGUAGES_URL);
      const data = await response.json();
      dispatch(slice.actions.getLanguagesListSuccess(data));
    } catch (err) {
      dispatch(slice.actions.hasError(err));
    }
  };
}