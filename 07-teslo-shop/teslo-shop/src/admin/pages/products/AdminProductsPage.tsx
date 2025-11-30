import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import { Pagination } from "@/components/shared/Pagination"
import { PlusIcon } from "lucide-react"
import { Title } from "@/admin/components/Title"

export const AdminProductsPage = () => {
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
            <TableHead className='w-[100px]'>ID</TableHead>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead>Tallas</TableHead>
            <TableHead className='text-right'>Acciones</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell className='font-medium'>1</TableCell>
            <TableCell>
              <img
                src='https://placehold.co/250x250'
                alt='Product'
                className='object-cover w-20 h-20 rounded-md'
              />
            </TableCell>
            <TableCell>Producto 1</TableCell>
            <TableCell className='text-right'>$250.00</TableCell>
            <TableCell>Categoría 1</TableCell>
            <TableCell>100 stock</TableCell>
            <TableCell>XS,S,L</TableCell>
            <TableCell className='text-right'>
              <Link to={`/admin/products/${1}`}>Editar</Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Pagination totalPages={10} />
    </>
  )
}
