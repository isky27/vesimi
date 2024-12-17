import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/redux.hooks';
import {
  homeTopCategory,
  homeMainSlider,
  featureCagtegory,
  featureProduct,
  tabProduct,
  lovedCollectionProduct,
  ownDesignerProduct,
  exclusiveCollectionProduct,
  getBlogs,
} from "store/home/home.slice";
import { useNavigate } from 'react-router-dom';

/**
 * 
 * @returns all controllers for login page.
 */

const HomeController = () => {

    // Import data from auth selector
    
    const [activeTab, setActiveTab] = useState("");

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const { isLoadingMainSlider, mainSliderData, isLoadingTopCategory, topCategoryData,  isLoadingFeatureCategory,
      featureCategoryData, featureProductData, isLoadingBestSellerProduct,
      ownDesignerData, lovedCollectionData, exclusiveCollectionData, isLoadingCelebrityProduct,
      isLoadingTabProduct, tabProductData, blogsData, isLoadingBlogs } = useAppSelector((state:any) => state.home);
      
    useEffect(()=>{
      window.scrollTo(0, 0);
      dispatch(homeMainSlider())
      dispatch(homeTopCategory())
      dispatch(featureCagtegory())
      dispatch(featureProduct())
      // dispatch(bestSellerProduct())
      dispatch(ownDesignerProduct())
      dispatch(lovedCollectionProduct())
      dispatch(exclusiveCollectionProduct());
      // dispatch(celebrityStyleProduct())
      dispatch(tabProduct())
      dispatch(getBlogs())
    },[dispatch])

    useEffect(() => {
    if(tabProductData && Object.keys(tabProductData)?.length>0){
    setActiveTab(Object.keys(tabProductData)?.[0]);
    }
    }, [tabProductData]);

    console.log(blogsData,"blogsDatablogsDatablogsData");

    // All the state and function return to LoginView
    return {
      isLoadingMainSlider,
      mainSliderData,
      isLoadingTopCategory,
      topCategoryData,
      isLoadingFeatureCategory,
      featureCategoryData,
      isLoadingBestSellerProduct,
      ownDesignerData,
      lovedCollectionData,
      exclusiveCollectionData,
      isLoadingCelebrityProduct,
      navigate,
      activeTab, setActiveTab,
      featureProductData,
      isLoadingTabProduct,
      tabProductData,
      isLoadingBlogs,
      blogsData
    };

}

export default HomeController
