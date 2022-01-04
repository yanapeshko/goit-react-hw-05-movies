const axios = require('axios');

export const URL = {
  BASE: 'https://api.themoviedb.org/3',
  IMG: 'https://image.tmdb.org/t/p/w342',
  PATH: 'movie',
  HOME: 'trending',
  SEARCH: 'search',
  KEY: 'd59d4b143292fc56b6769ba48f713e41',
};

axios.defaults.baseURL = URL.BASE;
axios.defaults.params = {
  api_key: URL.KEY,
};

// Запросы на списки популярных фильмов НА СЕГОДНЯ для создания коллекции на главной странице
export async function trendingApiService(request) {
  const { data } = await axios(`${URL.HOME}/${URL.PATH}/${request}`);
  return data.results;
}

// Запросы на списки фильмов ПО КЛЮЧЕВОМУ СЛОВУ для создания коллекции на на странице фильмов
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

// Запрос информации О ФИЛЬМЕ, ОБ АКТЁРСКОМ СОСТАВЕ и ОБЗОРОВ для страницы кинофильма
export async function movieApiService(request, id) {
  const { data } = await axios(`${URL.PATH}/${id}${request}`, {
    params: {
      language: 'en-US',
    },
  });

  return data;
}
