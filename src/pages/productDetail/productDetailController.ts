import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductDetails, getRealtedProducts } from "store/product/productSlice"
import { useAppDispatch, useAppSelector } from "store/redux.hooks"

const ProductDetailController = ()=>{

    const {productId} = useParams()
    const dispatch = useAppDispatch()
    const { isLoadingProductDetail, productDetailData, isLoadingRelatedProducts, relatedProductsData } = useAppSelector((state:any) => state.product);

    useEffect(()=>{
        dispatch(getProductDetails({productId:productId}))
        dispatch(getRealtedProducts({productId:productId}))
    },[dispatch, productId])

return {
    isLoadingProductDetail, productDetailData, isLoadingRelatedProducts, relatedProductsData
}

}

export default ProductDetailController