import { Logo } from "@/components/shared/Logo"

export const Footer = () => {
  return (
    <footer className='px-4 py-12 mt-16 border-t lg:px-8'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <Logo />
            <p className='text-sm text-muted-foreground'>
              Ropa inspirada en el diseño minimalista y la innovación de Tesla.
            </p>
          </div>

          <div>
            <h4 className='mb-4 font-medium'>Productos</h4>
            <ul className='text-sm space-y-2 text-muted-foreground'>
              <li>
                <a href='#' className='hover:text-foreground'>
                  Camisetas
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-foreground'>
                  Sudaderas
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-foreground'>
                  Chaquetas
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-foreground'>
                  Accesorios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='mb-4 font-medium'>Ayuda</h4>
            <ul className='text-sm space-y-2 text-muted-foreground'>
              <li>
                <a href='#' className='hover:text-foreground'>
                  Contacto
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-foreground'>
                  Envíos
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-foreground'>
                  Devoluciones
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-foreground'>
                  Guía de Tallas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='mb-4 font-medium'>Empresa</h4>
            <ul className='text-sm space-y-2 text-muted-foreground'>
              <li>
                <a href='#' className='hover:text-foreground'>
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-foreground'>
                  Sustentabilidad
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-foreground'>
                  Carreras
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-foreground'>
                  Prensa
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='pt-8 mt-8 text-sm text-center border-t text-muted-foreground'>
          <p>
            &copy; {new Date().getFullYear()} Teslo Shop. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
