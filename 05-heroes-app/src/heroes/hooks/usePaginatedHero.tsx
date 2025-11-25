import { getHeroesByPage } from "../actions/get-heroes-by-page.actions"
import { useQuery } from "@tanstack/react-query"

export const usePaginatedHero = (page: number, limit: number) => {
  return useQuery({
    queryKey: ["heroes", { page, limit }],
    queryFn: () => getHeroesByPage(page, limit),
    staleTime: 1000 * 60 * 5, // 5 minutos
  })
}
