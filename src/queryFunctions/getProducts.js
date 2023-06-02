export const getProducts = async () => {
  const a = await fetch('https://fakestoreapi.com/products').then(async response => response.json())
  return a
}
