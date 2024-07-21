import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/redux.hooks';
import {
  homeTopCategory,
  homeMainSlider,
  featureCagtegory,
  featureProduct,
  bestSellerProduct,
  searchProduct,
  lovedCollectionProduct,
  ownDesignerProduct,
  exclusiveCollectionProduct,
  celebrityStyleProduct,
} from "store/home/home.slice";
import { useNavigate } from 'react-router-dom';

/**
 * 
 * @returns all controllers for login page.
 */

const HomeController = () => {

    // Import data from auth selector

    const [searchKey, setSearchKey] = useState("")

    const navigate = useNavigate()

    const dispatch = useAppDispatch()
    const { isLoadingMainSlider, mainSliderData, isLoadingTopCategory, topCategoryData,  isLoadingFeatureCategory,
      featureCategoryData,  isLoadingFeatureProduct, featureProductData, isLoadingBestSellerProduct,
      bestSellerProductData, ownDesignerData, lovedCollectionData, exclusiveCollectionData, isLoadingCelebrityProduct,
      celebrityProductData } = useAppSelector((state:any) => state.home);

    useEffect(()=>{
      dispatch(homeMainSlider())
      dispatch(homeTopCategory())
      dispatch(featureCagtegory())
      // dispatch(featureProduct())
      dispatch(bestSellerProduct())
      dispatch(ownDesignerProduct())
      dispatch(lovedCollectionProduct())
      dispatch(exclusiveCollectionProduct());
      dispatch(celebrityStyleProduct())
    },[dispatch])

    // All the state and function return to LoginView
    return {
      isLoadingMainSlider,
      mainSliderData,
      isLoadingTopCategory,
      topCategoryData,
      isLoadingFeatureCategory,
      featureCategoryData,
      isLoadingBestSellerProduct,
      bestSellerProductData,
      ownDesignerData,
      lovedCollectionData,
      exclusiveCollectionData,
      isLoadingCelebrityProduct,
      celebrityProductData,
      navigate,
    };

}

export default HomeController
