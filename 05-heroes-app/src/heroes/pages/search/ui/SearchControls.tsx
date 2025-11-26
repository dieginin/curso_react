import { Filter, Grid, Plus, Search, SortAsc } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRef, type KeyboardEvent } from "react"
import { useSearchParams } from "react-router"

export const SearchControls = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [searchParams, setSearchParams] = useSearchParams()

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      setSearchParams((prev) => {
        prev.set("name", inputRef.current?.value ?? "")
        return prev
      })
    }
  }

  return (
    <>
      <div className='flex flex-col gap-4 mb-8 lg:flex-row'>
        {/* Search */}
        <div className='relative flex-1'>
          <Search className='absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2' />
          <Input
            ref={inputRef}
            defaultValue={searchParams.get("name") ?? ""}
            placeholder='Buscar heroes, villanos, poderes, equipos...'
            className='h-12 pl-12 text-lg bg-white'
            onKeyDown={handleKeyDown}
          />
        </div>

        {/* Action buttons */}
        <div className='flex gap-2'>
          <Button variant='outline' className='h-12 bg-transparent'>
            <Filter className='w-4 h-4 mr-2' />
            Filtros
          </Button>

          <Button variant='outline' className='h-12 bg-transparent'>
            <SortAsc className='w-4 h-4 mr-2' />
            Ordenar por nombre
          </Button>

          <Button variant='outline' className='h-12 bg-transparent'>
            <Grid className='w-4 h-4' />
          </Button>

          <Button className='h-12'>
            <Plus className='w-4 h-4 mr-2' />
            Agregar
          </Button>
        </div>
      </div>

      {/* Advanced Filters */}
      <div className='p-6 mb-8 bg-white border rounded-lg shadow-sm'>
        <div className='flex items-center justify-between mb-4'>
          <h3 className='text-lg font-semibold'>Filtros Avanzados</h3>
          <Button variant='ghost'>Limpiar filtros</Button>
        </div>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <div className='space-y-2'>
            <label className='text-sm font-medium'>Equipo</label>
            <div className='w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background'>
              Todos
            </div>
          </div>
          <div className='space-y-2'>
            <label className='text-sm font-medium'>Categoría</label>
            <div className='w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background'>
              Todos
            </div>
          </div>
          <div className='space-y-2'>
            <label className='text-sm font-medium'>Universo</label>
            <div className='w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background'>
              Todos
            </div>
          </div>
          <div className='space-y-2'>
            <label className='text-sm font-medium'>Estatus</label>
            <div className='w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background'>
              Todos
            </div>
          </div>
        </div>
        <div className='mt-4'>
          <label className='text-sm font-medium'>Fuerza minima: 0/10</label>
          <div className='relative flex items-center w-full mt-2 select-none touch-none'>
            <div className='relative w-full h-2 overflow-hidden rounded-full grow bg-secondary'>
              <div
                className='absolute h-full bg-primary'
                style={{ width: "0%" }}
              />
            </div>
            <div className='block w-5 h-5 transition-colors border-2 rounded-full border-primary bg-background ring-offset-background' />
          </div>
        </div>
      </div>
    </>
  )
}
