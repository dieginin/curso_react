import { getHeroesByPage } from "../actions/get-heroes-by-page.actions"
import { useQuery } from "@tanstack/react-query"

export const usePaginatedHero = (
  page: number,
  limit: number,
  category: string
) => {
  return useQuery({
    queryKey: ["heroes", { page, limit, category }],
    queryFn: () => getHeroesByPage(page, limit, category),
    staleTime: 1000 * 60 * 5, // 5 minutos
  })
}
