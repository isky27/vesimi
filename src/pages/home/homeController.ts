import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/redux.hooks';
import { homeTopCategory, homeMainSlider, featureCagtegory, featureProduct, bestSellerProduct, searchProduct } from 'store/home/home.slice';

/**
 * 
 * @returns all controllers for login page.
 */

const HomeController = () => {

    // Import data from auth selector

    const [searchKey, setSearchKey] = useState("")

    const dispatch = useAppDispatch()
    const { isLoadingMainSlider, mainSliderData, isLoadingTopCategory, topCategoryData,  isLoadingFeatureCategory,
      featureCategoryData,  isLoadingFeatureProduct,
      featureProductData, isLoadingBestSellerProduct,
      bestSellerProductData } = useAppSelector((state:any) => state.home);

    useEffect(()=>{
      dispatch(homeMainSlider())
      dispatch(homeTopCategory())
      dispatch(featureCagtegory())
      // dispatch(featureProduct())
      dispatch(bestSellerProduct())
    },[dispatch])

    console.log(isLoadingFeatureCategory,
      featureCategoryData, "isLoadingFeatureCategory featureCategoryData");

    // All the state and function return to LoginView
    return {
      isLoadingMainSlider, 
      mainSliderData,
      isLoadingTopCategory, 
      topCategoryData,
      isLoadingFeatureCategory,
      featureCategoryData,
      isLoadingBestSellerProduct,
      bestSellerProductData 
    }

}

export default HomeController
