import { Jumbotron } from "@/shop/components/Jumbotron"
import { Pagination } from "@/components/shared/Pagination"
import { ProductsGrid } from "@/shop/components/ProductsGrid"
import { useProducts } from "@/shop/hooks/useProducts"

export const HomePage = () => {
  const { data } = useProducts()

  return (
    <>
      <Jumbotron title='Todos los productos' />
      <ProductsGrid products={data?.products || []} />
      <Pagination totalPages={data?.pages || 0} />
    </>
  )
}
