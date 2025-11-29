import type { ProductsResponse } from "@/interfaces/products.response"
import { tesloApi } from "@/api/teslo.api"

const transformImageUrl = (image: string) =>
  `${import.meta.env.VITE_API_URL}/files/product/${image}`

export const getProducts = async (): Promise<ProductsResponse> => {
  const { data } = await tesloApi.get<ProductsResponse>("/products")

  const updatedProducts = data.products.map((product) => ({
    ...product,
    images: product.images.map(transformImageUrl),
  }))

  return {
    ...data,
    products: updatedProducts,
  }
}
