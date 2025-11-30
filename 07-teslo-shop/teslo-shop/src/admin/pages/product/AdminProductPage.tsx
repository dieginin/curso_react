import { Navigate, useNavigate } from "react-router"

import { FullScreenLoading } from "@/components/shared/FullScreenLoading"
import type { Product } from "@/interfaces/product.interface"
import { ProductForm } from "./ui/ProductForm"
import { toast } from "sonner"
import { useParams } from "react-router"
import { useProduct } from "@/admin/hooks/useProduct"

export const AdminProductPage = () => {
  const navigate = useNavigate()

  const { id } = useParams()
  const { data: product, isLoading, mutation } = useProduct(id || "")

  const title = id === "new" ? "Nuevo producto" : "Editar producto"
  const subtitle =
    id === "new"
      ? "Aquí puedes crear un nuevo producto."
      : "Aquí puedes editar el producto."

  const handleSubmit = async (
    productLike: Partial<Product> & { files?: File[] }
  ) => {
    await mutation.mutateAsync(productLike, {
      onSuccess: (data) => {
        toast.success(`Producto '${data.title}' actualizado correctamente`, {
          position: "top-right",
        })
        navigate(`/admin/products/${data.id}`)
      },
      onError: () => toast.error("Error al actualizar el producto"),
    })
  }

  if (isLoading) return <FullScreenLoading />
  if (!product) return <Navigate to='/admin/products' />

  return (
    <ProductForm
      title={title}
      subtitle={subtitle}
      product={product}
      onSubmit={handleSubmit}
      disabled={mutation.isPending}
    />
  )
}
