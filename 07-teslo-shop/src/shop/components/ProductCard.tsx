import { Card, CardContent } from "@/components/ui/card"

import { Button } from "@/components/ui/button"

interface Props {
  id: string
  name: string
  price: number
  image: string
  category: string
}

export const ProductCard = ({ id, name, price, image, category }: Props) => {
  return (
    <Card className='border-0 shadow-none cursor-pointer group product-card-hover'>
      <CardContent className='p-0'>
        <div className='relative overflow-hidden rounded-lg aspect-square bg-muted'>
          <img
            src={image}
            alt={`${id} - ${name}`}
            className='object-cover w-full h-full transition-transform duration-300 group-hover:scale-105'
          />
          <div className='image-overlay' />
        </div>

        <div className='px-4 pt-6 pb-4 space-y-3'>
          <div className='space-y-1'>
            <h3 className='text-sm font-medium tracking-tight'>{name}</h3>
            <p className='text-xs uppercase text-muted-foreground'>
              {category}
            </p>
          </div>

          <div className='flex items-center justify-between'>
            <p className='text-lg font-semibold'>${price}</p>
            <Button
              size='sm'
              variant='outline'
              className='h-8 px-4 py-2 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground border-primary/20'
            >
              Agregar al carrito
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
