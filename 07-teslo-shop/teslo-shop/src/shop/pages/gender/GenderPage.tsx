import { Jumbotron } from "@/shop/components/Jumbotron"
import { Pagination } from "@/components/shared/Pagination"
import { ProductsGrid } from "@/shop/components/ProductsGrid"
import { useParams } from "react-router"
import { useProducts } from "@/shop/hooks/useProducts"

export const GenderPage = () => {
  const { gender } = useParams()
  const { data } = useProducts()

  const genderLabel =
    gender === "men" ? "Hombres" : gender === "women" ? "Mujeres" : "Niños"

  return (
    <>
      <Jumbotron title={`Productos para ${genderLabel}`} />
      <ProductsGrid products={data?.products || []} />
      <Pagination totalPages={data?.pages || 0} />
    </>
  )
}
