interface Props {
  placeholder?: string
}

export function SearchBar({ placeholder = "Buscar" }: Props) {
  return (
    <div className='search-container'>
      <input type='text' placeholder={placeholder} />
      <button>Buscar</button>
    </div>
  )
}
