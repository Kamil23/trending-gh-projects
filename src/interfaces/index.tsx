import { LanguageItem, LanguagesList, RepositoriesList } from "../redux/slices/filters";

export interface Filters {
  selectedTime: "daily" | "weekly" | "monthly" | null;
  selectedLang: LanguageItem | null;
  languagesList: LanguagesList;
}

export interface ListProps {
  readonly data: RepositoriesList
}

export interface SortOption {
  name: String;
  value: String;
}

export interface SortOptions extends Array<SortOption>{}