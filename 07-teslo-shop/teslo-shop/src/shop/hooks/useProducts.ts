import { getProducts } from "@/shop/actions/get-products.action"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router"

export const useProducts = () => {
  const [searchParams] = useSearchParams()

  const limit = searchParams.get("limit") || 9
  const page = searchParams.get("page") || 1
  const offset = (+page - 1) * +limit

  return useQuery({
    queryKey: ["products", { limit, offset }],
    queryFn: () =>
      getProducts({
        limit: isNaN(+limit) ? 9 : limit,
        offset: isNaN(offset) ? 0 : offset,
      }),
    staleTime: 1000 * 60 * 5,
  })
}
