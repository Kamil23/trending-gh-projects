import { GET_REPOSITORY_LIST } from "../constants"

interface ListParams {
  language?: string;
  since?: "daily" | "weekly" | "monthly"
}

export const fetchList = async (params: ListParams ) => {
  const data = await fetch(GET_REPOSITORY_LIST);
  return data.json();
}