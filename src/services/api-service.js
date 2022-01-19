const axios = require('axios');

export const URL = {
  IMG: 'https://image.tmdb.org/t/p/w342',
  PATH: 'movie',
  HOME: 'trending',
  SEARCH: 'search',
};

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '4ba1232211956b1b892cbac98d70442c',
};

export async function trendingApiService(request) {
  try {
    const { data } = await axios(`${URL.HOME}/${URL.PATH}/${request}`);
    return data.results;
  } catch (e) {
    return Error(e);
  }
}

export async function searchApiService(request) {
  try {
    const { data } = await axios(`${URL.SEARCH}/${URL.PATH}`, {
      params: {
        language: 'en-US',
        query: request,
        include_adult: false,
      },
    });

    return data.results;
  } catch (e) {
    console.error(e);
  }
}

export async function movieApiService(request, id) {
  try {
    const { data } = await axios(`${URL.PATH}/${id}${request}`, {
      params: {
        language: 'en-US',
      },
    });

    return data;
  } catch (e) {
    console.error(e);
  }
}
