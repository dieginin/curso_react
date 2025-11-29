import type { ProductsResponse } from "@/interfaces/products.response"
import { tesloApi } from "@/api/teslo.api"

const transformImageUrl = (image: string) =>
  `${import.meta.env.VITE_API_URL}/files/product/${image}`

interface Options {
  limit?: number | string
  offset?: number | string
  gender?: string
  sizes?: string
  maxPrice?: number
  minPrice?: number
}

export const getProducts = async (
  options: Options
): Promise<ProductsResponse> => {
  const { limit, offset, gender, sizes, maxPrice, minPrice } = options

  const { data } = await tesloApi.get<ProductsResponse>("/products", {
    params: { limit, offset, gender, sizes, maxPrice, minPrice },
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
