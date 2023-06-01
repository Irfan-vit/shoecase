import { useQuery } from '@tanstack/react-query'
import { productDetail } from '../api/products'

const useProductDetailData = (productId) => {
  return useQuery(['id', productId], () => productDetail(productId))
}

export default useProductDetailData
