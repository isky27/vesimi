import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductDetails } from "store/product/productSlice"
import { useAppDispatch, useAppSelector } from "store/redux.hooks"

const ProductDetailController = ()=>{

    const {productId} = useParams()
    const dispatch = useAppDispatch()
    const { isLoadingProductDetail, productDetailData } = useAppSelector((state:any) => state.product);

    useEffect(()=>{
        dispatch(getProductDetails({productId:productId}))
    },[productId])

return {
    isLoadingProductDetail, productDetailData
}

}

export default ProductDetailController