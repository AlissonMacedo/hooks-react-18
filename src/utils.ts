export const generateProducts = () => {
  const numbers = [ ...new Array(10000).keys()].map(
    (_, index) => `Product ${index}`
  )
  return numbers
}

export const filterProducts = (productsList: string[], search: string) => {
  return productsList.filter((product) => product.toLocaleLowerCase().includes(search))
}
