import { useQuery } from "react-query";
import { API_ANIME, API_ANIME_TRENDING } from "../apiRoutes";


export function useGetTrendingAnime() {
  return useQuery("trendingData", () => 
    fetch(API_ANIME_TRENDING).then((res) => res.json())
  )
}

export function useGetRecentlyUpdated() {
  return useQuery("recentlyUpdated", () =>
  fetch(
    `${API_ANIME}?sort=-updatedAt&filter[status]=current&filter[subtype]=TV`
  ).then((res) => res.json()) );
}

export function useGetAnimeById(id) {
  return useQuery(`getAnimeId-${id}`, () =>
    fetch(`${API_ANIME}/${id}`).then((res) => res.json())
  )
}

export default function useGetAnime(filter, sort = [], id = 0) {
  return useQuery(`getAnime-${id}`, () =>
    fetch(`${API_ANIME}${convertObjectToFilterandSort(filter, sort)}`).then((res) => res.json())
  )
}

export function convertObjectToFilterandSort(filter, sort = []) {
  let queryParameters = ''
  let hasSort = false

  if (sort.length !== 0) {
    queryParameters += `?sort=${sort.join(',')}`
    hasSort = true
  } 

  Object.keys(filter).forEach((key, index) => {
      if (index === 0 && !hasSort) {
          queryParameters = '?'
      }
      else queryParameters += '&'

      queryParameters += `filter[${key}]=${filter[key]}`
  })
  return queryParameters
}