import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductDetails, getRealtedProducts } from "store/product/productSlice"
import { useAppDispatch, useAppSelector } from "store/redux.hooks"

const ProductDetailController = () => {

    const { productId } = useParams()
    const dispatch = useAppDispatch()
    const [selectedImage, setSelectedImage] = useState("")
    const [selectedSize, setSelectedSize] = useState("")
    const { isLoadingProductDetail, productDetailData, isLoadingRelatedProducts, relatedProductsData } = useAppSelector((state: any) => state.product);



    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getProductDetails({ productId: productId }))
        dispatch(getRealtedProducts({ productId: productId }))
    }, [dispatch, productId])

    useEffect(() => {
        if (productDetailData?.data[0]?.photos?.[0]?.path) {
            setSelectedImage(productDetailData?.data[0]?.photos?.[0]?.path)
        }

    }, [productDetailData])

    return {
        isLoadingProductDetail,
        productDetailData,
        isLoadingRelatedProducts,
        relatedProductsData,
        selectedImage,
        setSelectedImage,
        selectedSize, setSelectedSize
    }
}

export default ProductDetailController