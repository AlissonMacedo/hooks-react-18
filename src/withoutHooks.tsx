import { ChangeEvent, useState } from 'react'
import { Product, Products } from './styles'
import { filterProducts, generateProducts } from './utils'

const productsList = generateProducts()

function withoutHooks() {
  const [search, setSearch] = useState('')

  const products = filterProducts(productsList, search)

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <Products>
      <span>Total: {products.length}</span>
      <input type="text" onChange={handleSearch} />
      {products.map(product => (<Product>{product}</Product>))}
    </Products>
  )
}

export default withoutHooks
