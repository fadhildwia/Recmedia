import API from "../utils/axios";

export const movieAPI = {
  fetchListMovie: async ({ pageParam = 1 }) => {
    try {
      const result: any = await API.get<any>(`/movie?page=${pageParam}`);
      const data = { ...result.data.data, pageParam: pageParam };
      return data;
    } catch (error) {
      console.error('Error fetching movie list:', error);
      throw error;
    }
  }
};