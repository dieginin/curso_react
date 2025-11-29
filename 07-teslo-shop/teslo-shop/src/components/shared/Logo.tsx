import { Link } from "react-router"

interface Props {
  subtitle?: string
}

export const Logo = ({ subtitle = "Shop" }: Props) => {
  return (
    <Link to='/' className='flex items-center whitespace-nowrap'>
      <span className='m-0 text-xl font-bold font-montserrat'>Teslo |</span>
      <p className='px-2 m-0 text-muted-foreground'>{subtitle}</p>
    </Link>
  )
}
