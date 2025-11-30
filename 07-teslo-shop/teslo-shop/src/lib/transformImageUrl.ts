export const transformImageUrl = (image: string) => {
  if (image.includes("http")) return image
  return `${import.meta.env.VITE_API_URL}/files/product/${image}`
}
