import { FullScreenLoading } from "@/components/shared/FullScreenLoading"
import { Navigate } from "react-router"
import { ProductForm } from "./ui/ProductForm"
import { useParams } from "react-router"
import { useProduct } from "@/admin/hooks/useProduct"

export const AdminProductPage = () => {
  const { id } = useParams()
  const { data: product, isLoading, handleSubmit } = useProduct(id || "")

  const title = id === "new" ? "Nuevo producto" : "Editar producto"
  const subtitle =
    id === "new"
      ? "Aquí puedes crear un nuevo producto."
      : "Aquí puedes editar el producto."

  // TODO eliminar

  if (isLoading) return <FullScreenLoading />
  if (!product) return <Navigate to='/admin/products' />

  return (
    <ProductForm
      title={title}
      subtitle={subtitle}
      product={product}
      onSubmit={handleSubmit}
    />
  )
}
