import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { setOpenLoginPopup } from "../../store/auth/authDataSlice"
import { addToCart, addWishList, getProductDetails, getRealtedProducts } from "../../store/product/productSlice"
import { useAppDispatch, useAppSelector } from "../../store/redux.hooks"
import { extractNumber, getVarient } from "../../utils"

const ProductDetailController = () => {

    const { productId } = useParams()
    const dispatch = useAppDispatch()
    const [selectedImage, setSelectedImage] = useState("")
    const [selectedChoice, setSelectedChoice] = useState([])
    const [selectedPrice, setSelectedPrice] = useState("")
    const { isLoadingProductDetail, productDetailData, isLoadingRelatedProducts, relatedProductsData, isLoadingAddToCart, isLoadingWishList } = useAppSelector((state: any) => state.product);
    const { loginDetails } = useAppSelector((state: any) => state.auth);
    const [isOpenSizeChart, setIsOpenSizeChart] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getProductDetails({ productId: productId }))
        dispatch(getRealtedProducts({ productId: productId }))
    }, [dispatch, productId])

    useEffect(() => {
        if (productDetailData?.data[0]) {
            let initialOption = productDetailData?.data[0]?.choice_options?.map((el: any) =>
                ({ [el.title.toLowerCase()]: el.options[0] })
            )
            setSelectedChoice(initialOption);
            const varient = getVarient(initialOption);
            let price =
                productDetailData?.data[0].variant.find(
                    (el: any) => el?.sku?.toLowerCase() === varient?.toLowerCase()
                )?.price || extractNumber(productDetailData?.data[0]?.main_price);
            setSelectedPrice(price);
        }

        if (productDetailData?.data[0]?.photos?.[0]?.path) {
            setSelectedImage(productDetailData?.data[0]?.photos?.[0]?.path);
        }
        return (() => {
            setSelectedImage("")
            setSelectedChoice([])
        })
    }, [productDetailData])


    useEffect(() => {
        if (selectedChoice?.length > 0 && productDetailData?.data?.[0]) {
            const varient = getVarient(selectedChoice);

            let price =
                productDetailData?.data[0].variant.find(
                    (el: any) => el?.sku?.toLowerCase() === varient?.toLowerCase()
                )?.price || productDetailData?.data[0]?.main_price;
            setSelectedPrice(price);
        }
    }, [selectedChoice, productDetailData]);

    const addToWishList = (productId: any) => {
        if (loginDetails?.access_token) {
            dispatch(addWishList({
                user_id: loginDetails?.user?.id,
                product_id: productId
            }))
        } else {
            dispatch(setOpenLoginPopup(true))
        }
    }

    const setChoice = (category: string, choice: any) => {
        setSelectedChoice((prev: any) =>
            prev.map((element: any) => {
                return Object.keys(element)[0] === category.toLowerCase() ? { [category.toLowerCase()]: choice } : element;
            })
        );
    };

    const handleAddToCart = () => {
        const varient = getVarient(selectedChoice);
        const combinedObject = selectedChoice.reduce((acc: any, obj: any) => {
            return { ...acc, ...obj };
          }, {})
        if (loginDetails?.access_token) {
            dispatch(addToCart({
                id: productDetailData?.data[0]?.id,
                variant: varient,
                ...combinedObject,
                user_id: loginDetails?.user?.id,
                quantity: 1,
            }));
        } else {
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
        handleAddToCart,
        isLoadingAddToCart,
        isOpenSizeChart,
        setIsOpenSizeChart,
        addToWishList,
        isLoadingWishList,
        selectedPrice,
        selectedChoice,
        setChoice
    };
}

export default ProductDetailController