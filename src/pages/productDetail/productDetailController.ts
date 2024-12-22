import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { setOpenLoginPopup } from "store/auth/authDataSlice"
import { addToCart, getProductDetails, getRealtedProducts } from "store/product/productSlice"
import { useAppDispatch, useAppSelector } from "store/redux.hooks"

const ProductDetailController = () => {

    const { productId } = useParams()
    const dispatch = useAppDispatch()
    const [selectedImage, setSelectedImage] = useState("")
    const [selectedSize, setSelectedSize] = useState("")
    const [selectedDesigner, setSelectedDesigner] = useState("")
    const [selectedColor, setSelectedColor] = useState("")
    const { isLoadingProductDetail, productDetailData, isLoadingRelatedProducts, relatedProductsData, isLoadingAddToCart } = useAppSelector((state: any) => state.product);
    const { loginDetails } = useAppSelector((state: any) => state.auth);

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getProductDetails({ productId: productId }))
        dispatch(getRealtedProducts({ productId: productId }))
    }, [dispatch, productId])

    useEffect(() => {
        if (productDetailData?.data[0]?.photos?.[0]?.path) {
            setSelectedImage(productDetailData?.data[0]?.photos?.[0]?.path)
        }
        if(productDetailData?.data[0]?.choice_options?.find((el:any)=>el.title==="Designer")?.options[0]){
            setSelectedDesigner(productDetailData?.data[0]?.choice_options?.find((el:any)=>el.title==="Designer")?.options[0])
        }
        return (()=>{
            setSelectedImage("")
            setSelectedDesigner("")
        })
    }, [productDetailData])

    const handleAddToCart = () => {
        const varient = selectedSize+"-"+selectedDesigner.split(" ").join("")
        if(loginDetails?.access_token){
            dispatch(addToCart({
                id: productDetailData?.data[0]?.id,
                variant: varient,
                ...(selectedSize && { size: selectedSize }),
                ...(selectedDesigner && { designer: selectedDesigner }),
                ...(selectedColor && { color: selectedColor }),
                user_id: loginDetails?.user?.id,
                quantity: 1,
            }));
        }else{
            dispatch(setOpenLoginPopup(true))
        }
    }

    return {
        isLoadingProductDetail,
        productDetailData,
        isLoadingRelatedProducts,
        relatedProductsData,
        selectedImage,
        setSelectedImage,
        selectedSize, setSelectedSize,
        handleAddToCart,
        selectedDesigner, setSelectedDesigner,
        isLoadingAddToCart
    }
}

export default ProductDetailController