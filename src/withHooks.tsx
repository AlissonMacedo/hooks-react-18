import { ChangeEvent, useState, useTransition } from 'react'
import { Product, Products } from './styles'
import { filterProducts, generateProducts } from './utils'

const productsList = generateProducts()

function withHooks() {
  const [search, setSearch] = useState('')
  const [isPending, startTransaction] = useTransition()

  const products = filterProducts(productsList, search)

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    startTransaction(() => {
      setSearch(event.target.value)
    })
  }

  return (
    <Products>
      <span>Total: {products.length}</span>
      <input type="text" onChange={handleSearch} />
      {isPending && <span>Carregando...</span>}
      {products.map(product => (<Product>{product}</Product>))}
    </Products>
  )
}

export default withHooks
