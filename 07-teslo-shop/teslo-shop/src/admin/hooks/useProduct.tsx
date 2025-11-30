import { useMutation, useQuery } from "@tanstack/react-query"

import { createUpdateProduct } from "../actions/create-update-product.action"
import { getProductById } from "../actions/get-product-by-id.action"

export const useProduct = (id: string) => {
  const query = useQuery({
    queryKey: ["product", { id }],
    queryFn: () => getProductById(id),
    retry: false,
    staleTime: 1000 * 60 * 5,
    // enabled: !!id,
  })

  const mutation = useMutation({
    mutationFn: createUpdateProduct,
    onSuccess: (product) => console.log("Todo salio bien", product),
  })

  // const handleSubmit = async (productLike: Partial<Product>): Promise<void> => {
  //   console.log({ productLike })
  // }

  return { ...query, mutation }
}
