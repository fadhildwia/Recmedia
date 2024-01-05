import API from "../utils/axios";

export const movieAPI = {
  fetchListMovie: ({ pageParam = 1 }) => {
    const result: any = API.get<any>(`/movie?page=${1}`)
    
    const data = { ...result.data, pageParam: pageParam }
    return result
  }
};