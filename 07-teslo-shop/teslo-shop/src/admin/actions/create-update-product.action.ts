import type { Product } from "@/interfaces/product.interface"
import { sleep } from "@/lib/sleep"
import { tesloApi } from "@/api/teslo.api"
import { transformImageUrl } from "@/lib/transformImageUrl"
import { uploadFiles } from "./upload-files.action"

export const createUpdateProduct = async (
  productLike: Partial<Product> & { files?: File[] }
): Promise<Product> => {
  await sleep(1500)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, user, images = [], files = [], ...rest } = productLike

  const isCreating = id === "new"

  rest.stock = Number(rest.stock || 0)
  rest.price = Number(rest.price || 0)

  if (files.length > 0) {
    const newImageNames = await uploadFiles(files)
    images.push(...newImageNames)
  }

  const { data } = await tesloApi<Product>({
    url: isCreating ? "/products" : `/products/${id}`,
    method: isCreating ? "POST" : "PATCH",
    data: { ...rest, images: images.map((image) => transformImageUrl(image)) },
  })

  return data
}
