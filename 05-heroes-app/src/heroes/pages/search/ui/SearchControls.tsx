import { Filter, Grid, Plus, Search, SortAsc } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRef, type KeyboardEvent } from "react"
import { useSearchParams } from "react-router"
import { Slider } from "@/components/ui/slider"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion"

export const SearchControls = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [searchParams, setSearchParams] = useSearchParams()

  const activeAccordion = searchParams.get("active-accordion") ?? ""
  const strength = +(searchParams.get("strength") ?? "0")

  const setQueryParams = (key: string, value: string) =>
    setSearchParams((prev) => {
      prev.set(key, value)
      return prev
    })

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter")
      setQueryParams("name", inputRef.current?.value ?? "")
  }

  const toggleAdvFilters = () => {
    if (activeAccordion === "advanced-filters") {
      // return setSearchParams((prev) => {
      //   prev.delete("active-accordion")
      //   return prev
      // })
      return setQueryParams("active-accordion", "none")
    }
    setQueryParams("active-accordion", "advanced-filters")
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
          <Button
            variant={
              activeAccordion === "advanced-filters" ? "default" : "outline"
            }
            className='h-12'
            onClick={toggleAdvFilters}
          >
            <Filter className='w-4 h-4 mr-2' />
            Filtros
          </Button>

          <Button variant='outline' className='h-12'>
            <SortAsc className='w-4 h-4 mr-2' />
            Ordenar por nombre
          </Button>

          <Button variant='outline' className='h-12'>
            <Grid className='w-4 h-4' />
          </Button>

          <Button className='h-12'>
            <Plus className='w-4 h-4 mr-2' />
            Agregar
          </Button>
        </div>
      </div>

      {/* Advanced Filters */}
      <Accordion type='single' collapsible value={activeAccordion}>
        <AccordionItem value='advanced-filters'>
          <AccordionContent>
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
                <label className='text-sm font-medium'>
                  Fuerza minima: {strength}/10
                </label>
                <Slider
                  className='relative flex items-center w-full mt-2 select-none touch-none'
                  defaultValue={[strength]}
                  max={10}
                  step={1}
                  onValueChange={(values) =>
                    setQueryParams("strength", values[0].toString())
                  }
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}
