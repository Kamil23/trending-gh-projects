import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// slices
import filtersReducer from './slices/filters';

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: []
};

const filtersPersistConfig = {
  key: 'filters',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['time', 'programmingLang']
};

const rootReducer = combineReducers({
  filters: persistReducer(filtersPersistConfig, filtersReducer),
});

export { rootPersistConfig, rootReducer };
