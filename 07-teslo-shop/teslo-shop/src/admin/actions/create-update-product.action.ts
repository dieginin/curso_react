import type { Product } from "@/interfaces/product.interface"
import { sleep } from "@/lib/sleep"
import { tesloApi } from "@/api/teslo.api"
import { transformImageUrl } from "@/lib/transformImageUrl"

export const createUpdateProduct = async (
  productLike: Partial<Product> & { files?: File[] }
): Promise<Product> => {
  await sleep(1500)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, user, images = [], files = [], ...rest } = productLike

  const isCreating = id === "new"

  rest.stock = Number(rest.stock || 0)
  rest.price = Number(rest.price || 0)

  console.log({ files })

  const { data } = await tesloApi<Product>({
    url: isCreating ? "/products" : `/products/${id}`,
    method: isCreating ? "POST" : "PATCH",
    data: rest,
  })

  return { ...data, images: images.map((image) => transformImageUrl(image)) }
}
