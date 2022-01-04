const axios = require('axios');

export const URL = {
  BASE: 'https://api.themoviedb.org/3',
  IMG: 'https://image.tmdb.org/t/p/w342',
  PATH: 'movie',
  HOME: 'trending',
  SEARCH: 'search',
  KEY: '4ba1232211956b1b892cbac98d70442c',
};

axios.defaults.baseURL = URL.BASE;
axios.defaults.params = {
  api_key: URL.KEY,
};

export async function trendingApiService(request) {
  const { data } = await axios(`${URL.HOME}/${URL.PATH}/${request}`);
  return data.results;
}

export async function searchApiService(request) {
  const { data } = await axios(`${URL.SEARCH}/${URL.PATH}`, {
    params: {
      language: 'en-US',
      query: request,
      include_adult: false,
    },
  });

  return data.results;
}

export async function movieApiService(request, id) {
  const { data } = await axios(`${URL.PATH}/${id}${request}`, {
    params: {
      language: 'en-US',
    },
  });

  return data;
}
