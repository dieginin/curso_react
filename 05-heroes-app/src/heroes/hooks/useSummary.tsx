import { getSummary } from "../actions/get-summary.actions"
import { useQuery } from "@tanstack/react-query"

export const useSummary = () => {
  return useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
    staleTime: 1000 * 60 * 5, //5 minutos
  })
}
