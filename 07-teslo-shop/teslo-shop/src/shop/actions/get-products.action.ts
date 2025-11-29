import type { ProductsResponse } from "@/interfaces/products.response"
import { tesloApi } from "@/api/teslo.api"

const transformImageUrl = (image: string) =>
  `${import.meta.env.VITE_API_URL}/files/product/${image}`

interface Options {
  limit?: number | string
  offset?: number | string
}

export const getProducts = async (
  options: Options
): Promise<ProductsResponse> => {
  const { limit, offset } = options

  const { data } = await tesloApi.get<ProductsResponse>("/products", {
    params: { limit, offset },
  })

  const updatedProducts = data.products.map((product) => ({
    ...product,
    images: product.images.map(transformImageUrl),
  }))

  return {
    ...data,
    products: updatedProducts,
  }
}
