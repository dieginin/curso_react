interface Props {
  title: string
  subtitle?: string
}

export const Jumbotron = ({ title, subtitle }: Props) => {
  const defaultSubtitle =
    "Ropa minimalista y elegante inspirada en el diseño futurista de Tesla. Calidad premium para un estilo atemporal."

  return (
    <section className='px-4 py-10 lg:px-8 bg-muted/30'>
      <div className='container mx-auto text-center'>
        <h1 className='mb-6 text-2xl font-light tracking-tight font-montserrat lg:text-5xl'>
          {title}
        </h1>
        <p className='max-w-2xl mx-auto mb-8 text-xl text-muted-foreground'>
          {subtitle || defaultSubtitle}
        </p>
      </div>
    </section>
  )
}
