import { useMutation, useQuery } from "@tanstack/react-query"

import type { Product } from "@/interfaces/product.interface"
import { getProductById } from "../actions/get-product-by-id.action"

export const useProduct = (id: string) => {
  const query = useQuery({
    queryKey: ["product", { id }],
    queryFn: () => getProductById(id),
    retry: false,
    staleTime: 1000 * 60 * 5,
    // enabled: !!id,
  })

  //   TODO mutación
  //   const mutation = useMutation()

  const handleSubmit = async (productLike: Partial<Product>): Promise<void> => {
    console.log({ productLike })
  }

  return { ...query, handleSubmit }
}
