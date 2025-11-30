import { PencilIcon, PlusIcon } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import { FullScreenLoading } from "@/components/shared/FullScreenLoading"
import { Link } from "react-router"
import { Pagination } from "@/components/shared/Pagination"
import { Title } from "@/admin/components/Title"
import { currencyFormatter } from "@/lib/currency-formatter"
import { useProducts } from "@/shop/hooks/useProducts"

export const AdminProductsPage = () => {
  const { data, isLoading } = useProducts()

  if (isLoading) return <FullScreenLoading />

  const products = data?.products || []
  const totalPages = data?.pages || 0

  return (
    <>
      <div className='flex items-center justify-between'>
        <Title
          title='Productos'
          subtitle='Aquí puedes ver y administrar tus productos'
        />

        <div className='flex justify-end mb-10 gap-4'>
          <Link to='/admin/products/new'>
            <Button>
              <PlusIcon />
              Nuevo Producto
            </Button>
          </Link>
        </div>
      </div>

      <Table className='p-10 mb-10 bg-white border border-gray-200 shadow-xs'>
        <TableHeader>
          <TableRow>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead className='text-center'>Categoría</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead className='text-center'>Tallas</TableHead>
            <TableHead className='text-right'>Acciones</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className='object-cover w-20 h-20 rounded-md'
                />
              </TableCell>
              <TableCell>
                <Link
                  to={`/admin/products/${product.id}`}
                  className='underline hover:text-blue-500'
                >
                  {product.title}
                </Link>
              </TableCell>
              <TableCell className='text-right'>
                {currencyFormatter(product.price)}
              </TableCell>
              <TableCell className='text-center'>
                {product.gender.toUpperCase()}
              </TableCell>
              <TableCell>{product.stock} stock</TableCell>
              <TableCell className='text-center'>
                {product.sizes.join(",")}
              </TableCell>
              <TableCell>
                <Link to={`/admin/products/${product.id}`}>
                  <PencilIcon className='w-4 h-4 text-blue-500' />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination totalPages={totalPages} />
    </>
  )
}
