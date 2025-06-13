import { BASE_URL, PAGE_SIZE } from 'utilities/constants';
import { axiosInstance } from './api_client';
import { GET_RECEPIES } from './api_urls';

export const getRecipes = async (page: number = 1) => {
  const response = await axiosInstance(BASE_URL).get(GET_RECEPIES, {
    params: {
      from: page === 1 ? 1 : PAGE_SIZE * page - PAGE_SIZE,
      size: PAGE_SIZE,
    },
  });

  return response.data;
};
