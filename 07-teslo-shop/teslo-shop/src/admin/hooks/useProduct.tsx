import { getProductById } from "../actions/get-product-by-id.action"
import { useQuery } from "@tanstack/react-query"

export const useProduct = (id: string) => {
  const query = useQuery({
    queryKey: ["product", { id }],
    queryFn: () => getProductById(id),
    retry: false,
    staleTime: 1000 * 60 * 5,
    // enabled: !!id,
  })

  //   TODO mutación

  return query
}
