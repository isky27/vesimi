import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { setOpenLoginPopup } from "store/auth/authDataSlice"
import { addToCart, addWishList, getProductDetails, getRealtedProducts } from "store/product/productSlice"
import { useAppDispatch, useAppSelector } from "store/redux.hooks"
import { getVarient } from "utils"

const ProductDetailController = () => {

    const { productId } = useParams()
    const dispatch = useAppDispatch()
    const [selectedImage, setSelectedImage] = useState("")
    const [selectedSize, setSelectedSize] = useState("")
    const [selectedDesigner, setSelectedDesigner] = useState("")
    const [selectedColor, setSelectedColor] = useState("")
    const [selectedPrice, setSelectedPrice] = useState("")
    const { isLoadingProductDetail, productDetailData, isLoadingRelatedProducts, relatedProductsData, isLoadingAddToCart, isLoadingWishList } = useAppSelector((state: any) => state.product);
    const { loginDetails } = useAppSelector((state: any) => state.auth);
    const [ isOpenSizeChart, setIsOpenSizeChart ] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getProductDetails({ productId: productId }))
        dispatch(getRealtedProducts({ productId: productId }))
    }, [dispatch, productId])

    useEffect(() => {
      if (selectedSize && productDetailData?.data?.[0]) {
        const varient = getVarient({
          size: selectedSize,
          color: selectedColor.split(" ").join(""),
          designer: selectedDesigner.split(" ").join(""),
        });

        let price =
          productDetailData?.data[0].variant.find(
            (el: any) => el?.sku?.toLowerCase() === varient?.toLowerCase()
          )?.price || productDetailData?.data[0]?.main_price;
        setSelectedPrice(price);
      }
    }, [selectedSize, productDetailData]);

    useEffect(() => {
        if (productDetailData?.data[0]?.main_price) {
            setSelectedPrice(productDetailData?.data[0]?.main_price);
        }
        if (productDetailData?.data[0]?.photos?.[0]?.path) {
            setSelectedImage(productDetailData?.data[0]?.photos?.[0]?.path);
        }
        if(productDetailData?.data[0]?.choice_options?.find((el:any)=>el.title==="Designer")?.options[0]){
            setSelectedDesigner(productDetailData?.data[0]?.choice_options?.find((el:any)=>el.title==="Designer")?.options[0])
        }
        return (()=>{
            setSelectedImage("")
            setSelectedDesigner("")
        })
    }, [productDetailData])


    const addToWishList = (productId:any) => {
        if(loginDetails?.access_token){
            dispatch(addWishList({
                user_id: loginDetails?.user?.id ,
                product_id: productId
            }))
        }else{
            dispatch(setOpenLoginPopup(true))
        }
    }

    const handleAddToCart = () => {
        const varient = getVarient({
          size: selectedSize,
          color: selectedColor.split(" ").join(""),
          designer: selectedDesigner.split(" ").join(""),
        }); 
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
      selectedSize,
      setSelectedSize,
      handleAddToCart,
      selectedDesigner,
      setSelectedDesigner,
      isLoadingAddToCart,
      isOpenSizeChart,
      setIsOpenSizeChart,
      addToWishList,
      isLoadingWishList,
      selectedPrice,
      setSelectedPrice,
    };
}

export default ProductDetailController