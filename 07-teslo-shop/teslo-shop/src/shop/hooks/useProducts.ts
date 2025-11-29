import { getProducts } from "@/shop/actions/get-products.action"
import { useQuery } from "@tanstack/react-query"

export const useProducts = () => {
  // TODO viene lógica

  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  })
}
