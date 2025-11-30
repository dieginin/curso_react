import { Plus, SaveAll, Tag, Upload, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import type { Product } from "@/interfaces/product.interface"
import { Title } from "@/admin/components/Title"
import { cn } from "@/lib/utils"
import { useForm } from "react-hook-form"
import { useState } from "react"

const availableSizes = ["XS", "S", "M", "L", "XL", "XXL"]

interface Props {
  title: string
  subtitle: string
  product: Product
}

export const ProductForm = ({ title, subtitle, product }: Props) => {
  const [dragActive, setDragActive] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: product,
  })

  const addTag = () => {
    if (newTag.trim() && !product.tags.includes(newTag.trim())) {
      //   setProduct((prev) => ({
      //     ...prev,
      //     tags: [...prev.tags, newTag.trim()],
      //   }))
    }
  }

  const removeTag = (tagToRemove: string) => {
    // setProduct((prev) => ({
    //   ...prev,
    //   tags: prev.tags.filter((tag) => tag !== tagToRemove),
    // }))
  }

  const addSize = (size: string) => {
    if (!product.sizes.includes(size)) {
      //   setProduct((prev) => ({
      //     ...prev,
      //     sizes: [...prev.sizes, size],
      //   }))
    }
  }

  const removeSize = (sizeToRemove: string) => {
    // setProduct((prev) => ({
    //   ...prev,
    //   sizes: prev.sizes.filter((size) => size !== sizeToRemove),
    // }))
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    const files = e.dataTransfer.files
    console.log(files)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    console.log(files)
  }

  // TODO remover
  const onSubmit = (productLike: Product) => {
    console.log("onSubmite", productLike)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex items-center justify-between'>
        <Title title={title} subtitle={subtitle} />
        <div className='flex justify-end gap-4 mb-10'>
          <Button variant='outline'>
            <Link to='/admin/products' className='flex items-center gap-2'>
              <X className='w-4 h-4' />
              Cancelar
            </Link>
          </Button>

          <Button>
            <SaveAll className='w-4 h-4' />
            Guardar cambios
          </Button>
        </div>
      </div>

      <div className='px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          {/* Main Form */}
          <div className='space-y-6 lg:col-span-2'>
            {/* Basic Information */}
            <div className='p-6 bg-white border shadow-lg rounded-xl border-slate-200'>
              <h2 className='mb-6 text-xl font-semibold text-slate-800'>
                Información del producto
              </h2>

              <div className='space-y-6'>
                <div>
                  <label className='block mb-2 text-sm font-medium text-slate-700'>
                    Título del producto
                  </label>
                  <input
                    type='text'
                    {...register("title", {
                      required: true,
                    })}
                    className={cn(
                      "w-full px-4 py-3 border rounded-lg border-slate-300 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                      { "border-red-500": errors.title }
                    )}
                    placeholder='Título del producto'
                  />
                  {errors.title && (
                    <p className='text-sm text-red-500'>
                      El titulo es requerido
                    </p>
                  )}
                </div>

                <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                  <div>
                    <label className='block mb-2 text-sm font-medium text-slate-700'>
                      Precio ($)
                    </label>
                    <input
                      type='number'
                      {...register("price")}
                      className='w-full px-4 py-3 transition-all duration-200 border rounded-lg border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='Precio del producto'
                    />
                  </div>

                  <div>
                    <label className='block mb-2 text-sm font-medium text-slate-700'>
                      Stock del producto
                    </label>
                    <input
                      type='number'
                      {...register("stock")}
                      className='w-full px-4 py-3 transition-all duration-200 border rounded-lg border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='Stock del producto'
                    />
                  </div>
                </div>

                <div>
                  <label className='block mb-2 text-sm font-medium text-slate-700'>
                    Slug del producto
                  </label>
                  <input
                    type='text'
                    {...register("slug")}
                    className='w-full px-4 py-3 transition-all duration-200 border rounded-lg border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='Slug del producto'
                  />
                </div>

                <div>
                  <label className='block mb-2 text-sm font-medium text-slate-700'>
                    Género del producto
                  </label>
                  <select
                    {...register("gender")}
                    className='w-full px-4 py-3 transition-all duration-200 border rounded-lg border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  >
                    <option value='men'>Hombre</option>
                    <option value='women'>Mujer</option>
                    <option value='unisex'>Unisex</option>
                    <option value='kids'>Niño</option>
                  </select>
                </div>

                <div>
                  <label className='block mb-2 text-sm font-medium text-slate-700'>
                    Descripción del producto
                  </label>
                  <textarea
                    {...register("description")}
                    rows={5}
                    className='w-full px-4 py-3 transition-all duration-200 border rounded-lg resize-none border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='Descripción del producto'
                  />
                </div>
              </div>
            </div>

            {/* Sizes */}
            <div className='p-6 bg-white border shadow-lg rounded-xl border-slate-200'>
              <h2 className='mb-6 text-xl font-semibold text-slate-800'>
                Tallas disponibles
              </h2>

              <div className='space-y-4'>
                <div className='flex flex-wrap gap-2'>
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className='inline-flex items-center px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 border border-blue-200 rounded-full'
                    >
                      {size}
                      <button
                        // onClick={() => removeSize(size)}
                        className='ml-2 text-blue-600 transition-colors duration-200 hover:text-blue-800'
                      >
                        <X className='w-3 h-3' />
                      </button>
                    </span>
                  ))}
                </div>

                <div className='flex flex-wrap gap-2 pt-2 border-t border-slate-200'>
                  <span className='mr-2 text-sm text-slate-600'>
                    Añadir tallas:
                  </span>
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      //   onClick={() => addSize(size)}
                      //   disabled={product.sizes.includes(size)}
                      //   className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                      //     product.sizes.includes(size)
                      //       ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                      //       : "bg-slate-200 text-slate-700 hover:bg-slate-300 cursor-pointer"
                      //   }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className='p-6 bg-white border shadow-lg rounded-xl border-slate-200'>
              <h2 className='mb-6 text-xl font-semibold text-slate-800'>
                Etiquetas
              </h2>

              <div className='space-y-4'>
                <div className='flex flex-wrap gap-2'>
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className='inline-flex items-center px-3 py-1 text-sm font-medium text-green-800 bg-green-100 border border-green-200 rounded-full'
                    >
                      <Tag className='w-3 h-3 mr-1' />
                      {tag}
                      <button
                        // onClick={() => removeTag(tag)}
                        className='ml-2 text-green-600 transition-colors duration-200 hover:text-green-800'
                      >
                        <X className='w-3 h-3' />
                      </button>
                    </span>
                  ))}
                </div>

                <div className='flex gap-2'>
                  <input
                    type='text'
                    // value={newTag}
                    // onChange={(e) => setNewTag(e.target.value)}
                    // onKeyDown={(e) => e.key === "Enter" && addTag()}
                    placeholder='Añadir nueva etiqueta...'
                    className='flex-1 px-4 py-2 transition-all duration-200 border rounded-lg border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  />
                  {/* <Button onClick={addTag} className='px-4 py-2rounded-lg '>
                    <Plus className='w-4 h-4' />
                  </Button> */}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className='space-y-6'>
            {/* Product Images */}
            <div className='p-6 bg-white border shadow-lg rounded-xl border-slate-200'>
              <h2 className='mb-6 text-xl font-semibold text-slate-800'>
                Imágenes del producto
              </h2>

              {/* Drag & Drop Zone */}
              <div
                className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200 ${
                  dragActive
                    ? "border-blue-400 bg-blue-50"
                    : "border-slate-300 hover:border-slate-400"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type='file'
                  multiple
                  accept='image/*'
                  className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                  onChange={handleFileChange}
                />
                <div className='space-y-4'>
                  <Upload className='w-12 h-12 mx-auto text-slate-400' />
                  <div>
                    <p className='text-lg font-medium text-slate-700'>
                      Arrastra las imágenes aquí
                    </p>
                    <p className='text-sm text-slate-500'>
                      o haz clic para buscar
                    </p>
                  </div>
                  <p className='text-xs text-slate-400'>
                    PNG, JPG, WebP hasta 10MB cada una
                  </p>
                </div>
              </div>

              {/* Current Images */}
              <div className='mt-6 space-y-3'>
                <h3 className='text-sm font-medium text-slate-700'>
                  Imágenes actuales
                </h3>
                <div className='grid grid-cols-2 gap-3'>
                  {product.images.map((image, index) => (
                    <div key={index} className='relative group'>
                      <div className='flex items-center justify-center border rounded-lg aspect-square bg-slate-100 border-slate-200'>
                        <img
                          src={image}
                          alt='Product'
                          className='object-cover w-full h-full rounded-lg'
                        />
                      </div>
                      <button className='absolute p-1 text-white transition-opacity duration-200 bg-red-500 rounded-full opacity-0 top-2 right-2 group-hover:opacity-100'>
                        <X className='w-3 h-3' />
                      </button>
                      <p className='mt-1 text-xs truncate text-slate-600'>
                        {image}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Status */}
            <div className='p-6 bg-white border shadow-lg rounded-xl border-slate-200'>
              <h2 className='mb-6 text-xl font-semibold text-slate-800'>
                Estado del producto
              </h2>

              <div className='space-y-4'>
                <div className='flex items-center justify-between p-3 rounded-lg bg-slate-50'>
                  <span className='text-sm font-medium text-slate-700'>
                    Estado
                  </span>
                  <span className='px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full'>
                    Activo
                  </span>
                </div>

                <div className='flex items-center justify-between p-3 rounded-lg bg-slate-50'>
                  <span className='text-sm font-medium text-slate-700'>
                    Inventario
                  </span>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      product.stock > 5
                        ? "bg-green-100 text-green-800"
                        : product.stock > 0
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.stock > 5
                      ? "En stock"
                      : product.stock > 0
                      ? "Bajo stock"
                      : "Sin stock"}
                  </span>
                </div>

                <div className='flex items-center justify-between p-3 rounded-lg bg-slate-50'>
                  <span className='text-sm font-medium text-slate-700'>
                    Imágenes
                  </span>
                  <span className='text-sm text-slate-600'>
                    {product.images.length} imágenes
                  </span>
                </div>

                <div className='flex items-center justify-between p-3 rounded-lg bg-slate-50'>
                  <span className='text-sm font-medium text-slate-700'>
                    Tallas disponibles
                  </span>
                  <span className='text-sm text-slate-600'>
                    {product.sizes.length} tallas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
