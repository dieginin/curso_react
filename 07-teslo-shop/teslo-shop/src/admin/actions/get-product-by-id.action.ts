import type { Product } from "@/interfaces/product.interface"
import { tesloApi } from "@/api/teslo.api"
import { transformImageUrl } from "@/lib/transformImageUrl"

export const getProductById = async (id: string): Promise<Product> => {
  if (!id) throw new Error("Id is required")

  if (id === "new") {
    return {
      id: "new",
      title: "",
      price: 0,
      description: "",
      slug: "",
      stock: 0,
      sizes: [],
      gender: "unisex",
      tags: [],
      images: [],
    } as unknown as Product
  }

  const { data } = await tesloApi.get<Product>(`/products/${id}`)

  const images = data.images.map((image) => transformImageUrl(image))

  return { ...data, images }
}
