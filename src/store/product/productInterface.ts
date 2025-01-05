export interface ProductInterface {
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: string | null;
    isLoadingProductDetail: boolean;
    productDetailData :null;
    isLoadingRelatedProducts: boolean;
    relatedProductsData: any | null;
    isLoadingAddToCart: boolean;
}

