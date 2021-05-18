import { useQuery } from "react-query";
import { API_ANIME } from "../apiRoutes";

export function useGetEpisodesByID(id) {
  return useQuery(`getEpisodes-${id}`, () =>
    fetch(`${API_ANIME}/${id}/episodes`).then((res) => res.json())
  )
}