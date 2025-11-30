import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import { createUpdateProduct } from "../actions/create-update-product.action"
import { getProductById } from "../actions/get-product-by-id.action"

export const useProduct = (id: string) => {
  const queryClient = useQueryClient()

  const query = useQuery({
    queryKey: ["product", { id }],
    queryFn: () => getProductById(id),
    retry: false,
    staleTime: 1000 * 60 * 5,
    // enabled: !!id,
  })

  const mutation = useMutation({
    mutationFn: createUpdateProduct,
    onSuccess: (product) => {
      // ! Invalidar cache
      queryClient.invalidateQueries({ queryKey: ["products"] })

      // ! Actualizar query
      queryClient.setQueryData(["product", { id: product.id }], product)
    },
  })

  return { ...query, mutation }
}
