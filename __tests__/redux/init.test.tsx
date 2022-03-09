import reducer, { selectTime, selectProgrammingLang } from '../../src/redux/slices/filters'

test('should return the initial state', () => {
  expect(reducer(undefined, {'type': Object})).toEqual(
    {
      loading: null,
      error: null,
      time: null,
      programmingLang: null,
      sort: null,
      repositoriesList: [],
      filteredList: [],
      languagesList: []
    }
  )
})

test('should handle a time option being added to time state', () => {
  const previousState = undefined;
  expect(reducer(previousState, selectTime("monthly"))).toEqual(
    {
      loading: null,
      error: null,
      time: "monthly",
      programmingLang: null,
      sort: null,
      repositoriesList: [],
      filteredList: [],
      languagesList: []
    }
  )
})

test('should add selected programming language to current state', () => {
  const previousSelectedLang = {
    urlParam: "vue",
    name: "Vue"
  }
  
  const previousState = {
    loading: null,
    error: null,
    time: null,
    sort: null,
    programmingLang: previousSelectedLang,
    repositoriesList: [],
    filteredList: [],
    languagesList: []
  };

  const selectedLang = {
    urlParam: "typescript",
    name: "Typescript"
  }

  expect(reducer(previousState, selectProgrammingLang(selectedLang))).toEqual(
    {
      loading: null,
      error: null,
      time: null,
      sort: null,
      programmingLang: selectedLang,
      repositoriesList: [],
      filteredList: [],
      languagesList: []
    }
  )
})