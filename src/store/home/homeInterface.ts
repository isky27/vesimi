/**
 * Authentication State Interface
 */


export interface HomeInterface {
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | null;
  isLoadingMainSlider: boolean;
  mainSliderData: any;
  isLoadingTopCategory: boolean;
  topCategoryData: any;
  isLoadingFeatureCategory: boolean;
  featureCategoryData: any;
  ownDesignerData: any;
  exclusiveCollectionData: any;
  lovedCollectionData: any;
  isLoadingFeatureProduct: boolean;
  featureProductData: any;
  isLoadingBestSellerProduct: boolean;
  bestSellerProductData: any;
  isLoadingMenuBar: boolean;
  headerMenuData: any;
}

