import { useParams, useSearchParams } from "react-router"

import { getProducts } from "@/shop/actions/get-products.action"
import { useQuery } from "@tanstack/react-query"

export const useProducts = () => {
  const [searchParams] = useSearchParams()
  const { gender } = useParams()

  const limit = searchParams.get("limit") || 9
  const page = searchParams.get("page") || 1
  const sizes = searchParams.get("sizes") || undefined

  const offset = (+page - 1) * +limit

  return useQuery({
    queryKey: ["products", { limit, offset, gender, sizes }],
    queryFn: () =>
      getProducts({
        limit: isNaN(+limit) ? 9 : limit,
        offset: isNaN(offset) ? 0 : offset,
        gender,
        sizes,
      }),
    staleTime: 1000 * 60 * 5,
  })
}
