import type { ProductsResponse } from "@/interfaces/products.response"
import { tesloApi } from "@/api/teslo.api"
import { transformImageUrl } from "@/lib/transformImageUrl"

interface Options {
  limit?: number | string
  offset?: number | string
  gender?: string
  sizes?: string
  maxPrice?: number
  minPrice?: number
  query?: string
}

export const getProducts = async (
  options: Options
): Promise<ProductsResponse> => {
  const { limit, offset, gender, sizes, maxPrice, minPrice, query } = options

  const { data } = await tesloApi.get<ProductsResponse>("/products", {
    params: { limit, offset, gender, sizes, maxPrice, minPrice, q: query },
  })

  const products = data.products.map((product) => ({
    ...product,
    images: product.images.map(transformImageUrl),
  }))

  return { ...data, products }
}
